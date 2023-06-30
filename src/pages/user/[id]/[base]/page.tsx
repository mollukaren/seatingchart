import { api } from "~/utils/api";
import {  columns } from "./columns"
import { DataTable } from "./data-table"
import { type CustomTable } from '@prisma/client';


export default function DemoPage() {
  const {data} = api.customTable.getAllCustomTables.useQuery();

  return (<>
    <h1>demo page</h1>

    {data ? (<div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>) : (<div>Loading...</div>)}
    </>
  )
  
}
