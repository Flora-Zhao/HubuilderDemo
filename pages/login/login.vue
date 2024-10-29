<template>
	<view>

		<uv-image class="brand_logo" width="80px" height="80px" :src="logoSrc"></uv-image>
		<p style="text-align: center;color: #82848a;">知否技术博客</p>
		<uv-form class="login_form" labelPosition="left" :model="loginForm" :rules="loginPasswordRule"
			ref="loginFormRef">
			<uv-form-item :borderBottom="false" prop="username" borderBottom>
				<uv-input placeholder="请输入账号" clearable v-model="loginForm.username" prefixIcon="account"
					prefixIconStyle="color: #909399"></uv-input>
			</uv-form-item>
			<uv-form-item :borderBottom="false" prop="password" borderBottom>
				<uv-input placeholder="请输入密码" v-model="loginForm.password" type="password" :password="true"
					prefixIcon="lock" clearable prefixIconStyle="color: #909399"></uv-input>
			</uv-form-item>
			<uv-button type="primary" text="登录" customStyle="margin-top: 10px;background-color:#5c89fe;border:none;"
				@click="login">登录</uv-button>
		</uv-form>
		<uv-toast ref="toast"></uv-toast>
		<view class="footer">
			<p>版权所有 © 知否技术 浙ICP备xxxx号</p>
		</view>
	</view>
</template>

<script setup>
	// 引入登录相关的 API
	import userApi from "@/api/user/user.js"
	// 引入图标
	import logoSrc from "@/static/images/zhi.png"
	// 引入 Vue 相关库
	import {
		ref,
		reactive
	} from 'vue';
	// toast 组件
	const toast = ref(null);
	// 登录 form
	const loginForm = reactive({
		username: "",
		password: ""
	})
	// 校验规则
	const loginPasswordRule = reactive({
		username: [{
			type: 'string',
			required: true,
			message: "账号不能为空",
			trigger: "blur"
		}],
		password: [{
			type: 'string',
			required: true,
			message: "密码不能为空",
			trigger: "blur"
		}]
	});
	const loginFormRef = ref();
	// 用户登录
	const login = () => {
		loginFormRef.value.validate().then(res => {
			userApi.login(loginForm).then((res) => {
				if (res.data.code === 200) {
					// 缓存用户信息
					uni.setStorageSync("userInfo", JSON.stringify(res.data.data
						.userInfo));
					// 缓存 token信息
					uni.setStorageSync("token", res.data.data.token || "123456");
					// 跳转到首页
					uni.navigateTo({
						url: `/pages/blog/list`
					})
				} else {
					toast.value.show({
						message: res.data.message,
						type: "error",
						position: "center"
					})
				}
			}).catch(error => {
				toast.value.show({
					message: error.errMsg,
					type: "error",
					position: "center"
				})
			})
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
	.brand_logo {
		margin: 200rpx auto 30rpx;
	}

	.login_form {
		padding: 20rpx 50rpx;
	}

	.footer {
		font-size: 13px;
		text-align: center;
		color: #b7b7b8;
	}
</style>