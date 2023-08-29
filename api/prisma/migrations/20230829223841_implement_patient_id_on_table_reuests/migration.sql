/*
  Warnings:

  - Added the required column `patienteId` to the `requests` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_requests" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "hour" TEXT NOT NULL,
    "professionalId" INTEGER NOT NULL,
    "requestTypeId" INTEGER NOT NULL,
    "procedureId" INTEGER NOT NULL,
    "patienteId" INTEGER NOT NULL,
    CONSTRAINT "requests_professionalId_fkey" FOREIGN KEY ("professionalId") REFERENCES "professionals" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "requests_requestTypeId_fkey" FOREIGN KEY ("requestTypeId") REFERENCES "requestTypes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "requests_procedureId_fkey" FOREIGN KEY ("procedureId") REFERENCES "procedures" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "requests_patienteId_fkey" FOREIGN KEY ("patienteId") REFERENCES "patients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_requests" ("date", "hour", "id", "procedureId", "professionalId", "requestTypeId") SELECT "date", "hour", "id", "procedureId", "professionalId", "requestTypeId" FROM "requests";
DROP TABLE "requests";
ALTER TABLE "new_requests" RENAME TO "requests";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
