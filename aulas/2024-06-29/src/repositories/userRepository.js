const pool = require("../config/db");

class UserRepository {
  usuarios = [];

  create = async (user) => {
    const query = `insert into users (nome, email, senha) values('${user.nome}', '${user.email}', '${user.senha}')`;
    await pool.query(query);
  };

  listAll = async () => {
    const reposta = await pool.query("select * from users");
    return reposta.rows;
  };

  findById = async (id) => {
    const query = `select * from users where id = $1`;
    return (await pool.query(query, [id])).rows;
  };
}

module.exports = UserRepository;
