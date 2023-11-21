<template>
    <div class="chartWrap">
        <div class="chart" ref="mychart2"></div>
    </div>
</template>
<script setup>
import option from './options.js';
const mychart2 = ref(null);
const props = defineProps({
    scoreList: {type: Array, required: true},
})
const { proxy } = getCurrentInstance();
const handlerMounted = function() {
	var myChart = proxy.$echarts.init(mychart2.value);
	myChart.setOption(option);
}
watch(props.scoreList, (newValue)=> {
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
        display: flex;
        align-items: center;
        justify-content: center;
        width: 360px;
        height: 360px;
        margin: 0 auto;
        .chart{
            width: 100%;
            height: 100%;
        }
    }
</style>
