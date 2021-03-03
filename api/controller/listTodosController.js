"use strict";

const { listTodoService } = require("../service");

module.exports = async (req, res, next) => {
  const todoList = await listTodoService();
  res.status(200).json(todoList);
};
