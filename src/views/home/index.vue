<template>
	<div class="main">
		<div class="header">
			<img src="@/assets/images/logo.png" >
			<span>芳香世家大管家</span>
		</div>
		<div class="action-title">
			<div class="btn">某某某</div>
			<img src="@/assets/images/title.png">
			<div class="sub">加油哦！再努力好好保养，你就可以发朋友圈了!</div>
			<div class="tip">检测时间：2023-11-06 17:54:48</div>
		</div>
		<div class="action-box">
			<img src="@/assets/images/skintitle0.png" class="title" alt="皮肤九项检测维度">
			<img src="@/assets/images/arrow.png" class="arrow">
			<div class="box">
				<div class="btn">毛孔</div>
				<div class="showArea">
					<div class="avator"></div>
					<div class="chart"></div>
				</div>
				<div class="section">
					<div class="title">护肤建议</div>
					<div class="p">您的毛孔已达警戒,护理不当会导致粉刺、小颗粒，或偶尔存在座疮,护理 方向以温和清洁为主，切忌一心求快进行强力清洁，可能会导致不可挽回的 器质性毛孔损伤。</div>
				</div>
				<div class="section">
					<div class="title">护肤小贴士</div>
					<div class="p">您的毛孔已达警戒,护理不当会导致粉刺、小颗粒，或偶尔存在座疮,护理 方向以温和清洁为主，切忌一心求快进行强力清洁，可能会导致不可挽回的 器质性毛孔损伤。</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">

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
					line-height: 19px;
					font-size: var(--t-font-size-text);
					text-indent: var(--t-font-size-text-indent);
				}
			}
		}
	}
}
</style>