"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { type CustomTable } from '@prisma/client';
import { api } from "~/utils/api";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    table_name: z.string().min(3).max(30),
    api_key: z.string().length(82),
})

export function TableForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            table_name: "",
            api_key: ""
        },
    })

    const { mutate } = api.customTable.addTable.useMutation()
    
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        mutate(values)
        console.log(values)
      }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
                control={form.control}
                name="table_name"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                        <Input placeholder="Table Name" {...field} />
                    </FormControl>
                    <FormDescription>
                    Enter your table name here.
                    </FormDescription>
                    <FormMessage />

                </FormItem>
                
                )}
            />
            <FormField
                control={form.control}
                name="api_key"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>API Key</FormLabel>
                    <FormControl>
                        <Input placeholder="API Key" {...field} />
                    </FormControl>
                    <FormDescription>
                    Enter your API Key here.
                    </FormDescription>
                    <FormMessage />
                    
                </FormItem>
                
                )}
            />
            <Button type="submit">Submit</Button>
            </form>
        </Form>
        )
}
