"use strict";

const { listTodosController } = require("../api/controller");

const todoRouter = require("express").Router();

/**
 * @swagger
 * /v1/todos:
 *  get:
 *    tags:
 *      - todo
 *    summary: list of all todos
 *    responses:
 *      '200':
 *         description: all todos retrieved
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *                  description: Notification id.
 */
todoRouter.get("/", listTodosController);

module.exports = todoRouter;
