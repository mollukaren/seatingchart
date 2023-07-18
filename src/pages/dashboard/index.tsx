import { api } from "~/utils/api";
import { columns } from "@/components/ui/dashboard-columns"
import { DataTable } from "@/components/ui/dashboard-data-table"
import LoadingSpinner from "@/components/ui/loading-spinner";

export default function DemoPage() {
  const {data} = api.customTable.getAllCustomTables.useQuery(); 
  //const renderData = {...data, tablestatus}
  console.log(data)
  
  
  return (
    <div className="flex flex-col container mx-auto ">
      

      {data ? (<div className="container mx-auto py-4">
        <DataTable columns={columns} data={data} />
      </div>) : (<LoadingSpinner/>)}
    </div>
  )
  
}