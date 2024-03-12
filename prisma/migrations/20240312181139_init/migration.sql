-- CreateTable
CREATE TABLE "Click" (
    "id" TEXT NOT NULL,
    "browser" TEXT,
    "city" TEXT,
    "country" TEXT,
    "os" TEXT,
    "ref" TEXT,
    "device" TEXT,
    "ip" TEXT,
    "createdOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Click_pkey" PRIMARY KEY ("id")
);
