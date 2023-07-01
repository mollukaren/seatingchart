import { z } from "zod";

export const CustomTableSchema = z.object({
  airtable_token: z.string().length(82),
  airtable_base: z.string().length(17),
  airtable_table: z.string().length(17),
  table_name: z.string().min(3)
})

export const DataApiRequestSchema = z.object({
  data: z.object({
  airtable_token: z.string().length(82),
  airtable_base: z.string().length(17),
  airtable_table: z.string().length(17)
  })
})
