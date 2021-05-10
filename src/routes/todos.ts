import { Router } from 'express';
import {
	createTodos,
	getTodos,
	updatedTodo,
	deletedTodo,
} from '../controllers/todos';

const router = Router();

router.get('/', getTodos);

router.post('/', createTodos);

router.patch('/:id', updatedTodo);

router.delete('/:id', deletedTodo);

export default router;
