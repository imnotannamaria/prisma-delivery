-- CreateTable
CREATE TABLE "Deliveries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clientId" TEXT NOT NULL,
    "deliverymanId" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Deliveries_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Deliveries_deliverymanId_fkey" FOREIGN KEY ("deliverymanId") REFERENCES "Deliveryman" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
