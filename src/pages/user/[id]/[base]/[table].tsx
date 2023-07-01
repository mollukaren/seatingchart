import { useRouter } from 'next/router'
import { api } from "~/utils/api";
import {  columns } from "./columns"
import { DataTable } from "./data-table"
import { type CustomTable } from '@prisma/client';
import { type ATRequestParams } from '../dashboard/columns';
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from 'react';
import axios from 'axios';
import { type ATData, type ATRecord } from '~/pages/api/data';

type ATParamsResult<T, E> = { success: true; value: T } | { success: false; error: E };

function genParams(filteredDataRow: CustomTable): ATParamsResult<ATRequestParams, string> {
  //this conditional *should* do input validation. Add later
  if (filteredDataRow) {
    const { airtable_token, airtable_base, airtable_table } = filteredDataRow;

    const params: ATRequestParams = {
      airtable_token,
      airtable_base,
      airtable_table,
    }
    return { success: true, value: params }
  }
  else {
    const errorMessage = 'No Filtered Data Row'
    console.error(errorMessage)
    return { success: false, error: errorMessage }
  }
}

async function ATCaller(params: ATRequestParams): Promise<ATRecord[]> {
  try {
    const response = await axios.post<ATData>('/api/data', {data: params});
    return response.data.data.records;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default function ChartPage() {
  const [renderAPIData, setRenderAPIData] = useState<null | ATRecord[]>(null)
  const [isPromiseResolved, setIsPromiseResolved] = useState(false)

  const router = useRouter()
  
  const {isLoading, data} = api.customTable.getAllCustomTables.useQuery();
  const filteredData = data?.filter((item) => {return item.airtable_base === router.query.base && item.airtable_table === router.query.table})

  if (isLoading) {
    // Fix This Styling Later
    return (<Progress className='grid h-screen items-center' value={75} />)
  }

  if (!filteredData || !filteredData[0]){
    console.error(`Can't Generate Params | User Has No Saved Tables that match table and base params`)
    // Fix This Styling Later
    return(
      <Alert>
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>
          User Has No Saved Tables that match table and base parameters
        </AlertDescription>
      </Alert>
    )
  }

  const paramsResult = genParams(filteredData[0])
  if (paramsResult.success && !isPromiseResolved) {
  ATCaller(paramsResult.value)
    .then(data => {
      setRenderAPIData(data)
    })
      .catch(error => {
        console.error(error);
      })
      .finally(() =>
        setIsPromiseResolved(true)
      );
  }

  return (<>
    {renderAPIData ? 
    (<div className="container mx-auto py-10">
      <DataTable columns={columns} data={renderAPIData} />
    </div>) : 
      (!isPromiseResolved ? 
        (<div>Loading...</div>) : 
          (
            <Alert>
              <AlertTitle>Error!</AlertTitle>
              <AlertDescription>
                User Has No Saved Tables that match table and base parameters
              </AlertDescription>
            </Alert>
        )
      )
    }
    </>
  )
}