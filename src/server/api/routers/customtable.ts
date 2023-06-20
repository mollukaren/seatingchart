import { z } from "zod";
import { createTRPCRouter, publicProcedure, privateProcedure } from "~/server/api/trpc";

export const customTableRouter = createTRPCRouter({
  buildTable: privateProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAllCustomTables: privateProcedure.query(({ ctx }) => {
    
    return ctx.prisma.customTable.findMany({
        where: {
            userID: ctx.currentUserID
        }
    });
  }),
});
