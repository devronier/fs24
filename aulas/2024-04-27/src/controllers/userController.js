class UserController {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  create = (request, response) => {
    const usuario = request.body;

    this.userRepository.create(usuario);

    return response.status(200).json(usuario);
  };

  listAll = (request, response) => {
    return response.json(this.userRepository.listAll());
  };

  findById = (request, response) => {
    const id = request.params.id;

    const usuarioEncontrado = this.userRepository.findById(id);

    return response.json(usuarioEncontrado);
  };
}

module.exports = UserController;
