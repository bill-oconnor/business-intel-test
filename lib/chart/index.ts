export const chartBaseConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#ffffff',
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(26, 100, 146, ${opacity})`,
  barPercentage: 0.4,
};

export function generateRevenueChartData(revenueData) {
  return revenueData.reduce(
    (data, revenue) => {
      const revDate = new Date(revenue.date);
      data.labels.push(`${revDate.getMonth()}/${revDate.getFullYear()}`);
      data.datasets[0].data.push(revenue.value);
      return data;
    },
    {
      labels: [],
      datasets: [
        {
          data: [],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        },
      ],
      legend: ['Revenue'],
    },
  );
}