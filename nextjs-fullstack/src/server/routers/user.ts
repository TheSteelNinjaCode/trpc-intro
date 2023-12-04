import { prisma } from "@/lib/prisma";
import { publicProcedure, router } from "../trpc";
import { TRPCError } from "@trpc/server";

export const userRouter = router({
  readAll: publicProcedure.query(async () => {
    try {
      return prisma.user.findMany();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: message,
      });
    }
  }),
});
