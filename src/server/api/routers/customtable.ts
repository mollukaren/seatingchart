import { z } from "zod";
import { createTRPCRouter, publicProcedure, privateProcedure } from "~/server/api/trpc";

export const customTableSchema = z.object({
  airtable_token: z.string().length(82),
  airtable_base: z.string().length(17),
  airtable_table: z.string().length(17),
  table_name: z.string().min(3)
})

export const customTableRouter = createTRPCRouter({
  addTable: privateProcedure.input(
    customTableSchema
  )
  .mutation(async ( { ctx, input } ) => {

    const userID = ctx.currentUserID;
    const newTable = await ctx.prisma.customTable.create({
      data: { 
        airtable_token: input.airtable_token,
        airtable_base: input.airtable_base,
        airtable_table: input.airtable_table,
        userID,
        name: input.table_name,
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
