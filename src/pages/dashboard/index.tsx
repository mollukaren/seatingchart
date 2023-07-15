import { api } from "~/utils/api";
import {  columns } from "@/components/ui/dashboard-columns"
import { DataTable } from "@/components/ui/dashboard-data-table"

export default function DemoPage() {
  const {data} = api.customTable.getAllCustomTables.useQuery(); 
  //const renderData = {...data, tablestatus}
  console.log(data)
  
  
  return (<>
    <h1>Dashboard Page</h1>

    {data ? (<div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>) : (<div>Loading...</div>)}
    </>
  )
  
}