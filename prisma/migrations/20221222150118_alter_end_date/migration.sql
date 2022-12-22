-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Deliveries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clientId" TEXT NOT NULL,
    "deliverymanId" TEXT,
    "itemName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" DATETIME,
    CONSTRAINT "Deliveries_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Deliveries_deliverymanId_fkey" FOREIGN KEY ("deliverymanId") REFERENCES "Deliveryman" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Deliveries" ("clientId", "createdAt", "deliverymanId", "endedAt", "id", "itemName") SELECT "clientId", "createdAt", "deliverymanId", "endedAt", "id", "itemName" FROM "Deliveries";
DROP TABLE "Deliveries";
ALTER TABLE "new_Deliveries" RENAME TO "Deliveries";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
