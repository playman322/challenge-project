const express = require('express');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const PORT = process.env.PORT || 4201;
const SECRET = 'secret';
const app = express()
const corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions))
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Fake users
const users = [
  { id: 1, username: 'admin', password: 'password123' }
]

app.post('/api/auth/login', (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ message: 'enter the correct username and password' })
  }

  const user = users.find(u => u.username === req.body.username && u.password === req.body.password)

  if (!user) {
    return res.status(400).json({ message: 'wrong login or password' })
  }

  const token = jwt.sign({
    sub: user.id,
    username: user.username
  }, SECRET, { expiresIn: '3 hours' })

  res.json({ access_token: token })
})

app.post('/api/auth/register', (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ message: 'please enter username and password' })
  }

  const userExisting = users.find(u => u.username === req.body.username)

  if (userExisting) {
    return res.status(400).json({ message: `user ${req.body.username} already existing` })
  }

  const id = users[users.length - 1].id + 1
  const newUser = {
    id: id,
    username: req.body.username,
    password: req.body.password
  }

  users.push(newUser)

  res.status(201).json({ message: `user ${id} created`, content: newUser })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
