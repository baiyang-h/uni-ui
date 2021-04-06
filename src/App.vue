<script>
	export default {
    globalData: {
      aaa: '这里可以写一些全局属性'
    },
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
/*每个页面公共css */
@import './u-ui/index.scss';
/*改变组件内部的样式文件*/
@import './styles/uni-custom.scss';
</style>