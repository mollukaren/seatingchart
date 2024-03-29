"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type * as z from "zod"
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

import { CustomTableSchema } from "@/src/schemas/customTableSchema"
import React from "react"

interface TableFormProps {
    onSubmit: (values: z.infer<typeof CustomTableSchema>) => void;
  }
  

export function TableForm({onSubmit} : TableFormProps) {

    const form = useForm<z.infer<typeof CustomTableSchema>>({
        resolver: zodResolver(CustomTableSchema),
        defaultValues: {
            airtable_token: "",
            airtable_base: "",
            airtable_table: "",
            table_name: "",
            
        },
    })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
                control={form.control}
                name="table_name"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Table Name</FormLabel>
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
                name="airtable_token"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>API Token</FormLabel>
                    <FormControl>
                        <Input placeholder="API Token" {...field} />
                    </FormControl>
                    <FormDescription>
                    Enter your API Token here. (but don&apos;t actually, this site is very insecure)
                    </FormDescription>
                    <FormMessage />
                    
                </FormItem>
                
                )}
            />
            <FormField
                control={form.control}
                name="airtable_base"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>AirTable Base</FormLabel>
                    <FormControl>
                        <Input placeholder="AirTable Base" {...field} />
                    </FormControl>
                    <FormDescription>
                    Enter the ID of the AirTable Base here.
                    </FormDescription>
                    <FormMessage />
                    
                </FormItem>
                
                )}
            />
            <FormField
                control={form.control}
                name="airtable_table"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>AirTable Table</FormLabel>
                    <FormControl>
                        <Input placeholder="AirTable Table" {...field} />
                    </FormControl>
                    <FormDescription>
                    Enter the ID of the AirTable Table here.
                    </FormDescription>
                    <FormMessage />
                    
                </FormItem>
                
                )}
            />
            <Button type="submit">Submit</Button>
            </form>
        </Form>)
}
