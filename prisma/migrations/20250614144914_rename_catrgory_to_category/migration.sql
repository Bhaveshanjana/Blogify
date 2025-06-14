/*
  Warnings:

  - You are about to drop the column `catrgory` on the `Articles` table. All the data in the column will be lost.
  - Added the required column `category` to the `Articles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Articles" DROP COLUMN "catrgory",
ADD COLUMN     "category" TEXT NOT NULL;
