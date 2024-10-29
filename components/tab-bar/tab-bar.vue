<template>
	<view>
		<!-- 底部导航栏 -->
		<uv-tabbar :value="itemValue" activeColor="black">
			<uv-tabbar-item text="首页" @click="toIndex" icon="home"></uv-tabbar-item>
			<uv-tabbar-item iconSize="40" @click="toAddBlog" icon="plus-circle"></uv-tabbar-item>
			<uv-tabbar-item text="我的" @click="toUserCenter" icon="account"></uv-tabbar-item>
		</uv-tabbar>
	</view>
</template>

<script setup>
	// 校验登录并跳转的 hooks
	import {
		useCheckLoginAndNavigate
	} from '@/hooks/useCheckLoginAndNavigate';
	const {
		checkLogin
	} = useCheckLoginAndNavigate();
	// 引入 vue 相关库
	import {
		ref
	} from 'vue';
	// props 接收父组件传递的参数
	const props = defineProps(["itemValue"])
	// 首页博客列表页面
	const toIndex = () => {
		uni.navigateTo({
			url: "/pages/blog/list"
		})
	}
	// 进入新增博客页面
	const toAddBlog = () => {
		checkLogin("/pages/blog/add");
	}
	// 进入个人中心页面
	const toUserCenter = () => {
		checkLogin("/pages/user/user");
	}
</script>

<style lang="scss" scoped>
	::v-deep .uvicon-plus-circle {
		color: #5c89fe !important;
	}
</style>