import * as React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {chartBaseConfig, generateRevenueChartData} from '../lib/chart';

const {width: screenWidth} = Dimensions.get('window');

export default function BusinessDetailScreen({route}) {
  const {business} = route.params;
  business.revenue.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
  const chartData = generateRevenueChartData(business.revenue);
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{business.name}</Text>
      <View style={styles.chartContainer}>
        <LineChart
          data={chartData}
          width={screenWidth - 32}
          height={400}
          chartConfig={chartBaseConfig}
          fromZero={true}
          verticalLabelRotation={30}
          formatYLabel={(val) => `$${(val / 1000000).toFixed(2)}M`}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chartContainer: {
    marginHorizontal: 16,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 36,
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginVertical: 24,
  },
});
