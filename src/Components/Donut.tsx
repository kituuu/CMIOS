import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Circle, Svg} from 'react-native-svg';

const DonutChart = ({
  freeSpace,
  occupiedSpace,
}: {
  freeSpace: number;
  occupiedSpace: number;
}) => {
  const radius = 50;
  const strokeWidth = 25;
  const circumference = 2 * Math.PI * radius;
  const totalSpace = freeSpace + occupiedSpace;
  const freeSpacePercentage = (freeSpace / (freeSpace + occupiedSpace)) * 100;
  //   const occupiedSpacePercentage =
  //     (occupiedSpace / (freeSpace + occupiedSpace)) * 100;

  const freeSpaceDashoffset =
    circumference - (circumference * freeSpacePercentage) / 100;

  return (
    <View style={styles.donutView}>
      <Svg height="200" width="200">
        <Circle
          r={radius}
          cx="100"
          cy="100"
          fill="transparent"
          stroke="#f2f2f2"
          strokeWidth={strokeWidth}
        />
        <Circle
          r={radius}
          cx="100"
          cy="100"
          fill="transparent"
          stroke="#FFDE5A"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={0}
        />
        <Circle
          r={radius}
          cx="100"
          cy="100"
          fill="transparent"
          stroke="#004AAC"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={freeSpaceDashoffset}
        />
        <Text style={styles.middletext}>
          {occupiedSpace}/{totalSpace} GB
        </Text>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  donutView: {
    display: 'flex',
    top: 0,
    height: 'auto',
  },
  middletext: {
    fontSize: 12,
    fontWeight: '600',
    width: 70,
    overflow: 'hidden',
    position: 'absolute',
    top: 92,
    left: 75,
    color: 'white',
  },
});

export default DonutChart;
