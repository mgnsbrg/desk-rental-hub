
import React from "react";
import {
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Line,
  LineChart as RechartsLineChart
} from "recharts";

interface ChartProps<T> {
  data: T[];
  x: (d: T) => string | number;
  y: (d: T) => number;
  height?: number;
  width?: number;
}

export function BarChart<T>({
  data,
  x,
  y,
  height = 300,
  width = 500
}: ChartProps<T>) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={(d) => x(d)} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={(d) => y(d)} fill="#8884d8" name="Belopp" />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}

export function LineChart<T>({
  data,
  x,
  y,
  height = 300,
  width = 500
}: ChartProps<T>) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsLineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={(d) => x(d)} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={(d) => y(d)} stroke="#8884d8" activeDot={{ r: 8 }} name="Belopp" />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}

export { BarChart as Chart };
