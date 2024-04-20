const UserRepository = require("../repositories/UserRepository");
 
class UserController {

  constructor(userService) {
    this.userService = userService
  }

  async findAll(req, res) {

    // Utilizando query params façam filtros por nome e email

    const users = await this.userService.findAll();

    return res.send(users)
  }

  async findById(req, res) {

    const {id} = req.params
    //TODO: Devolver um usuario pelo id
  }

  async create(req, res) {
    
    try {
      
      const users = await this.userService.create(req.body);
      return res.send(users)

    } catch (error) {
        return res.send({"error" : error.message})
    }

  }
}

module.exports = UserController