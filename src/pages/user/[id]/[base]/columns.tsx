import type { ColumnDef } from "@tanstack/react-table"
import { type ATRecord } from '~/pages/api/data';
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button";


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<ATRecord>[] = [
  {
    id: "fields.Name",
    accessorKey: "fields.Name",
    header: "Name",
  },
  {
    id: "fields.Table_Number",
    accessorKey: "fields.Table_Number",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Table Number
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
]
