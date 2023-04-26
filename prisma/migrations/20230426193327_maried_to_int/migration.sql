/*
  Warnings:

  - You are about to alter the column `married` on the `toy_table` table. The data in that column could be lost. The data in that column will be cast from `Binary` to `Int`.
  - Made the column `married` on table `toy_table` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_toy_table" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "surname" TEXT,
    "pet" TEXT,
    "married" INTEGER NOT NULL
);
INSERT INTO "new_toy_table" ("id", "married", "name", "pet", "surname") SELECT "id", "married", "name", "pet", "surname" FROM "toy_table";
DROP TABLE "toy_table";
ALTER TABLE "new_toy_table" RENAME TO "toy_table";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
