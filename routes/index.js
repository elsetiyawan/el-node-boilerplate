"use strict";

const router = require("express").Router();

router.use("/todos", require("./todo.router"));

module.exports = router;
