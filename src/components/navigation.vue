<template>
  <view :style="{'height':navHeight+'rpx', 'padding-top':barHeight+'rpx', 'color': textColor, 'background-color':bgColor}" id='navigation'>
    <view class='iconfont icon-bar-return' v-if='isTabBar'  @tap.stop='goBack'></view>
    <view v-else></view>
    <text>{{text}}</text>
    <view></view>
  </view>
</template>

<script>
export default {
  name: 'navigation',
  props: {
    text: {
      default: '欢迎光临',
      type: String
    },
    textColor: {
      default: '#333',
      type: String
    },
    isTabBar: {
      default: true,
      type: Boolean
    },
    bgColor: {
      default: '#ececec',
      type: String
    }
  },
  data () {
    return {
      barHeight: 0,
      navHeight: 0
    }
  },
  created () {
    const { barHeight, navHeight } = wx.getStorageSync('systemInfo')
    this.barHeight = barHeight
    this.navHeight = navHeight
  },
  methods: {
    goBack () {
      wx.navigateBack()
    }
  }
}
</script>

<style lang = 'less' scoped>
  #navigation{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    text-align: center;
    & > view{
      height: 100%;
      display: flex;
      align-items: center;
      flex: 1 0;
      &:first-child {
        text-align: left;
        padding-left: 30rpx;
        box-sizing: border-box;
       
      }
      &:last-child{
        padding-right: 30rpx;
      }
    }
    & > text {
      flex: 2 0;
    }
  }
</style>
