import { userRouter } from './routers/user';
import { publicProcedure, router } from './trpc';
 
export const appRouter = router({
  greeting: publicProcedure.query(() => 'hello tRPC v12!'),
  user: userRouter,
});
 
// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter;