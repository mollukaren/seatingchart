import type { ColumnDef } from "@tanstack/react-table"
import { type CustomTable } from '@prisma/client';


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<CustomTable>[] = [
  {
    accessorKey: "createdAt",
    header: "Created Date",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
]
