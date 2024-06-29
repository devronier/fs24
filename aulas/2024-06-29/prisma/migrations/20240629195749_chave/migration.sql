/*
  Warnings:

  - You are about to drop the column `user_id` on the `task` table. All the data in the column will be lost.
  - Added the required column `usersId` to the `task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "task" DROP COLUMN "user_id",
ADD COLUMN     "usersId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
