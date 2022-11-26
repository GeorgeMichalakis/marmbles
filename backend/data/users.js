import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@papaioannou.com',
    password: bcrypt.hashSync('admin', 10),
    isAdmin: true,
  },
  {
    name: 'Kostas',
    email: 'kostas@papaioannou.com',
    password: bcrypt.hashSync('123', 10),
    isAdmin: true
  }
]

export default users
