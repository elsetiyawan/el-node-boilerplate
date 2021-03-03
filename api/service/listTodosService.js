const { todoModel } = require("../../model");

module.exports = async () => {
  return await todoModel.find();
};
