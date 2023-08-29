-- CreateTable
CREATE TABLE "Request" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "hour" TEXT NOT NULL,
    "professionalId" INTEGER NOT NULL,
    "requestTypeId" INTEGER NOT NULL,
    "procedureId" INTEGER NOT NULL,
    CONSTRAINT "Request_professionalId_fkey" FOREIGN KEY ("professionalId") REFERENCES "professionals" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Request_requestTypeId_fkey" FOREIGN KEY ("requestTypeId") REFERENCES "requestTypes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Request_procedureId_fkey" FOREIGN KEY ("procedureId") REFERENCES "procedures" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
