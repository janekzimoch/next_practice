-- CreateTable
CREATE TABLE "Tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "toy_tableId" INTEGER,
    CONSTRAINT "Tag_toy_tableId_fkey" FOREIGN KEY ("toy_tableId") REFERENCES "toy_table" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_email_key" ON "Tag"("email");
