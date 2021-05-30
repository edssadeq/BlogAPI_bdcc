const { User } = require("../models");

module.exports = {
  getAllUsers() {
    return User.findAll();
  },
  getUsers(offset = 0, limit = 5) {
    // Skip 0 instances and fetch the 10 after that
    return User.findAll({ offset: offset, limit: limit });
  },
  getUsersAndCount(offset = 0, limit = 5) {
    return User.findAndCountAll({ offset: offset, limit: limit });
  },
  getAdmins() {
    return User.findAll({
      where: {
        role: "admin",
      },
    });
  },
  getAuthors() {
    return User.findAll({
      where: {
        role: "author",
      },
    });
  },
  getGuests() {
    return User.findAll({
      where: {
        role: "guest",
      },
    });
  },
  getUser(id) {
    return User.findAll({
      where: {
        id: id,
      },
    });
  },
  getUserByEmail(email) {
    return User.findAll({
      where: {
        email: email,
      },
    });
  },
  addUser(user) {
    // User.create(user);
    return User.create(user);
  },
  updateUser(id, updates) {
    User.update(updates, {
      where: {
        id: id,
      },
    });
  },
  deleteUser(id) {
    User.destroy({
      where: {
        id: id,
      },
    });
  },
};
