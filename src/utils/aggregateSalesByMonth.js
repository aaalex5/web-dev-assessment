import { formatToMonth } from './formatDate';

export const aggregateSalesByMonth = (sales) => {
  const monthlySales = {};

  sales.forEach(sale => {
    const month = formatToMonth(sale.weekEnding);
    if (!monthlySales[month]) {
      monthlySales[month] = {
        month,
        retailSales: 0,
        wholesaleSales: 0,
        unitsSold: 0,
        retailerMargin: 0,
        count: 0
      };
    }
    monthlySales[month].retailSales += sale.retailSales;
    monthlySales[month].wholesaleSales += sale.wholesaleSales;
    monthlySales[month].unitsSold += sale.unitsSold;
    monthlySales[month].retailerMargin += sale.retailerMargin;
    monthlySales[month].count += 1;
  });

  return Object.values(monthlySales).map(monthlySale => ({
    ...monthlySale,
    retailSales: monthlySale.retailSales / monthlySale.count,
    wholesaleSales: monthlySale.wholesaleSales / monthlySale.count,
    unitsSold: monthlySale.unitsSold / monthlySale.count,
    retailerMargin: monthlySale.retailerMargin / monthlySale.count,
  }));
};