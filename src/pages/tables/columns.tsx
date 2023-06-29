import type { ColumnDef } from "@tanstack/react-table";
import { type CustomTable } from '@prisma/client';
import type { ATRecord, ATData } from "../api/data";
import axios from "axios";
import { useEffect } from "react";
import { Smile } from "lucide-react";


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export interface RenderedTable extends CustomTable {
  status: string
}

type ATRequestParams = {
  airtable_token: string
  airtable_base: string
  airtable_table: string
}

export async function ATCaller(params: ATRequestParams): Promise<number> {
  try {
    const response = await axios.get<ATData>('/api/data', {params});
    return response.status;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const columns: ColumnDef<RenderedTable>[] = [
  {
    accessorKey: "createdAt",
    header: "Created Date",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "airtable_token",
    header: "Key",
  },
  {
    accessorKey: "airtable_base",
    header: "Base",
  },
  {
    accessorKey: "airtable_table",
    header: "Table",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: async ({ row }) => {
      let isLoading = true
      let emoji = "🟡"
      const rowContent = row.original
      const params = {
        airtable_token: rowContent.airtable_token, 
        airtable_base: rowContent.airtable_base, 
        airtable_table:rowContent.airtable_table
      };
      
      isLoading ? 
      await (async function statusGetter (params: ATRequestParams): Promise<number> {
        try{
          const result = await ATCaller(params);
          return(result);
        } catch (error) {
          console.error(error);
          throw error;
        } finally {
          isLoading = false
        }
      })(params)
      .then(statusCode => {
        emoji = emojiSetter(statusCode);
      })
      .catch(error => console.error(error)) :
      console.log("Already called once")

      function emojiSetter(statusCode: number): string {
        if (isLoading) {
          return "🟡";
        } else if (statusCode === 200) {
          return "🟢";
        } else {
          return "🔴";
        }
      }

      return(
      <div>
        <span>{emoji}</span>
        {isLoading ? <span>Loading...</span> : null}
      </div>
      )
    }
  }
]
