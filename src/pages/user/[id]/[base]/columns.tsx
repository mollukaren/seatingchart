import type { ColumnDef } from "@tanstack/react-table"
import { type ATRecord } from '~/pages/api/data';


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<ATRecord>[] = [
  {
    accessorKey: "fields.Name",
    header: "Name",
  },
  {
    accessorKey: "fields.Table_Number",
    header: "Table",
  },
]
