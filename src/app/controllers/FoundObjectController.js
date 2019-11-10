const FoundObject = require("../models/FoundObject");

module.exports = {
  async index(req, res) {
    const foundObjects = await FoundObject.find({});
    return res.status(200).json(foundObjects);
  },

  async store(req, res) {
    const { title, description, imageId, phone } = req.body;
    const newObject = await FoundObject.create({
      title,
      description,
      imageId,
      phone
    });
    return res.status(201).json(newObject);
  }
};
