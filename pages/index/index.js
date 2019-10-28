//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    ccc: 50,
    age: 20,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 60
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    console.log("-----")
    console.log(app.globalData.userInfo)
    console.log(this.data.nowTime)
    //定时器
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    })
  },
  handColor() {
    let that = this;
    console.log("这是一个点击事件")
    console.log(this.data.isActive)
    that.setData({
      isActive: !that.data.isActive

    })
  },
  //切换显示
  handShow() {
    let that = this;
    that.setData({
      isShow: !that.data.isShow
    })
  },
  //分数递增6分
  handIeIncrement() {
    this.setData({
      score: this.data.score + 6
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //保留小数点后两位的写法
  numberToFixd(value) {
    return value.toFixed(2)
  }
})