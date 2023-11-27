<template>
    <div class="chartWrap">
        <div class="chartbg"></div>
        <div class="chart" ref="mychart"></div>
        
    </div>
</template>
<script setup lang="ts">
import option from './options';
const mychart = ref(null);
const myEchart = ref<TEcharts | undefined>(undefined);
const props = defineProps({
    score: {type: Number, required: true},
})
const $echarts = getCurrentInstance()?.appContext.config.globalProperties.$echarts;
console.log(getCurrentInstance(), 'getCurrentInstance()')
const handleSetVal = function(newValue: number) {
    myEchart.value?.setOption({
        series: [{
            data: [{
                value: newValue
            }]
        }]
    });
}
const handleMounted = function() {
	myEchart.value = $echarts?.init(mychart.value);
	myEchart.value!.setOption(option);
    setTimeout(() => {
        handleSetVal(props.score);
    }, 20);
}

watch(() => props.score, (newValue)=> {
    if(newValue) {
        handleSetVal(newValue);
    }
})
onMounted(handleMounted)
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
            width: 140px;
            height: 120px;
            margin-top:20px;
            overflow: hidden;
            &:after{
                content: '';
                display: block;
                width:140px;
                height: 140px;
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
