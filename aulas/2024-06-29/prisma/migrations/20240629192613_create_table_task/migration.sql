-- CreateTable
CREATE TABLE "task" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);
