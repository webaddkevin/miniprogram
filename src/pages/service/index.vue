<template>
  <view class="container">
    <navigition :isTabBar='isTabBar' text='服务'></navigition>
    <view>服务</view>
  </view>
</template>

<script>
import Navigition from '@/components/navigation'
export default {
  data () {
    return {
      isTabBar: false
    }
  },
  components: {
    Navigition
  }
}
</script>

<style lang = 'less' scoped>

</style>