import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('admin123', 20),
    isAdmin: true,
  },
  {
    name: 'Yago Madeira',
    email: 'yago@email.com',
    password: bcrypt.hashSync('12345', 20),
    isAdmin: false,
  },
  {
    name: 'Wladimir',
    email: 'wlad@email.com',
    password: bcrypt.hashSync('12345', 20),
    isAdmin: false,
  },
];

export default users;
