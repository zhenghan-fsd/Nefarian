import express from 'express';

const router = express.Router();

router.post('/signup', (req, res) => {
  res.status(403).json({ errors: { global: '403' } });
});

export default router;
