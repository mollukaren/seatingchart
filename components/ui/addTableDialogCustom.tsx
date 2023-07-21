"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { TableForm } from "@/components/ui/addTableForm"
import { useState } from "react";
import { api } from "~/utils/api";
import { type CustomTableSchema } from "~/schemas/customTableSchema";
import type * as z from "zod";



export function TableDialogCustom() {
  const [isOpen, setOpen] = useState(true);

  const { mutate } = api.customTable.addTable.useMutation()
    
    function onSubmit(values: z.infer<typeof CustomTableSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        mutate(values)
        console.log(values)
        setOpen(false)
      }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Table</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a Table</DialogTitle>
          <DialogDescription>
            Add a table name and a read-only API key from AirTable
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center gap-4">
            {isOpen ? <TableForm onSubmit={onSubmit}/> : <h1>Hit escape</h1>}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
