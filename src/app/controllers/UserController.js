import User from '../models/User.js';

class UserController {
    async store(req, res) {
        const userExists = await User.findOne({
            where: { email: req.body.email },
        });

        if (userExists) {
            return res.status(400).json({
                error: 'Já existe usuário cadastrado com este E-mail.',
            });
        }

        const { id, name, email } = await User.create(req.body);

        return res.json({
            id,
            name,
            email,
        });
    }

    async update(req, res) {
        return res.json();
    }
}

export default new UserController();
