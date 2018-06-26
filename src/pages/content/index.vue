<template>
  <view class="container">
    <navigition :isTabBar='isTabBar' text='内容'></navigition>
    <view>内容</view>
  </view>
</template>

<script>
import Navigition from '@/components/navigation'
import globalMixin from '@/mixin/index'
export default {
  mixins: [globalMixin],
  data () {
    return {
      isTabBar: false
    }
  },
  components: {
    Navigition
  },
  onLoad () {
    this.youLogin()
  }
}
</script>

<style lang = 'less' scoped>

</style>
