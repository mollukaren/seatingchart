"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function TableDialog() {

  const handleSubmit = () => {console.log("beepboop")}

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile Or Whatever idc</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a Table</DialogTitle>
          <DialogDescription>
            Add a table name and a read-only API key from AirTable
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tablename" className="text-right">
              Table Name
            </Label>
            <Input id="tablename" placeholder="Table Name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="apikey" placeholder="API Key" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onSubmit={handleSubmit}>Save Table</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
