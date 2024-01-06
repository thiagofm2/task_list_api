import { Router } from 'express';
import UserController from './app/controllers/UserController.js';

const routes = new Router();

routes.post('/user', UserController.store);

// routes.get('/login', async (req, res) => {
//     const user = await User.create({
//         name: 'Thiago',
//         email: 'thiago@teste.com',
//         password_hash: '123456',
//     });

//     res.json(user);
// });
export default routes;
