export default {
    series: [
        {
          type: 'gauge',
          radius: '100%',  
          startAngle: 210,
          endAngle: -30,
          axisLine: {
            lineStyle: {
              width: 5,
              color: [
                [0.3, '#00ff00'],
                [0.7, '#ff9033'],
                [1, '#fd666d']
              ]
            }
          },
          pointer: {
            width: 3,
            length: '40%',
            itemStyle: {
              color: 'auto'
            },
            offsetCenter: [0, '-5px']
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            distance: -5,
            length: 5,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          },
          axisLabel: {
            color: '#999999',
            distance: 10,
            fontSize: 9
          },
          detail: {
            fontSize: 12,
            valueAnimation: true,
            formatter: (value) => {
                if (value>70) {
                    return '高风险'
                } else if (value > 30) {
                    return '警戒'
                } else {
                    return '良好'
                }
            },
            color: 'inherit',
            offsetCenter: [0, '30%']
          },
          data: [
            {
              value: 72
            }
          ]
        }
      ]
}