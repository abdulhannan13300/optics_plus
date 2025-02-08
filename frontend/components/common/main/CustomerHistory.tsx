"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import useGetAllCustomers from "@/hooks/main/useGetAllCustomers";
import { useState } from "react";

const CustomerHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterColumn, setFilterColumn] = useState<"customer_name" | "contact">(
    "customer_name"
  );
  const { customer, isLoading, error } = useGetAllCustomers();

  // Log the customer data to check its structure
  console.log("Customer data:", customer);

  // Filter customers based on the search term and selected filter column
  const filteredCustomers = customer.filter((cust) => {
    // Check if the property exists on the customer object
    if (cust[filterColumn] !== undefined) {
      const value = cust[filterColumn].toString().toLowerCase();
      return value.includes(searchTerm.toLowerCase());
    }
    return false; // If the property doesn't exist, exclude this customer
  });

  return (
    <Card className="space-y-2 px-4 border min-h-[40%] overflow-scroll">
      <Label className="">Customer History</Label>
      <div className="flex space-x-2 ">
        <Select
          value={filterColumn}
          onValueChange={(value: "customer_name" | "contact") =>
            setFilterColumn(value)
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select column to filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="customer_name">Name</SelectItem>
            <SelectItem value="contact">Contact</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="search"
          placeholder={`Search ${filterColumn}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Contact</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCustomers.map((cust) => (
              <TableRow key={cust.id}>
                <TableCell className="font-medium">
                  {cust.customer_name}
                </TableCell>
                <TableCell>{cust.contact || "N/A"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Card>
  );
};

export default CustomerHistory;
