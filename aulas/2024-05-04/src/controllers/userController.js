class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  create = (request, response) => {
    const usuario = request.body;

    this.userService.create(usuario);

    return response.status(200).json(usuario);
  };

  listAll = (request, response) => {
    return response.json(this.userService.listAll());
  };

  findById = (request, response) => {
    const id = request.params.id;

    const usuarioEncontrado = this.userService.findById(id);

    return response.json(usuarioEncontrado);
  };
}

module.exports = UserController;
