/*
  Warnings:

  - You are about to drop the `Request` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Request";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "requests" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "hour" TEXT NOT NULL,
    "professionalId" INTEGER NOT NULL,
    "requestTypeId" INTEGER NOT NULL,
    "procedureId" INTEGER NOT NULL,
    CONSTRAINT "requests_professionalId_fkey" FOREIGN KEY ("professionalId") REFERENCES "professionals" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "requests_requestTypeId_fkey" FOREIGN KEY ("requestTypeId") REFERENCES "requestTypes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "requests_procedureId_fkey" FOREIGN KEY ("procedureId") REFERENCES "procedures" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
