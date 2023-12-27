// import { prisma } from "../lib/prisma";
import { publicProcedure, router } from "../trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const productRouter = router({
  readAll: publicProcedure.query(async () => {
    try {
      return await prisma.product.findMany();
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch products");
    }
  }),
});
