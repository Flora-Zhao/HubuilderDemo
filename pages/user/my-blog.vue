<template>
	<view class="content">
		<view class="navbar">
			<uv-navbar :fixed="false" bgColor="#f8f8f8" @leftClick="returnBack" title="我的博客"></uv-navbar>
		</view>
		<view class="head">
			<!-- Tabs 标签选项卡 -->
			<uv-tabs @change="changeTab" class="uv-border-bottom" :scrollable="false" :list="tabList"
				@click="click"></uv-tabs>
		</view>
		<!-- 内容 -->
		<view class="list-wrap">
			<scroll-view scroll-y="true" @scrolltolower="scrolltolower" class="list-scroll-view">
				<view class="scroll-content" v-if="blogDataList && blogDataList.length>0">
					<uni-card class="blog-content" v-for="(item,index) in blogDataList" :key="index"
						@click="toBlogDetail(item.id)" :title="item.title" :is-shadow="false"
						:extra="timeFormat(item.createTime)">
						<uv-row customStyle="margin-bottom:2px">
							<uv-col span="3">
								<uv-image src="https://picsum.photos/seed/picsum/300/300" width="50px"
									height="50px"></uv-image>
							</uv-col>
							<uv-col span="9">
								<text class="uv-line-2">{{item.content}}</text>
								<view class="blog_operate">
									<uv-tags text="编辑" @click="toUpdate(item.id)" plain size="mini"
										type="warning"></uv-tags>
									<uv-tags text="删除" @click="openDeleteModal(item.id)" style="margin-left: 10px;"
										plain size="mini" type="error"></uv-tags>
								</view>
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
			<uv-modal ref="deleteModal" :showCancelButton="true" title="确认删除该博客吗？" @cancel="cancelDelete"
				@confirm="deleteBlog"></uv-modal>
		</view>
	</view>
</template>

<script setup>
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
	import {
		timeFormat
	} from '@climblee/uv-ui/libs/function/index.js';
	// 引入 API
	import blogApi from "@/api/blog/blog.js"
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
		const userInfo = JSON.parse(uni.getStorageSync("userInfo"));
		search.userId = userInfo.id;
		getDataList();
	})
	// 下拉刷新
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
	// 博客数据
	const blogDataList = ref([]);
	//  0 - 默认，1 - 正在加载数据中，2 - 真的没有数据了
	const loading = ref(0);
	const search = reactive({
		current: 1,
		size: 10,
		type: "java",
		userId: ""
	})
	// 切换 Tab
	const changeTab = (e) => {
		loading.value = 0;
		search.type = e.name;
		search.current = 1;
		blogDataList.value = [];
		getDataList();
	}
	// 获取博客分页列表信息
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
	// 返回
	const returnBack = () => {
		uni.navigateTo({
			url: "/pages/user/user"
		})
	}
	// 编辑博客
	const toUpdate = (id) => {
		uni.navigateTo({
			url: "/pages/blog/add?id=" + id
		})
	}
	const deleteModal = ref(null);
	// 打开删除博客弹框
	const blogId = ref("");
	const openDeleteModal = (id) => {
		deleteModal.value.open();
		blogId.value = id;
	}
	// 取消删除
	const cancelDelete = () => {
		deleteModal.value.close();
		blogId.value = "";
	}
	// 删除博客操作
	const deleteBlog = async () => {
		const {
			data
		} = await blogApi.delBlog(blogId.value);
		console.log("data:", data)
		if (data.code === 200) {
			uni.showToast({
				title: "删除成功"
			})
			loading.value = 0;
			blogDataList.value = [];
			getDataList();
		} else {
			uni.showToast({
				title: data.message
			})
		}
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

	.blog_operate {
		display: flex;
		justify-content: flex-end;
		margin-top: 10px;
	}
</style>