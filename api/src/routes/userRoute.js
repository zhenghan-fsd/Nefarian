import express from 'express';
import User from '../models/UserModel';

const router = express.Router();

router.post('/signup', (req, res) => {
  res.json(req.body.user);
});

router.post('/login', async (req, res) => {
  const { userEmail, userPassword } = req.body.user;
  const user = await User.findOne({ userEmail });
  if (!user) {
    res.status(400).json({ errors: { global: 'User not found.' } });
    return;
  }

  if (!user.isValidPassword(userPassword)) {
    res.status(400).json({ errors: { global: 'Password error.' } });
    return;
  }

  res.json({ user: user.userLoginResJson() });
});

export default router;
