import * as Yup from 'yup';
import Task from '../models/Task.js';

class TaskController {
    async index(req, res) {
        const tasks = await Task.findAll({
            where: { user_id: req.userId, check: false },
        });

        return res.json(tasks);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            task: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Falha na validação' });
        }

        const { task } = req.body;
        const teste = {
            user_id: req.userId,
            task,
        };
        console.log(teste);
        const tasks = await Task.create(teste);

        return res.json(tasks);
    }
}

export default new TaskController();
