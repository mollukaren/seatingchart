import { z } from "zod";
import { createTRPCRouter, publicProcedure, privateProcedure } from "~/server/api/trpc";

export const customTableRouter = createTRPCRouter({
  addTable: privateProcedure.input(z.object({
    api_key: z.string().length(82),
    table_name: z.string().min(3)
  })
  )
  .mutation(async ( { ctx, input } ) => {

    const userID = ctx.currentUserID;
    const newTable = await ctx.prisma.customTable.create({
      data: {
        userID,
        key: input.api_key,
        name: input.table_name
      },
    });
    return newTable;
  }),

  getAllCustomTables: privateProcedure.query(({ ctx }) => {
    
    return ctx.prisma.customTable.findMany({
        where: {
            userID: ctx.currentUserID
        }
    });
  }),
});
