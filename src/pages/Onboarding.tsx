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
import { Progress } from "@/components/ui/progress";

const onboardingTasks = [
  { id: 1, employee: "Alice Cooper", position: "Frontend Developer", progress: 75, startDate: "2024-02-15", status: "In Progress" },
  { id: 2, employee: "Bob Wilson", position: "Product Designer", progress: 100, startDate: "2024-02-10", status: "Completed" },
  { id: 3, employee: "Carol Martinez", position: "Marketing Specialist", progress: 30, startDate: "2024-02-20", status: "In Progress" },
];

const Onboarding = () => {
  useEffect (()=>{
    document.title = "New Hire Onboarding";
  })
  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">New Hire Onboarding</h1>
        <Button>Start New Onboarding</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Active Onboarding</h3>
          <p className="text-3xl font-semibold">2</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Completed This Month</h3>
          <p className="text-3xl font-semibold">4</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Upcoming</h3>
          <p className="text-3xl font-semibold">3</p>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Current Onboarding Progress</h2>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {onboardingTasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell className="font-medium">{task.employee}</TableCell>
                  <TableCell>{task.position}</TableCell>
                  <TableCell>
                    <div className="w-[100px]">
                      <Progress value={task.progress} className="h-2" />
                    </div>
                    <span className="text-xs text-muted-foreground mt-1">
                      {task.progress}%
                    </span>
                  </TableCell>
                  <TableCell>{task.startDate}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      task.status === "Completed" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {task.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">View Details</Button>
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

export default Onboarding;