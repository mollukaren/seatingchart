import { z } from "zod";

export const ApiRequestSchema = z.object({
  airtable_token: z.string().length(82),
  airtable_base: z.string().length(17),
  airtable_table: z.string().length(17)
})

export const CustomTableSchema = ApiRequestSchema.extend({
  table_name: z.string().min(3)
})
