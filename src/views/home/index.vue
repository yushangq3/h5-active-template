<template>
	<div class="main">
		<div class="header">
			<img src="@/assets/images/logo.png" >
			<span>芳香世家大管家</span>
		</div>
		<template v-if="loadEnd">
			<div class="action-title" >
				<div class="btn">{{resource.name}}</div>
				<img src="@/assets/images/title.png">
				<div class="sub">{{resource.encourage_text}}</div>
				<div class="tip">{{resource.report_date}}</div>
			</div>
			<div class="action-box">
				<img src="@/assets/images/skintitle0.png" class="title" alt="皮肤九项检测维度" />
				<img src="@/assets/images/arrow.png" class="arrow" />
				<div
					v-for="(item,index) in resource.nine_dimensionality"
					:key="item.name"
					class="box"
				>
					<div class="btn">{{item.name}}</div>
					<div class="showArea">
						<div class="avator" @click="handleImagePreview(index)">
							<van-image
								class="vanImg"
								fit="cover"
								lazy-load
								:src="item.image_url"
							>
								<template v-slot:loading>
									<van-loading color="#B087EE" size="20" />
								</template>
							</van-image>
						</div>
						<gauge-charts-water v-if="index === 1" :score="+item.percent" />
						<gauge-charts v-else :score="+item.percent" />
					</div>
					<div class="section" >
						<div class="title">护肤建议</div>
						<div class="p">{{ item.tip1 }}</div>
					</div>
					<div class="section">
						<div class="title">护肤小贴士</div>
						<div class="p">{{ item.tip2 }}</div>
					</div>
				</div>
			</div>
		</template>
		<div v-else class="loadingWrap">
			<img src="@/assets/images/loading.gif">
		</div>
		<div v-if="loadEnd" class="action-box">
			<img src="@/assets/images/skintitle.png" class="title" />
			<img src="@/assets/images/arrow.png" class="arrow" />
			<radar-charts :score-list="resource.radar_map"></radar-charts>
		</div>
	</div>
</template>
<script setup lang="ts">
import { showImagePreview } from 'vant';
import 'vant/es/image-preview/style';
import { getReportInfo } from '@/service';
import dataSource from '@/config/data';
const route = useRoute()
const uuid= (route.query.uuid || '') as string;
const loadEnd = ref(false);
const resource = ref<TResource>({});
if (uuid) {
	getReportInfo({uuid}).then((res:any)=> {
		console.log(res);
		loadEnd.value = true;
		resource.value = res.data.report_data;
		resource.value.nine_dimensionality = Object.values(dataSource).map((item, index) => {
			const obj = res.data.report_data.nine_dimensionality.filter((item2:TnineDimen) => {
				return item2.name === item.name;
			})[0] || {};
			return {
				percent: obj.percent,
				name: item.name,
				image_url: obj.image_url,
				tip1: index === 1 ? item[getLevleFunc2(obj.percent)] : item[getLevleFunc(obj.percent)],
				tip2: item[200]
			}
		})
	})
}

const getLevleFunc = function(percent: number): TLevel {
	if (percent > 70) {
		return '100'
	} else if (percent > 40) {
		return '70'
	} else {
		return '40'
	}
}
const getLevleFunc2 = function(percent: number): TLevel {
	if (percent < 30) {
		return '100'
	} else if (percent < 40) {
		return '70'
	} else {
		return '40'
	}
}
const previewImgs = computed(():string[] => {
	return resource.value.nine_dimensionality?.map(item => {
		return item.image_url as string;
	}) || [];
})
const handleImagePreview = function(index:number) {
	showImagePreview({
		images: previewImgs.value,
		startPosition: index,
	})
}
</script>
<style scoped lang="scss">
.main{
	background: url(../../assets/images/bg.png) no-repeat 0 0;
	background-size: 100% auto;
	background-color: var(--t-color-bg);
	padding: var(--t-padding-gap);
	min-height: 100vh;
	.header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding-bottom: 13px;
		border-bottom: 1px solid var(--t-color-dark);
		img{
			width: 139px;
			height: 68px;
		}
		span{
			line-height: 1;
			font-size: var(--t-font-size-title);
		}
	}
	.loadingWrap{
		position: absolute;
		left: 0;
		right: 0;
		top: 50%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		transform: translateY(-50%);
		z-index: 100;
		img{
			width: 200px;
			height: 200px;
		}
	}
	.action-title{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 60px 0 26px;
		text-align: center;
		color: var(--t-color-dark);
		.btn{
			display: inline-block;
			padding: 0 40px;
			height: 56px;
			line-height: 56px;
			border-radius: 28px;
			background: linear-gradient(0, #c38cf1, #b483eb);
			color: var(--t-color-white);
			font-size: var(--t-font-size-name);
			text-align: center;
			margin-bottom: var(--t-padding-gap);
		}
		img{
			width: 472px;
			margin-bottom: var(--t-padding-gap);
		}
		.sub{
			font-size: var(--t-font-size-title-sub);
			line-height: 1;
			margin-bottom: 60px;
		}
		.tip{
			font-size: var(--t-font-size-tip);
			line-height: 1;
		}
	}
	.action-box{
		background: linear-gradient(90deg, #D69EF6, #B087EE);
		border-radius: 63px;
		padding: 65px 18px;
		margin-bottom: 47px;
		img.title{
			width: 431px;
			height: auto;
			display: block;
			margin: 0 auto var(--t-padding-gap);
		}
		.arrow{
			width: 44px;
			height: auto;
			display: block;
			margin: 0 auto;
		}
		.box {
			background: var(--t-color-bg-box);
			opacity: 0.8;
			border-radius: 63px;
			padding: 0 var(--t-padding-gap-content) var(--t-padding-gap-content);
			margin-top: var(--t-box-gap);
			.btn{
				width: 197px;
				height: 56px;
				background: url(../../assets/images/titlebg.png) no-repeat 0 0;
				background-size: 100% 100%;
				color: var(--t-color-white);
				font-size: var(--t-font-size-button-title);
				text-align: center;
				margin:0 auto 43px;
			}
			.showArea{
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 56px;
				.avator{
					width: 214px;
					height: 214px;
					border-radius: 50%;
					overflow: hidden;
					.vanImg{
						width: 100%;
						height: 100%;
						background-color: #B087EE;
					}
				}
				.chart{
					flex: none;
					width: 214px;
					height: 214px;
				}
			}
			.section{
				margin-bottom: 43px;
				.title{
					width: 161px;
					height: 36px;
					border: 1px solid var(--t-color-button-border);
					border-radius: 17px;
					font-size: var(--t-font-size-button-text);
					text-align: center;
					line-height: 36px;
					margin-bottom: var(--t-title-p-gap);
				}
				.p{
					font-family: PingFang;
					font-weight: 400;
					line-height: var(--t-font-height-text);
					font-size: var(--t-font-size-text);
					text-indent: var(--t-font-size-text-indent);
				}
			}
		}
	}
}
</style>