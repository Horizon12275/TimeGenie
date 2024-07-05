import React from 'react';
import {View, StyleSheet} from 'react-native';
import {VictoryPie, VictoryLegend} from 'victory-native';

// 定义 Props 类型
interface PieGraphProps {
  data: {x: string; y: number}[];
}

// 定义颜色范围
const colorScale = [
  '#6699ff',
  '#ff9933',
  '#ff6666',
  '#6699ff',
  '#ff9933',
  '#ff6666',
  '#6699ff',
  '#ff9933',
  '#ff6666',
  '#6699ff',
  '#ff9933',
  '#ff6666',
];

const PieGraph: React.FC<PieGraphProps> = ({data}) => {
  // 生成 VictoryLegend 的 data
  const legendData = data.map((item, index) => ({
    name: item.x,
    symbol: {fill: colorScale[index]},
  }));

  return (
    <View>
      <View style={styles.pieGraph}>
        <VictoryPie
          colorScale={colorScale}
          padding={70} // 设置页面内边距
          data={data}
          innerRadius={25} // 设置内半径
          labelRadius={125} // 设置标签半径
          radius={({datum}) => 10 + (datum.y || 0) * 2.5} // 设置分块扇形的半径
          labels={({datum}) => `${datum.x}: ${datum.y}%`} // 设置标签内容
          style={{
            labels: {fill: 'black'},
          }}
        />
      </View>
      <View style={styles.legend}>
        <VictoryLegend
          x={90} // 设置水平位置
          y={0} // 设置垂直位置
          orientation="horizontal"
          gutter={20} // 设置间距
          data={legendData}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pieGraph: {
    marginTop: -70,
  },
  legend: {
    height: 30,
    marginTop: -60,
  },
});

export default PieGraph;