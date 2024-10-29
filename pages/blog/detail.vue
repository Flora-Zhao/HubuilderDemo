<template>
	<view class="centent">
		<!-- 博客详情 -->
		<view class="blog_title">
			<h3>{{blogInfo.title}}</h3>
		</view>
		<view>
			<uv-row customStyle="padding: 10px">
				<uv-col span="2">
					<uv-image src="https://picsum.photos/seed/picsum/300/300" width="50px" height="50px"></uv-image>
				</uv-col>
				<uv-col span="10">
					<p style="margin-bottom:5px">作者：{{blogInfo.username}}</p>
					<uv-text type="info" :text="timeFormat(blogInfo.createTime,'yyyy-mm-dd hh:MM:ss')"></uv-text>
				</uv-col>
			</uv-row>
		</view>
		<uv-line></uv-line>
		<view style="padding: 10px">
			<uv-parse :content="blogInfo.content"></uv-parse>
		</view>
	</view>
</template>

<script setup>
	// 引入 uniapp 相关库
	import {
		onLoad
	} from "@dcloudio/uni-app"
	// 引入 uv-ui 格式化时间的 js 库
	import {
		timeFormat
	} from '@climblee/uv-ui/libs/function/index.js';
	// 引入 API
	import blogApi from "@/api/blog/blog.js"
	// 引入 Vue 相关库
	import {
		reactive
	} from "vue";
	// 页面初始化生命周期函数
	onLoad((option) => {
		blogInfo.id = option.blogId;
		getBlogDetail();
	})
	// blogInfo form
	const blogInfo = reactive({
		id: "",
		title: "",
		type: "",
		content: "",
		createTime: ""
	})
	// 获取博客详情数据
	const getBlogDetail = async () => {
		const {
			data
		} = await blogApi.getBlogInfo(blogInfo.id);
		Object.assign(blogInfo, data.data);
	}
</script>

<style lang="scss" scoped>
	.blog_title {
		padding: 10px;
	}
</style>