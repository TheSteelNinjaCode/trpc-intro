import express from "express";
import cors from "cors";
import { publicProcedure, router } from "./trpc";
import { userRouter } from "./routers/userRouter";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import dotenv from "dotenv";
dotenv.config();

export const appRouter = router({
  sayHi: publicProcedure.query(async () => {
    return "Hello world!";
  }),
  user: userRouter,
});

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/", createExpressMiddleware({ router: appRouter }));

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is listening on port: 8000`);
});

export type AppRouter = typeof appRouter;
