import { useRouter } from 'next/router'
import { api } from "~/utils/api"
import { useAuth } from '@clerk/nextjs'
import { type CustomTable } from '@prisma/client';
import { ChangeEvent, useState } from 'react';
import { TableForm } from "@/components/ui/addTableForm"
import { TableDialog } from '@/components/ui/addTableDialog';


export default function Page() {
  const router = useRouter();
  const [searchBoxText, setSearchBoxText] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const {data} = api.customTable.getAllCustomTables.useQuery();

    const filteredData = data?.filter((item: CustomTable) =>
    item.name?.toLowerCase().includes(searchBoxText.toLowerCase())
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h1>{searchBoxText}</h1>
      <button onClick={openModal}>Open Modal</button>
      <input placeholder='search a table name here' onChange={(e) => setSearchBoxText(e.target.value)}/>
      <TableForm/>
      <TableDialog/>
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
            filteredData?.map((item: CustomTable, index: number) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.key}</td>
                <td>Yes</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No matching data found</td>
            </tr>
          )}
        </tbody>
      </table>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded">
            <span
              className="relative top-0 right-0 text-gray-600 cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </span>
            
            <h2 className="mt-0">Modal Title</h2>
            <p>Modal content goes here.</p>
          </div>
        </div>
      )}
    </>
  );
}
