import Vue from 'vue'
import App from './app'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 对应小程序的 app.json 配置文件
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/index/main',
      'pages/about/main',
      'pages/service/main',
      'pages/content/main'
    ],
    window: {
      navigationStyle: 'custom'
    },
    tabBar: {
      color: '#515151',
      selectedColor: '#1296db',
      backgroundColor: '#ffffff',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/index/main',
          text: '首页',
          iconPath: 'static/image/index-default.png',
          selectedIconPath: 'static/image/index-selected.png'
        },
        {
          pagePath: 'pages/content/main',
          text: '内容',
          iconPath: 'static/image/content-default.png',
          selectedIconPath: 'static/image/content-selected.png'
        },
        {
          pagePath: 'pages/service/main',
          text: '服务',
          iconPath: 'static/image/service-default.png',
          selectedIconPath: 'static/image/service-selected.png'
        },
        {
          pagePath: 'pages/about/main',
          text: '关于',
          iconPath: 'static/image/about-default.png',
          selectedIconPath: 'static/image/about-selected.png'
        }
      ]
    }
  }
}
