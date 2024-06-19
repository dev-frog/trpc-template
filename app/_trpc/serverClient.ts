import { httpBatchLink } from "@trpc/client";
import { AppRouter } from "../server";

export const serverClient = AppRouter.createCaller({
  links: [httpBatchLink({ url: "/api/trpc" })],
});
