const fs = require("fs");

class UserRepository {
  saveUser(user) {
    return fs.writeFileSync("users.json", JSON.stringify(user));
  }
}

module.exports = UserRepository;
