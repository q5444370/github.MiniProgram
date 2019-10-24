//logs.js
const util = require('../../utils/util.js')
//获取App()产生的实例对象
const app = getApp();
console.log("ppppp")
console.log(app.globalData.name)
//注册一个页面
//页面也有自己的生命周期
Page({
  data: {
    logs: [],
    aaa: 1,
    list: []

  },
  onLoad: function() {
    const that = this;
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: function(res) {
        console.log(res)
        console.log("======")
        console.log(res.errMsg)
        const data = res.data;
        console.log(">>>>>>>>>>>>>>>>>>>>>")
        console.log(data)
        that.setData({
          list: data
        })
      }
    })

  },
  //监听页面的滚动
  onPageScroll(obj) {
    console.log(obj);
  },
  //监听页面滚动到底部
  onReachBottom() {
    console.log("页面已经滚动到底部")
  },
  //下拉刷新的事件
  onPullDownRefresh() {
    console.log("下拉刷新的事件")
  },
  //获取用户授权
  handGetUserInfo(enent) {

    console.log("sss");
    console.log(enent);
  },
  Click() {
    this.setData({
      aaa: this.data.aaa += 1
    })
  }

})