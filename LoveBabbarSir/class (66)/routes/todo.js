const express = require("express");

const router = express.Router();

const { createTodo } = require("../controller/createTodo");
const { getTodo, getTodoById } = require("../controller/getTodo");
const { updateTodo } = require("../controller/updateTodo");
const { deleteTodo } = require("../controller/deleteTodo");

router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodoById/:id", getTodoById);
router.put("/updateTodoById/:id", updateTodo);
router.delete("/deleteTodoById/:id", deleteTodo);

module.exports = router;
