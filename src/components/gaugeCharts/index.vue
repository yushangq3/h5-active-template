<template>
    <div class="chartWrap">
        <div class="chartbg"></div>
        <div class="chart" ref="mychart"></div>
        
    </div>
</template>
<script setup>
import option from './options.js';
const mychart = ref(null);
const props = defineProps({
    score: {type: Number, required: true},
})
const { proxy } = getCurrentInstance();
const handlerMounted = function() {
	var myChart = proxy.$echarts.init(mychart.value);
	myChart.setOption(option);
}
watch(props.score, (newValue)=> {
    if(newValue) {
        proxy.$echarts.setOption({
            series: [{
                data: [{
                    value: newValue
                }]
            }]
        });
    }
})
onMounted(handlerMounted)
</script>
<style lang='scss' scoped>
    .chartWrap{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 214px;
        height: 214px;
        .chartbg{
            width: 130px;
            height: 110px;
            margin-top: -20px;
            overflow: hidden;
            &:after{
                content: '';
                display: block;
                width:130px;
                height: 130px;
                border-radius: 50%;
                background-color: #f5ebfd;
            }
        }
        .chart{
            position: absolute;
            left: 0;
            top: 0;
            width: 214px;
            height: 214px;
        }
    }
</style>
