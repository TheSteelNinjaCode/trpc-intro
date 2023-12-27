import { AppRouter } from "../../../trpc-back/src/"
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>();
