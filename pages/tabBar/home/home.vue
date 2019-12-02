<template>
	<view>
		<page-status></page-status>
		<pageHeader></pageHeader>
		<view class="swiper">
			<view class="swiper-box">
				<swiper class="swiper" 
						circular="true"
						:indicator-dots="indicatorDots"
						indicator-active-color="#fff" 
						:autoplay="autoplay" 
						:interval="interval" 
						:duration="duration"
						@change="currentChange"
						>
					<swiper-item v-for="(item,index) in swiperList" :key="index">
						<image :src="item.img" mode="scaleToFill"></image>
					</swiper-item>
				</swiper>
				<view class="indicator">
					<view :class="{'on':currentSwiper >= index}" class="dots" v-for="(item,index) in swiperList" :key="index"></view>
				</view>
			</view>
		</view>
		
		<view class="category-list">
			<view class="category" v-for="(item,index) in categoryList" :key="index" @tap="handleCategory(item)">
				<view class="img">
					<image :src="item.img" mode=""></image>
				</view>
				<view class="text">
					{{item.name}}
				</view>
			</view>
		</view>
		
		<view class="banner" v-if="promotion.length > 0">
			<image src="/static/img/category/banner.jpg" mode=""></image>
		</view>
		
		<view class="promotion" v-if="promotion.length > 0">
			<view class="text">
				优惠活动
			</view>
			<view class="list">
				<view class="column" v-for="(item,index) in promotion" :key="index" @tap="handlePromotion(item)">
					<view class="top">
						<view class="title">{{item.title}}</view>
					</view>
					<view class="left">
						<view class="ad">{{item.ad}}</view>
						<view class="into">
							点击进入
						</view>
					</view>
					<view class="right">
						<image :src="item.img" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import pageHeader from './pageHeader.vue'
	import interfaces from '../../../utils/interfaces.js'
	export default {
		components:{
			pageHeader
		},
		data() {
			return {
				swiperList:[],//轮播数组
				categoryList:[],//分类数组
				promotion:[], //活动数组
				indicatorDots: false,
				autoplay: true,
				interval: 3000,
				duration: 1000,
				currentSwiper:0
			};
		},
		onLoad(){
			this.initData();
		},
		methods:{
			initData() {
				this.request({
					url: interfaces.getMallData,
					success: (res) => {
						console.log(res.data)
						this.swiperList = res.data.swiperList;
						this.categoryList =res.data.categoryList;
						this.promotion = res.data.promotion;
						console.log(this.categoryList)
					}
				})
			},
			currentChange(e) {
				this.currentSwiper = e.detail.current
			},
			handleCategory(item){              //分类跳转
				uni.navigateTo({
				    url: "../../goods/goodsList?name="+item.name
				});
			},
			handlePromotion(item) {
				uni.showToast({
					title:item.title
				})
			}
		}
	}
</script>

<style lang="scss">
	.swiper {
		width: 100%;
		margin-top: 10upx;
		display: flex;
		justify-content: center;

		.swiper-box {
			width: 92%;
			height: 30.7vw;
			overflow: hidden;
			border-radius: 15upx;
			box-shadow: 0upx 8upx 25upx rgba(0, 0, 0, 0.2);
			//兼容ios，微信小程序
			position: relative;
			z-index: 1;

			swiper {
				width: 100%;
				height: 30.7vw;

				swiper-item {
					image {
						width: 100%;
						height: 40vw;
					}
				}
			}

			.indicator {
				position: absolute;
				bottom: 20upx;
				left: 20upx;
				background-color: rgba(255, 255, 255, 0.4);
				width: 150upx;
				height: 5upx;
				border-radius: 3upx;
				overflow: hidden;
				display: flex;

				.dots {
					width: 0upx;
					background-color: rgba(255, 255, 255, 1);
					transition: all 0.3s ease-out;

					&.on {
						width: (100%/3);
					}
				}
			}
		}
	}

	.category-list {
		width: 92%;
		margin: 0 4%;
		padding: 0 0 30upx 0;
		border-bottom: solid 2upx #f6f6f6;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.category {
			width: 25%;
			margin-top: 50upx;
			display: flex;
			flex-wrap: wrap;

			.img {
				width: 100%;
				display: flex;
				justify-content: center;

				image {
					width: 11vw;
					height: 11vw;
				}
			}

			.text {
				margin-top: 16upx;
				width: 100%;
				display: flex;
				justify-content: center;
				font-size: 24upx;
				color: #3c3c3c;
			}
		}
	}

	.banner {
		width: 92%;
		margin: 40upx 4%;

		image {
			width: 100%;
			height: 36vw;
			border-radius: 4upx;
			box-shadow: 0upx 5upx 25upx rgba(0, 0, 0, 0.3);
		}
	}

	.promotion {
		width: 92%;
		margin: 10upx 4% 30upx 4%;

		.text {
			width: 100%;
			height: 60upx;
			font-size: 34upx;
			font-weight: 600;
			margin: 10upx;
		}

		.list {
			width: 100%;
			display: flex;
			justify-content: space-between;

			.column {
				width: 43%;
				padding: 15upx 3%;
				background-color: #ebf9f9;
				border-radius: 10upx;
				overflow: hidden;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.top {
					width: 100%;
					height: 40upx;
					display: flex;
					align-items: center;
					margin-bottom: 5upx;

					.title {
						font-size: 30upx;
					}
				}

				.left {
					width: 50%;
					height: 18.86vw;
					display: flex;
					flex-wrap: wrap;
					align-content: space-between;

					.ad {
						margin-top: 5upx;
						width: 100%;
						font-size: 22upx;
						color: #acb0b0;
					}

					.into {
						width: 100%;
						font-size: 24upx;
						color: #aaa;
						margin-bottom: 5upx;
					}
				}

				.right {
					width: 18.86vw;
					height: 18.86vw;

					image {
						width: 18.86vw;
						height: 18.86vw;
					}
				}
			}
		}
	}
</style>

