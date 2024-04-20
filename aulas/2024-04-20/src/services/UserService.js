const User = require("../models/User")

class UserService {

  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async create(user) {

    if(!user.name) {
      throw new Error("Name is required")
    }

    if(!user.email) {
      throw new Error("Email is required")
    }

    if(!user.birthDate) {
      throw new Error("BirthDate is required")
    }

    const userModel = new User(user.name, user.email, user.birthDate, true)

    return await this.userRepository.create(userModel);

  }

}

module.exports = UserService