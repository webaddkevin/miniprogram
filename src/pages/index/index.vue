<template>
  <view class="container">
    <navigition :isTabBar='isTabBar' text='首页'></navigition>
    <view class="userinfo">
      <view :animation="animationData" class="userinfo-avatar">
        <open-data type="userAvatarUrl"></open-data>
      </view>
      <view class="userinfo-nickname">
        <open-data type="userNickName"></open-data>
      </view>
    </view>
  </view>
</template>

<script>
import Navigition from '@/components/navigation'
export default {
  data () {
    return {
      isTabBar: false,
      animationData: {}
    }
  },

  components: {
    Navigition
  },

  methods: {},

  created () {
    var animation = wx.createAnimation({
      duration: 1500,
      timingFunction: 'ease'
    })
    setInterval(() => {
      animation.scale(1, 1).step()
      animation.scale(1.2, 1.2).step()
      this.animationData = animation.export()
    }, 1000)
  }
}
</script>

<style lang = 'less' scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  .userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    overflow: hidden;
    box-shadow: #dadada 0rpx 0rpx 24rpx 6rpx;
    border-radius: 50%;
  }
  .userinfo-nickname {
    color: #aaa;
  }
}
</style>
