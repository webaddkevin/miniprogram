<script>
export default {
  created () {
    wx.getSystemInfo({
      success: res => {
        const navHeight = res.model.indexOf('iPhone') === -1 ? (res.statusBarHeight * 2 + 106) : (res.statusBarHeight * 2 + 88)
        const barHeight = res.statusBarHeight * 2
        wx.setStorageSync('systemInfo', {
          ...res,
          barHeight,
          navHeight
        })
      }
    })
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style style='less'>
@import '../static/font/iconfont.less';
@import 'style/base.less';
@import 'style/ripples.min.less';
</style>
