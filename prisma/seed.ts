import { PrismaClient, Prisma } from "@/src/generated/prisma" 

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'raffa',
    email: 'raffa@prisma.io',
    password: 'admin'
  },
]

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u })
  }
}

main()