import express from 'express';
import jwt from 'jsonwebtoken';

import User from '../models/UserModel';
import errorParser from '../utils/errorParser';
import { sendConfirmationEmail, sendResetPasswordEmail } from '../utils/mailer';

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, username, password } = req.body.user;
  const user = new User({ email, username });
  user.setPassword(password);
  user.setEmailConfirmation();
  try {
    const result = await user.save();
    sendConfirmationEmail(result);
    res.json(result.userLoginResJson());
  } catch (err) {
    res.status(400).json({ errors: errorParser(err.errors) });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body.user;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400).json({ errors: { email: 'Invalid Email.' } });
    return;
  }

  if (!user.isValidPassword(password)) {
    res.status(400).json({ errors: { password: 'Password Error.' } });
    return;
  }

  res.json({ user: user.userLoginResJson() });
});

router.post('/confirm', async (req, res) => {
  const token = req.body.token;
  const user = await User.findOneAndUpdate(
    { emailConfirmation: token },
    { confirmed: true },
    { new: true }
  );

  if (!user) {
    res.status(400).json({ errors: { global: 'Invalid Confirm Token' } });
    return;
  }

  res.json({ user: user.userLoginResJson() });
});

router.post('/forgot_password', async (req, res) => {
  const email = req.body.email;

  const user = await User.findOne({ email });
  if (!user) {
    res.status(404).json({ errors: { email: 'Email Not Exists.' } });
    return;
  }

  sendResetPasswordEmail(user);

  res.status(200).json({});
});

router.post('/verify_reset_password', async (req, res) => {
  jwt.verify(req.body.token, process.env.JSONWEBTOKEN_SECRET, err => {
    if (err) {
      res.status(400).json({ errors: { global: 'Invalid Token.' } });
      return;
    }

    res.json({});
  });
});

router.post('/reset_password', (req, res) => {
  const { token, password } = req.body.data;

  jwt.verify(token, process.env.JSONWEBTOKEN_SECRET, async (err, decode) => {
    if (err) {
      res.status(400).json({ errors: { global: 'Invalid Token.' } });
      return;
    }

    const user = await User.findById(decode._id);
    if (!user) {
      res.status(401).json({ errors: { global: 'Invalid Token.' } });
      return;
    }

    user.setPassword(password);
    await user.save();

    res.json({});
  });
});

export default router;
