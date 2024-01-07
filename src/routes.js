import { Router } from 'express';
import UserController from './app/controllers/UserController.js';
import SessionController from './app/controllers/SessionController.js';
import authMiddleware from './app/middlewares/auth.js';

const routes = new Router();

routes.post('/user', UserController.store);
routes.put('/user', authMiddleware, UserController.update);

routes.post('/login', SessionController.store);

// routes.get('/login', async (req, res) => {
//     const user = await User.create({
//         name: 'Thiago',
//         email: 'thiago@teste.com',
//         password_hash: '123456',
//     });

//     res.json(user);
// });
export default routes;
