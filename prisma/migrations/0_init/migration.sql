-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_toy_table" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "surname" TEXT,
    "pet" TEXT,
    "married" BOOLEAN NOT NULL
);
INSERT INTO "new_toy_table" ("id", "married", "name", "pet", "surname") SELECT "id", "married", "name", "pet", "surname" FROM "toy_table";
DROP TABLE "toy_table";
ALTER TABLE "new_toy_table" RENAME TO "toy_table";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

