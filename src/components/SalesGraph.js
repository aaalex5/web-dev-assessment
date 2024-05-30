import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { aggregateSalesByMonth } from '../utils/aggregateSalesByMonth';

const SalesGraph = () => {
  const sales = useSelector((state) => state.assets.assets[0]?.sales);

  if (!sales) return <div>Loading...</div>;

  // Aggregate sales data by month
  const aggregatedSales = aggregateSalesByMonth(sales);

  return (
    <div>
      <h2>Sales Overview</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={aggregatedSales}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="retailSales" stroke="#8884d8" name="Retail Sales" />
          <Line type="monotone" dataKey="wholesaleSales" stroke="#82ca9d" name="Wholesale Sales" />
          <Line type="monotone" dataKey="unitsSold" stroke="#ffc658" name="Units Sold" />
          <Line type="monotone" dataKey="retailerMargin" stroke="#ff7300" name="Retailer Margin" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesGraph;