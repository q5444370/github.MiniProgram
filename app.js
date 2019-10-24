//注册一个小程序
//app.js
App({
  //小程序初始化完成时,此函数只执行一次
  onLaunch: function() {
    //获取用户信息
    wx.getUserInfo({
      success: function(res) {
        console.log(res);
      }
    })
  },
  //小程序显示出来时候
  onShow(options) {
    console.log(options)
    console.log("--------")
    console.log(options.scene)


    //获取用户信息,将用户信息传递给服务器

  },
  //小程序隐藏时
  onHide() {

  },
  //小程序产生一些错误时候
  onError(msg) {

  },
  //定义全局数据
  globalData: {
    name: 'coderwhy',
    age: 18
  }
})