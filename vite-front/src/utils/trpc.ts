import { type AppRouter } from "../../../trpc-back/src/index";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>();