const { PrismaClient } = require("@prisma/client");

const PrismaClientSingleton = () => {
  return new PrismaClient();
};

globalThis.prismaGlobal = globalThis.prismaGlobal || PrismaClientSingleton();

const prisma = globalThis.prismaGlobal;

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma;
}

module.exports = prisma;
