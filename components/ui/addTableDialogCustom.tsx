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

export function TableDialogCustom() {

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
            <TableForm />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
