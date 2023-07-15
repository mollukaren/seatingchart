import type { ColumnDef } from "@tanstack/react-table";
import { type CustomTable } from '@prisma/client';
import type { ATData } from "../../src/pages/api/data";
import axios from "axios";
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button";
import Link from "next/link";


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type ATRequestParams = {
  airtable_token: string
  airtable_base: string
  airtable_table: string
}

export async function ATCaller(params: ATRequestParams): Promise<number> {
  try {
    console.log(params)
    const response = await axios.get<ATData>('/api/data', {data: params});
    return response.status;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const columns: ColumnDef<CustomTable>[] = [
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row}) => {
      const date: Date = row.getValue("createdAt")
      let formatted = date.toLocaleString()
      if (formatted[1] == '/'){
        formatted = "0" + formatted
      }
      return <div>{formatted}</div>
    }
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "airtable_base",
    header: "Base ID",
  },
  {
    accessorKey: "airtable_table",
    header: "Table ID",
  },
  {
    accessorKey: "page_link",
    header: "Table Page",
    cell: (({row})=> {
      const rowContent = row.original
      const link = `/user/${rowContent.id}/${rowContent.airtable_base}/${rowContent.airtable_table}`
      return( 
        <Button asChild>
          <Link href={link}>{rowContent.name}</Link>
        </Button>)
    })
  },
  
  // {
  //   accessorKey: "status",
  //   header: "Status",
  //   cell: async ({ row }) => {
  //     let isLoading = true
  //     let emoji = "🟡"
  //     const rowContent = row.original
  //     const params = {
  //       airtable_token: rowContent.airtable_token, 
  //       airtable_base: rowContent.airtable_base, 
  //       airtable_table:rowContent.airtable_table
  //     };
      
  //     isLoading ? 
  //     await (async function statusGetter (params: ATRequestParams): Promise<number> {
  //       try{
  //         const result = await ATCaller(params);
  //         return(result);
  //       } catch (error) {
  //         console.error(error);
  //         throw error;
  //       } finally {
  //         isLoading = false
  //       }
  //     })(params)
  //     .then(result => {
  //       emoji = emojiSetter(result);
  //     })
  //     .catch(error => console.error(error)) :
  //     console.log("not")

  //     function emojiSetter(statusCode: number): string {
  //       if (isLoading) {
  //         return "🟡";
  //       } else if (statusCode === 200) {
  //         return "🟢";
  //       } else {
  //         return "🔴";
  //       }
  //     }

  //     return(
  //     <div>
  //       <span>{emoji}</span>
  //       {isLoading ? <span>Loading...</span> : null}
  //     </div>
  //     )
  //   }
  // }
]
