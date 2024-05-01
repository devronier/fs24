class UserRepository {
  usuarios = [];
  create = (user) => {
    this.usuarios.push(user);
  };

  listAll = () => {
    return this.usuarios;
  };

  findById = (id) => {
    const usuarioEncontrado = this.usuarios.find((usuario) => usuario.id == id);
    return usuarioEncontrado;
  };
}

module.exports = UserRepository;
