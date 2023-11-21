export default {
    color: '#b389ef',
    radar: [
      {
        indicator: [
          { name: '红血丝', max: 100, val: 30 },
          { name: '糖化', max: 100 },
          { name: '粗糙度', max: 100 },
          { name: '皱纹', max: 100 },
          { name: '深层斑', max: 100 },
          { name: '卟啉', max: 100 },
          { name: '表层斑', max: 100 },
          { name: '毛孔', max: 100 },
          { name: '水分', max: 100 },
        ],
        center: ['50%', '55%'],
        radius: '62%',
        startAngle: 90,
        splitNumber: 4,
        shape: 'circle',
        axisName: {
          formatter: function (value) {
              return value;
          },
          lineHeight: 9,
          color: '#ffffff',
          fontSize: 7,
        },
        axisNameGap: 10,
        splitArea: {
          areaStyle: {
            color: ['#fefeff', '#f9f4fe', '#ecdbfb', '#ddb8f7'],
          }
        },
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#ceadf4',
            width: 0.2
          }
        },
      },
    ],
    series: [
      {
        type: 'radar',
        data: [
          {
            value: [0,0,0,0,0,0,0,0,0],
            symbolSize: 3,
            lineStyle: {
              width: 0,
              color: '#b389ef',
              opacity: 0.3
            },
            areaStyle: {
              color: '#b389ef',
              opacity: 0.3
            },
          }
        ]
      }
    ]
  };