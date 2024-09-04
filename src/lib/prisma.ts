import { PrismaClient } from "@prisma/client";

function makePrisma() {
    return new PrismaClient({
        datasources: { db: { url: process.env.DIRECT_URL } },
    })
}

const globalForPrisma = global as unknown as {
    prisma: ReturnType<typeof makePrisma>;
};

export const prismaClient = globalForPrisma.prisma ?? makePrisma();

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = makePrisma();
}