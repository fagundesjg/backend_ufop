module.exports = {
  async store(req, res) {
    if (req.file) {
      const imageId = req.file.filename;

      return res.status(201).json(imageId);
    }
    return res.status(400).json({ message: "Error to upload image." });
  }
};
