/*
  Warnings:

  - You are about to drop the column `usu_senha` on the `users` table. All the data in the column will be lost.
  - Added the required column `senha` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "usu_senha",
ADD COLUMN     "senha" TEXT NOT NULL;
