import { useRouter } from 'next/router'
import { api } from "~/utils/api"
import { useAuth } from '@clerk/nextjs'
import { type CustomTable } from '@prisma/client';
import { ChangeEvent, useState } from 'react';


export default function Page() {
  const router = useRouter();
  const [searchBoxText, setSearchBoxText] = useState('')
  const [tableData, setTableData] = useState([])
  
  const {data} = api.customTable.getAllCustomTables.useQuery();

    const filteredData = data?.filter((item: CustomTable) =>
    item.name?.toLowerCase().includes(searchBoxText.toLowerCase())
  );

  return (
    <>
      <h1>{searchBoxText}</h1>
      <input placeholder='search a table name here' onChange={(e) => setSearchBoxText(e.target.value)}/>
      <table>
        <thead>
          <tr>
            <th>Table Name</th>
            <th>Key</th>
            <th>Successful Pull?</th>
          </tr>
        </thead>
        <tbody>
         {filteredData?.length !== 0 ? (
            filteredData?.map((item: TableData, index: number) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.key}</td>
                <td>{item.success ? 'Yes' : 'No'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No matching data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
