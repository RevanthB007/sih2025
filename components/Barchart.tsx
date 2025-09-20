import React from 'react';
import { View, ScrollView ,Text} from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const Barchart = () => {
  // Data for grouped bars - point1 and point2 for each x-axis position
  const barData = [
    {
      value: 40,
      label: 'Jan',
      frontColor: '#177AD5', // Color for point1
    },
    {
      value: 60,
      frontColor: '#ED6665', // Color for point2
      spacing: 2, // Small spacing between grouped bars
    },
    
    {
      value: 50,
      label: 'Feb',
      frontColor: '#177AD5',
    },
    {
      value: 70,
      frontColor: '#ED6665',
      spacing: 2,
    },
    
    {
      value: 65,
      label: 'Mar',
      frontColor: '#177AD5',
    },
    {
      value: 45,
      frontColor: '#ED6665',
      spacing: 2,
    },
    
    {
      value: 80,
      label: 'Apr',
      frontColor: '#177AD5',
    },
    {
      value: 85,
      frontColor: '#ED6665',
      spacing: 2,
    },
  ];

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
      <ScrollView>
        <BarChart
          data={barData}
          width={300}
          height={250}
          barWidth={22}
          spacing={24} // Space between different x-axis groups
          roundedTop={false}
          roundedBottom={false}
          hideRules={false}
          xAxisThickness={0}
          yAxisThickness={0}
          yAxisTextStyle={{ color: 'gray' }}
          noOfSections={3}
          maxValue={100}
          
          // Show values on top of bars
          showValuesAsTopLabel={true}
          topLabelTextStyle={{ 
            color: 'black', 
            fontSize: 12,
            fontWeight: '500'
          }}
          
          // Customize the chart appearance
          initialSpacing={10}
          endSpacing={10}
          
          // Add gradient effect (optional)
          isAnimated={true}
          animationDuration={1000}
        />
        
        {/* Legend */}
        <View style={{ 
          flexDirection: 'row', 
          justifyContent: 'center', 
          marginTop: 20 
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
            <View style={{ 
              width: 12, 
              height: 12, 
              backgroundColor: '#177AD5', 
              marginRight: 5 
            }} />
            <Text>Point 1</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ 
              width: 12, 
              height: 12, 
              backgroundColor: '#ED6665', 
              marginRight: 5 
            }} />
            <Text>Point 2</Text>
          </View>

        </View>
      </ScrollView>
    </View>
  );
};

export default Barchart;