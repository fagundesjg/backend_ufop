const allowedUsers = [{ username: "gfnascimento", password: "gfn14052004" },{ username: "dinho", password: "abcd1234" }];

module.exports = {
  async store(req, res) {
    const { username, password } = req.body;
    allowedUsers.forEach(user => {
        if(user.username === username && password === user.password) {
            return res.status(200).json(true);
        }
    })
    return res.status(200).json(false);
  },
};
