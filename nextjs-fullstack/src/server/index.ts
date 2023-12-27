import { productRouter } from "./routers/product";
import { userRouter } from "./routers/user";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  greeting: publicProcedure.query(() => "hello tRPC v12!"),
  user: userRouter,
  product: productRouter,
});

export type AppRouter = typeof appRouter;
