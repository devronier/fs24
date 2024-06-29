class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  create = async (user) => {
    await this.userRepository.create(user);

    return user;
  };

  listAll = async () => {
    const users = await this.userRepository.listAll();
    return users;
  };

  findById = async (id) => {
    const usuarioEncontrado = await this.userRepository.findById(id);

    return usuarioEncontrado;
  };
}

module.exports = UserService;
