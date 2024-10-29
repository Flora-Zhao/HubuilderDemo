<template>
	<view>
		<uv-navbar leftIcon="" :fixed="false" bgColor="#f8f8f8" title="个人中心"></uv-navbar>
		<view style="padding: 10px;">
			<uv-row>
				<uv-col span="2">
					<uv-image src="/static/images/zhi.png" width="50px" height="50px"></uv-image>
				</uv-col>
				<uv-col span="10">
					<p style="margin-bottom:5px">{{userInfo.name}}</p>
					<uv-text type="info" customStyle="font-size:12px" :text="'编号：'+userInfo.code"></uv-text>
				</uv-col>
			</uv-row>
		</view>
		<view>
			<uv-cell-group>
				<uv-cell title="我的博客" @click="myBlog"><template v-slot:right-icon>
						<uv-icon size="30rpx" name="arrow-right"></uv-icon>
					</template></uv-cell>
				<uv-cell title="退出登录" @click="logout"><template v-slot:right-icon>
						<uv-icon size="30rpx" name="arrow-right"></uv-icon>
					</template></uv-cell>
			</uv-cell-group>
		</view>
		<view class="zhifou">
			<uv-image src="/static/images/zhifou.jpg" width="200px" height="200px"></uv-image>
			<h3>知否技术</h3>
			<p style="margin-top: 10px;">扫描二维码，关注我的公众号</p>
		</view>
		<!-- 底部导航栏 -->
		<tab-bar :itemValue="2"></tab-bar>
	</view>
</template>

<script setup>
	// 引入 uniapp 相关库
	import {
		onLoad
	} from "@dcloudio/uni-app"
	// 引入 Vue 相关库
	import {
		reactive
	} from "vue";
	// 用户信息
	let userInfo = reactive({
		name: "",
		code: ""
	})
	// 页面初始化生命周期函数
	onLoad(() => {
		userInfo = JSON.parse(uni.getStorageSync("userInfo"));
	})
	// 我的博客
	const myBlog = () => {
		uni.redirectTo({
			url: "/pages/user/my-blog"
		})
	}
	// 退出
	const logout = () => {
		// 清除缓存
		uni.clearStorageSync();
		uni.removeStorageSync("userInfo")
		// 退出
		uni.reLaunch({
			url: "/pages/login/login"
		})
	}
</script>

<style lang="scss" scoped>
	.zhifou {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		margin-top: 20px
	}
</style>