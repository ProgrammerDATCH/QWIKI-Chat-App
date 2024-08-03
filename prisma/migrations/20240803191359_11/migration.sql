-- CreateTable
CREATE TABLE "Message" (
    "id" STRING NOT NULL,
    "message" STRING NOT NULL,
    "time" STRING NOT NULL,
    "sender" STRING NOT NULL,
    "room" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);
