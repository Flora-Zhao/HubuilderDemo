<template>
	<view>
		<view>
			<uv-navbar :fixed="false" @leftClick="leftClick" bgColor="#f8f8f8" :title="title"></uv-navbar>
		</view>
		<view>
			<uv-form class="blog_form" labelPosition="left" :model="blogForm" :rules="blogFormRule" ref="blogFormRef">
				<uv-form-item label="标题:" prop="title">
					<uv-input placeholder="请输入标题" clearable v-model="blogForm.title"></uv-input>
				</uv-form-item>
				<uv-form-item label="类别:" prop="type" @click="showTypes">
					<uv-input border="surround" v-model="blogForm.type" suffixIcon="arrow-right" disabled
						disabledColor="#ffffff" placeholder="请选择类别">
					</uv-input>
				</uv-form-item>
				<uv-form-item label="内容:" prop="content">
					<uv-textarea autoHeight v-model="blogForm.content" placeholder="请输入内容"></uv-textarea>
				</uv-form-item>
				<uv-button type="primary" text="提交" customStyle="margin-top: 10px;background-color:#5c89fe;border:none;"
					@click="saveBlog"></uv-button>
			</uv-form>
		</view>
		<!-- 选择类别 -->
		<uv-action-sheet ref="blogTypeRef" :actions="typeList" title="请选择技术类别" @select="selectType">
		</uv-action-sheet>
		<!--toast  -->
		<uv-toast ref="toast"></uv-toast>
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
		onLoad
	} from "@dcloudio/uni-app"
	// 引入 API
	import blogApi from "@/api/blog/blog.js"
	// 页面初始化生命周期函数
	onLoad((option) => {
		// 获取跳转页面携带的参数
		if (option.id) {
			title.value = "编辑博客";
			blogForm.id = option.id;
			// 获取博客详情信息
			getBlogDetail();
		}
		// 获取缓存中的用户数据
		const userInfo = JSON.parse(uni.getStorageSync("userInfo"));
		blogForm.userId = userInfo.id;
	})
	// toast 组件
	const toast = ref(null);
	// 当前页面默认导航栏标题
	const title = ref("新增博客");
	// 博客类别
	const typeList = ref([{
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
	// 保存博客的 form
	const blogForm = reactive({
		id: "",
		title: "",
		type: "",
		userId: "",
		content: ""
	})
	// 保存 form 的 rule
	const blogFormRule = reactive({
		title: [{
			type: 'string',
			required: true,
			message: "标题不能为空",
			trigger: "blur"
		}],
		type: [{
			type: 'string',
			required: true,
			message: "类别不能为空",
			trigger: "change"
		}],
		content: [{
			type: 'string',
			required: true,
			message: "内容不能为空",
			trigger: "blur"
		}],
	});
	// 返回操作
	const leftClick = () => {
		uni.navigateBack();
	}
	// 博客类别 ref
	const blogTypeRef = ref(null);
	// 打开 uv-action-sheet
	const showTypes = () => {
		blogTypeRef.value.open();
	}
	// 选择类别
	const selectType = (e) => {
		blogForm.type = e.name;
	}
	// 获取博客详情
	const getBlogDetail = async () => {
		const {
			data
		} = await blogApi.getBlogInfo(blogForm.id);
		Object.assign(blogForm, data.data);
	}
	// 保存博客
	const blogFormRef = ref();
	const saveBlog = () => {
		blogFormRef.value.validate().then(async () => {
			const {
				data
			} = await blogApi.saveBlog(blogForm);
			if (data.code == 200) {
				uni.showToast({
					title: '保存成功！',
				});
				uni.navigateTo({
					url: "/pages/blog/list"
				})
			} else {
				uni.showToast({
					title: data.message,
				});
			}
		}).catch(errors => {
			toast.value.show({
				message: "数据校验失败",
				type: "error",
				position: "center"
			})
		})
	}
</script>

<style lang="scss" scoped>
	.blog_form {
		padding: 20rpx 50rpx;
	}
</style>