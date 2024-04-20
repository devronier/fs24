const fs = require("fs")

class UserRepository {

  async findAll() {
    return fs.readFileSync("users.json", "utf-8")
  }

  async create(user) {

    const stringUsers = fs.readFileSync("users.json", "utf-8")

    const users = JSON.parse(stringUsers)

    users.push(user)

    return fs.writeFileSync("users.json", JSON.stringify(users))
  }
  
}

module.exports = UserRepository