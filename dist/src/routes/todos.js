"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/');
router.post('/');
router.patch('/:id');
router.delete('/:id');
exports.default = router;
