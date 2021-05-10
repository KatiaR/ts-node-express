"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletedTodo = exports.updatedTodo = exports.getTodos = exports.createTodos = void 0;
const todos_1 = require("../models/todos");
const TODOS = [];
const createTodos = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todos_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Created the todo', createTodos: newTodo });
};
exports.createTodos = createTodos;
const getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updatedTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updateText = req.body.text;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('Could not find todo');
    }
    TODOS[todoIndex] = new todos_1.Todo(TODOS[todoIndex].id, updateText);
    res.json({ messsage: 'Updated', updatedTodo: TODOS[todoIndex] });
};
exports.updatedTodo = updatedTodo;
const deletedTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('Could not find todo');
    }
    TODOS.splice(todoIndex, 1);
    res.json({ messsage: 'Deleted', updatedTodo: TODOS[todoIndex] });
};
exports.deletedTodo = deletedTodo;
