const FoundObject = require("../models/FoundObject");

module.exports = {
  async index(req, res) {
    const foundObjects = await FoundObject.find({});
    return res.json(foundObjects);
  },

  async store(req, res) {
    const { title, description, imageId } = req.body;
    const newObject = await FoundObject.create({ title, description, imageId });
    return res.json(newObject);
  }
};
