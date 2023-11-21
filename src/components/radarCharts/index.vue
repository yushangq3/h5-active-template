<template>
    <div class="chartWrap">
        <div class="chart" ref="mychart2"></div>
    </div>
</template>
<script setup>
import option from './options.js';
const mychart2 = ref(null);
const myEchart2 = ref(null);
const props = defineProps({
    scoreList: {type: Array, required: true},
})
const { proxy } = getCurrentInstance();
const handleSetVal =function(newValue) {
    option.radar[0].indicator = newValue.map(item => {
        return {
            name: item.name + '\n' + item.percent,
            max: 100,
        }
    });
    option.series[0].data[0].value = newValue.map(item => {
        return item.percent
    })
    myEchart2.value.setOption(option);
}
const handleMounted = function() {
	myEchart2.value = proxy.$echarts.init(mychart2.value);
    setTimeout(() => {
        handleSetVal(props.scoreList);
    }, 20);
}

watch(() => props.scoreList, (newValue)=> {
    if(newValue) {
        handleSetVal(newValue) 
    }
})
onMounted(handleMounted)
</script>
<style lang='scss' scoped>
    .chartWrap{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 420px;
        height: 420px;
        margin: 0 auto;
        .chart{
            width: 100%;
            height: 100%;
        }
    }
</style>
