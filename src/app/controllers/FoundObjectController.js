const FoundObject = require("../models/FoundObject");

module.exports = {
  async index(req, res) {
    var foundObjects = [];
    if (req.query.busca) {
      foundObjects = await FoundObject.find({
        title: new RegExp(req.query.busca, "i")
      });
    } else {
      foundObjects = await FoundObject.find({});
    }
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
