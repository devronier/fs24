class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  create = (user) => {
    this.userRepository.create(user);

    return user;
  };

  listAll = () => {
    const users = this.userRepository.listAll();
    return users;
  };

  findById = (id) => {
    const usuarioEncontrado = this.userRepository.findById(id);

    return usuarioEncontrado;
  };
}

module.exports = UserService;
