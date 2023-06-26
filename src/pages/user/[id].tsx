import { useRouter } from 'next/router'
import { api } from "~/utils/api"
import { useAuth, useClerk } from '@clerk/nextjs'
import { type CustomTable } from '@prisma/client';
import { ChangeEvent, useState } from 'react';
import { TableForm } from "@/components/ui/addTableForm"
import { TableDialogCustom } from '@/components/ui/addTableDialogCustom';
import { Button } from '@/components/ui/button';


export default function Page() {
  const router = useRouter();
  
  const {data} = api.customTable.getAllCustomTables.useQuery();

  return (
    <>
      <TableDialogCustom/>
      <table>
        <thead>
          <tr>
            <th>Table Name</th>
            <th>Key</th>
            <th>Successful Pull?</th>
          </tr>
        </thead>
        <tbody>
         {data?.length !== 0 ? (
            data?.map((item: CustomTable, index: number) => (
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
      
    </>
  );
}
