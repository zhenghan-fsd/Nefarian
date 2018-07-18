import express from 'express';
import User from '../models/UserModel';
import errorParser from '../utils/errorParser';
import { sendConfirmationEmail } from '../utils/mailer';

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
    res.status(400).json({ errors: { global: 'User not found.' } });
    return;
  }

  if (!user.isValidPassword(password)) {
    res.status(400).json({ errors: { global: 'Password error.' } });
    return;
  }

  res.json({ user: user.userLoginResJson() });
});

export default router;
