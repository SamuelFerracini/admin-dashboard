const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const { _id } = req.headers;
    const users = await User.find();
    // const users = await User.find({ _id: { $ne: _id } });
    if (users.length == 0) {
      return res.json({
        error: true,
        code: "03",
        description: "Theres no users"
      });
    }
    return res.json({
      users
    });
  },

  async store(req, res) {
    const { name, username, password } = req.body.headers;
    const userExists = await User.findOne({ username });

    if (userExists) {
      return res.json({
        error: true,
        code: "03",
        description: "User alredy exists"
      });
    }

    const user = await User.create({
      name,
      username,
      password
    });

    const users = await User.find();

    return res.json({
      error:false,
      users
    });
  },

  async login(req, res) {
    const { username, password } = req.body.headers;
    const loggedUser = await User.find({
      $and: [{ username }, { password }]
    });
    if (loggedUser[0] == undefined) {
      return res.json({
        error: "User not found",
        code: "002"
      });
    }
    var jwt = require("jsonwebtoken");
    var token = jwt.sign({ foo: "bar" }, "shhhhh");
    return res.json({
      user: loggedUser,
      token
    });
  },

  async getUser(req, res) {
    const { _id } = req.params;
    const user = await User.findById({ _id });
    if (user == undefined) {
      return res.json({
        error: "User not found",
        code: "004"
      });
    }
    return res.json({
      user
    });
  },

  async update(req, res) {
    const { _id, name, username, password } = req.headers;
    const user = await User.findByIdAndUpdate({ _id });
    if (user == undefined) {
      return res.json({
        error: "User not found",
        code: "004"
      });
    }
    return res.json({
      user
    });
  }
};
