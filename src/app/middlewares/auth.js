import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth.js';

export default async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.send(401).json({ error: 'Usuário não está autenticado.' });
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);
        req.userId = decoded.id;

        return next();
    } catch (err) {
        res.send(401).json({ error: 'Token inválido.' });
    }
};
