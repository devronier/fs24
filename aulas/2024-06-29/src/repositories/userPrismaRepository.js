const { prisma } = require("../config/prisma");

class UserPrismaRepository {
  create = async (user) => {
    const resposta = await prisma.users.create({
      data: user,
    });

    return resposta;
  };

  listAll = async () => {
    const resposta = await prisma.users.findMany({
      include: {
        task: true,
      },
    });
    return resposta;
  };

  findById = async (id) => {
    const resposta = await prisma.users.findUnique({
      where: {
        id: id,
      },
    });
    return resposta;
  };
}

module.exports = UserPrismaRepository;
