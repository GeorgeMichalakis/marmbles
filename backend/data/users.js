import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Farmer',
    email: 'farmer@example.com',
    password: bcrypt.hashSync('123', 10),
    isAdmin: true,
  },
  {
    name: 'Pegasus',
    email: 'pegasus@example.com',
    password: bcrypt.hashSync('123', 10),
  }
]

export default users
