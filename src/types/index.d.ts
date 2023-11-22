import type { ComposeOption, EChartsType } from 'echarts/core';
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
  export type TEcharts = EChartsType
  export type TnineDimen = {
    percent: number
    name: string
    image_url?: string
    tip1?: string
    tip2?: string
  }
  export type TResource = {
    nine_dimensionality?: Array<TnineDimen>
    radar_map?: Array<TnineDimen>
    report_date?: string
    encourage_text?: string
    name?: string

  }
  export type TLevel = '100' | '70' | '40'
  export type TReportParams = {
    uuid: string
  }
}