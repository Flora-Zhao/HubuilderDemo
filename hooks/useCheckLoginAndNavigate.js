export function useCheckLoginAndNavigate() {
	// 验证用户是否登录
	const checkLogin = (navigateUrl) => {
		const user = uni.getStorageSync("userInfo")||1;
		if (!user) {
			uni.reLaunch({
				url: "/pages/login/login"
			})
		} else {
			uni.navigateTo({
				url: navigateUrl
			})
		}
	}

	return {
		checkLogin
	}
}