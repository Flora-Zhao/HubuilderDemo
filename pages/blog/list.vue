<template>
	<view class="content">
		<view>{{$t('titlePlaceholder')}}</view>
		<hellow-world></hellow-world>
		<order-add></order-add>
		<user-add></user-add>
		<product-detail></product-detail>
		<uv-button type="default" text="切换语言" @click="toggleLanguage"></uv-button>
		<view class="navbar">
			<uv-navbar leftIcon="" :fixed="false" bgColor="#f8f8f8" title="知否技术博客"></uv-navbar>
		</view>
		<view>
			<!-- Tabs 标签选项卡 -->
			<uv-tabs @change="changeTab" class="uv-border-bottom" :scrollable="false" :list="tabList"
				@click="click"></uv-tabs>
		</view>
		<!-- 内容 -->
		<view class="list-wrap">
			<scroll-view :scroll-y="true" @scrolltolower="scrolltolower" class="list-scroll-view">
				<view class="scroll-content" v-if="blogDataList && blogDataList.length>0">
					<uni-card class="blog-content" v-for="(item,index) in blogDataList" :key="index"
						@click="toBlogDetail(item.id)" :title="item.title" :is-shadow="false"
						:extra="timeFormat(item.createTime)">
						<uv-row customStyle="margin-bottom: 5px">
							<uv-col span="3">
								<uv-image src="https://picsum.photos/seed/picsum/300/300" width="50px"
									height="50px"></uv-image>
							</uv-col>
							<uv-col span="9">
								<text class="uv-line-2">{{item.content}}</text>
							</uv-col>
						</uv-row>
					</uni-card>
				</view>
				<!-- 数据加载 -->
				<view class="loading">
					<view v-if="loading==1">数据加载中...</view>
					<view v-if="loading==2 && blogDataList.length>0 ">亲，暂无数据...</view>
					<view v-if="loading==2 && blogDataList.length==0 ">
						<uv-image style="margin:30rpx auto ;" mode="widthFix" width="300rpx" height="300rpx"
							src="/static/images/empty.png"></uv-image>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 底部导航栏 -->
		<tab-bar :itemValue="0"></tab-bar>
	</view>
</template>

<script setup>
	import { useStore } from 'vuex';
	
	    const store = useStore();
	// 引入 Vue 相关库
	import {
		reactive,
		ref
	} from 'vue';
	// 引入 uniapp 相关库
	import {
		onLoad,
		onPullDownRefresh,
		onReachBottom
	} from "@dcloudio/uni-app"
	// 引入 uv-ui 格式化时间的 js 库
	import {
		timeFormat
	} from '@climblee/uv-ui/libs/function/index.js';
	// 引入 API
	import blogApi from "@/api/blog/blog.js"
	const blogDataList=ref([])
	const loading = ref(0)
	// tabList
	const tabList = ref([{
		name: 'java'
	}, {
		name: 'vue'
	}, {
		name: 'react'
	}, {
		name: 'uniapp'
	}, {
		name: 'electron'
	}, {
		name: 'js'
	}])
	// 页面初始化生命周期函数
	onLoad(() => {
		getDataList();
		
	})
	// 下拉刷新方法
	onPullDownRefresh(() => {
		search.current = 1;
		loading.value = 0;
		blogDataList.value = [];
		getDataList();
	})
	//上拉触底	
	onReachBottom(() => {
		if (loading.value == 2) {
			return;
		}
		search.current++;
		loading.value = 1;
		getDataList();
	})
	// 上拉触底
	const scrolltolower = () => {
		if (loading.value == 2) {
			return;
		}
		search.current++;
		loading.value = 1;
		getDataList();
	}

	// 查询 form
	const search = reactive({
		current: 1,
		size: 10,
		type: "java",
	})
	// 切换语言
	    const toggleLanguage = () => {
	        store.dispatch('i18n/toggleLanguage');
	    }
	// 切换 Tab
	const changeTab = (e) => {
		loading.value = 0;
		search.type = e.name;
		search.current = 1;
		blogDataList.value = [];
		getDataList();
	}
	// 获取博客分页数据
	const getDataList = async () => {
		const {
			data
		} = await blogApi.getBlogList(search);
		if (data.data.records.length == 0) {
			loading.value = 2;
		}
		blogDataList.value = [...blogDataList.value, ...data.data.records]
		// 停止下拉刷新
		uni.stopPullDownRefresh();
	}
	// 进入到博客详情页面
	const toBlogDetail = (id) => {
		uni.navigateTo({
			url: "/pages/blog/detail?blogId=" + id
		})
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.list-wrap {
		flex-grow: 1;
		position: relative;
	}

	.list-scroll-view {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.scroll-content {
		display: flex;
		flex-direction: column;
		margin-left: 1vw;
		margin-right: 1vw;
	}

	.loading {
		text-align: center;
		font-size: 20rpx;
		margin-top: 20rpx;
		color: #888;
		line-height: 2em;
	}
</style>