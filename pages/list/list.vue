<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<button @tap="getMsg">
			<text>{{title}}</text>
		</button>
	</view>
</template>

<script>
	import common from '../../utils/request/common.js'
	import https from '../../utils/request/index.js'
	export default {
		props: {
			// title: {
			// 	type: String,
			// 	default: ""
			// },
			list: {
				type: Array,
				default(){
					return []
				}
			}
		},
		data() {
			return {
				title: 'Hello1'
			}
		},
		onLoad() {
			this.getSlider()
		},
		methods: {
			getMsg(){
				console.log("I am demo")
				this.$PubFuc.formatTime()
				// this.$emit("getMsg", this)
				// uni.navigateTo({
				// 	url: "/pages/list/list?id=1&name=uniapp"
				// })
			},
			async getSlider(){
				let [err, res] = await uni.request({
					url: https.getSlider,
					method: 'GET'
				})
				console.log((res))
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>