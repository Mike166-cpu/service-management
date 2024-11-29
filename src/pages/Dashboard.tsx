import { Card } from "@/components/ui/card";
import React, {useEffect} from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const monthlyData = [
  { name: "Jan", employees: 400, hires: 40 },
  { name: "Feb", employees: 300, hires: 25 },
  { name: "Mar", employees: 200, hires: 15 },
  { name: "Apr", employees: 278, hires: 28 },
  { name: "May", employees: 189, hires: 19 },
  { name: "Jun", employees: 239, hires: 24 },
];

const stats = [
  { name: "Total Employees", value: "2,345", change: "+12% from last month" },
  { name: "New Hires (MTD)", value: "12", change: "-2% from last month" },
  { name: "Open Positions", value: "4", change: "Same as last month" },
  { name: "Applications", value: "23", change: "+15% from last month" },
];

const Dashboard = () => {
  useEffect (()=>{
    document.title = "Dashboard";
  })
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <div className="text-sm text-muted-foreground">Last updated: Today at 09:00 AM</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-sm font-medium text-muted-foreground">{stat.name}</h3>
            <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
            <p className="mt-2 text-xs text-muted-foreground">{stat.change}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Employee Growth</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="employees" fill="#1E40AF" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Monthly Hiring Trend</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="hires" stroke="#1E40AF" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;