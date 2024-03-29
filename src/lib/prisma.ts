import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

export const prismaClient = new PrismaClient().$extends(withAccelerate())




















// import { PrismaClient } from '@prisma/client'



// // add client to the global instance
// declare global {
//     var prisma: (null | PrismaClient)
// }


// // create client if  

// if (process.env.NODE_ENV === 'production') {
//     globalThis.prisma = new PrismaClient()
// }
// else {
//     if (!globalThis.prisma) globalThis.prisma = new PrismaClient()
// }

// export const prismaClient = globalThis.prisma