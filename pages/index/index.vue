<template>
	<view class="home">
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="2000"
				:duration="500">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {
			
		},
		methods: {
			
		}
	}
</script>

<style>
	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}
	.swiper {
		height: 300rpx;
	}
	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}
	.uni-bg-red{
		background-color: red;
	}
	
	.uni-bg-green{
		background-color: green;
	}
	.uni-bg-blue{
		background-color: blue;
	}
</style>