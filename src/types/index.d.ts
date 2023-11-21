import type { ComposeOption } from 'echarts/core';
import type { GaugeSeriesOption, RadarSeriesOption } from 'echarts/charts';
import type { TitleComponentOption, TooltipComponentOption, GridComponentOption,  DatasetComponentOption } from 'echarts/components';

export {}
declare module 'vue' {
    interface ComponentCustomProperties {
        $echarts: typeof import('echarts/core')
    }
}
declare global {
    export type ECOption = ComposeOption<
    | GaugeSeriesOption
    | RadarSeriesOption
    | TitleComponentOption
    | TooltipComponentOption
    | GridComponentOption
    | DatasetComponentOption
  >
}