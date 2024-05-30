import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const SalesTable = () => {
  const sales = useSelector((state) => state.assets.assets[0]?.sales);
  const [sortConfig, setSortConfig] = useState({ key: 'weekEnding', direction: 'asc' });

  if (!sales) return <div>Loading...</div>;

  const sortedSales = [...sales].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getClassNamesFor = (key) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === key ? sortConfig.direction : undefined;
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => requestSort('weekEnding')} className={getClassNamesFor('weekEnding')}>Week Ending</th>
          <th onClick={() => requestSort('retailSales')} className={getClassNamesFor('retailSales')}>Retail Sales</th>
          <th onClick={() => requestSort('wholesaleSales')} className={getClassNamesFor('wholesaleSales')}>Wholesale Sales</th>
          <th onClick={() => requestSort('unitsSold')} className={getClassNamesFor('unitsSold')}>Units Sold</th>
          <th onClick={() => requestSort('retailerMargin')} className={getClassNamesFor('retailerMargin')}>Retailer Margin</th>
        </tr>
      </thead>
      <tbody>
        {sortedSales.map((sale) => (
          <tr key={sale.weekEnding}>
            <td>{sale.weekEnding}</td>
            <td>{sale.retailSales}</td>
            <td>{sale.wholesaleSales}</td>
            <td>{sale.unitsSold}</td>
            <td>{sale.retailerMargin}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesTable;