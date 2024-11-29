import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React, {useEffect} from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const applicants = [
  { id: 1, name: "Emma Thompson", position: "Senior Developer", status: "Screening", appliedDate: "2024-02-18", experience: "5 years" },
  { id: 2, name: "James Wilson", position: "Product Manager", status: "Interview", appliedDate: "2024-02-17", experience: "7 years" },
  { id: 3, name: "Sophie Chen", position: "UX Designer", status: "Hired", appliedDate: "2024-02-15", experience: "3 years" },
  { id: 4, name: "Michael Brown", position: "Marketing Manager", status: "Rejected", appliedDate: "2024-02-14", experience: "4 years" },
];

const stats = [
  { label: "Total Applications", value: "156" },
  { label: "In Progress", value: "45" },
  { label: "Interviews Scheduled", value: "12" },
  { label: "Offers Sent", value: "3" },
];

const Applicants = () => {
  useEffect (()=>{
    document.title = "Applicant Management";
  })

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Applicant Management</h1>
        <Button>Post New Job</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6">
            <h3 className="text-sm font-medium text-muted-foreground">{stat.label}</h3>
            <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search applicants..." className="pl-8" />
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
                <TableHead>Experience</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Applied Date</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applicants.map((applicant) => (
                <TableRow key={applicant.id}>
                  <TableCell className="font-medium">{applicant.name}</TableCell>
                  <TableCell>{applicant.position}</TableCell>
                  <TableCell>{applicant.experience}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      applicant.status === "Hired" 
                        ? "bg-green-100 text-green-800"
                        : applicant.status === "Rejected"
                        ? "bg-red-100 text-red-800"
                        : applicant.status === "Interview"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {applicant.status}
                    </span>
                  </TableCell>
                  <TableCell>{applicant.appliedDate}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">View Profile</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default Applicants;