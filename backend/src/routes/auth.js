const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { jwtSecret } = require('../config/config.js');

const users = [{ id: 1, username: 'user1', password: '$2a$10$H7cZf.1GnnkgutEvA6KKSezsb4YZxYmBq6Ib2/tYybpd0Z3bCFzFO' }]; // password is 'password'

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username);
  if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

  const payload = { id: user.id };
  jwt.sign(payload, jwtSecret, { expiresIn: '1h' }, (err, token) => {
    if (err) throw err;
    res.json({ token });
  });
});

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  let user = users.find(user => user.username === username);
  if (user) return res.status(400).json({ msg: 'User already exists' });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  user = { id: users.length + 1, username, password: hashedPassword };
  users.push(user);

  const payload = { id: user.id };
  jwt.sign(payload, jwtSecret, { expiresIn: '1h' }, (err, token) => {
    if (err) throw err;
    res.json({ token });
  });
});

module.exports = router;