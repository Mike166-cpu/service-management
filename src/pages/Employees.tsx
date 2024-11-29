import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import React, {useEffect} from 'react';

const employees = [
  { id: 1, name: "John Doe", position: "Software Engineer", department: "Engineering", status: "Active", joinDate: "2023-01-15" },
  { id: 2, name: "Jane Smith", position: "Product Manager", department: "Product", status: "Active", joinDate: "2023-02-20" },
  { id: 3, name: "Mike Johnson", position: "UX Designer", department: "Design", status: "On Leave", joinDate: "2023-03-10" },
  { id: 4, name: "Sarah Williams", position: "HR Manager", department: "Human Resources", status: "Active", joinDate: "2023-04-05" },
  { id: 5, name: "David Brown", position: "Marketing Lead", department: "Marketing", status: "Active", joinDate: "2023-05-12" },
];

const Employees = () => {
  useEffect (()=>{
    document.title = "Employee Management";
  })
  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Employee Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Employee
        </Button>
      </div>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search employees..." className="pl-8" />
          </div>
          <div className="space-x-2">
            <Button variant="outline">Filter</Button>
            <Button variant="outline">Export</Button>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Join Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell className="font-medium">{employee.name}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      employee.status === "Active" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {employee.status}
                    </span>
                  </TableCell>
                  <TableCell>{employee.joinDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default Employees;