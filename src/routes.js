import { Router } from 'express';
import UserController from './app/controllers/UserController.js';
import TaskController from './app/controllers/TaskController.js';
import SessionController from './app/controllers/SessionController.js';
import authMiddleware from './app/middlewares/auth.js';

const routes = new Router();

routes.post('/user', UserController.store);
routes.put('/user', authMiddleware, UserController.update);

routes.post('/login', SessionController.store);

routes.get('/tasks', authMiddleware, TaskController.store);
routes.post('/tasks', authMiddleware, TaskController.store);

export default routes;
