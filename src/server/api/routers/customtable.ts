import { createTRPCRouter, publicProcedure, privateProcedure } from "~/server/api/trpc";

import { customTableSchema } from "~/schemas/customTableSchema";

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
