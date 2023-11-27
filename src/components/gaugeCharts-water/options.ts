export default {
    series: [
        {
          type: 'gauge',
          radius: '100%',  
          startAngle: 210,
          endAngle: -30,
          center: ['50%', '60%'],
          axisLine: {
            lineStyle: {
              width: 5,
              color: [
                [0.3, '#fd666d'],
                [0.4, '#ff9033'],
                [1, '#00ff00']
              ]
            }
          },
          pointer: {
            width: 2,
            length: '52%',
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
              width: 1
            }
          },
          axisLabel: {
            color: '#999999',
            distance: 8,
            fontSize: 6
          },
          detail: {
            fontSize: 9,
            valueAnimation: true,
            formatter: (value: number) => {
                if (value < 30) {
                    return '危险'
                } else if (value < 40) {
                    return '警戒'
                } else {
                    return '良好'
                }
            },
            color: 'inherit',
            offsetCenter: [0, '25%']
          },
          data: [
            {
              value: 0
            }
          ]
        }
      ]
}