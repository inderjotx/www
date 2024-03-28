/*
  Warnings:

  - You are about to drop the `Click` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Click";

-- CreateTable
CREATE TABLE "click_data" (
    "id" SERIAL NOT NULL,
    "browser" TEXT,
    "city" TEXT,
    "country" TEXT,
    "os" TEXT,
    "ref" TEXT,
    "device" TEXT,
    "ip" TEXT,
    "createdOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "click_data_pkey" PRIMARY KEY ("id")
);
