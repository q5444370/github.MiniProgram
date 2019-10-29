//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    titles: ["衣服", "裤子", "鞋子"],
    count: 0,
    active: true
  },
  //点击事件
  hendleBtnClick() {
    console.log("按钮发生点击")
  },
  //手指开始触摸
  startClick(d) {
    console.log("开始触摸按钮")
    console.log(d)
    console.log("1111111")
  },
  moveClick() {
    console.log("手指触摸后移动")
  },
  endClick(c) {
    console.log(c)
    console.log("手指触摸动作结束")
  },
  //手指触摸后超过30秒
  longpressClick() {
    console.log("手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发")
  },
  //手指监听点击 
  handleEventClick(event) {
    console.log(event)
  },
  handaaClick(event) {
    console.log(event)
    const dataset = event.currentTarget.dataset;
    let title = dataset.item;
    let index = dataset.index;
    console.log(title, index);
  },
  handCaptureView1() {
    console.log("handCaptureView1")
  },
  handleBindView1() {
    console.log("handleBindView1");
  },
  handCaptureView2() {
    console.log("handCaptureView2")
  },
  handleBindView2() {
    console.log("handleBindView2");
  },
  handCaptureView3() {
    console.log("handCaptureView3")
  },
  handleBindView3() {
    console.log("handleBindView3");
  },
  //组件与对象之间建立的联系
  handleIncrement() {
    console.log("-----")
    this.setData({
      count: this.data.count + 1
    })
  },
  hand() {
    this.setData({
      active: !this.data.active
    })
  },
  handleTabClick(event) {
    console.log(event)
  },
  handleCpn() {
    //修改my-sel中的count
    const my_sel = this.selectComponent("#sel-id")
    console.log(my_sel)
    //这种做法，一般不推荐
    my_sel.setData({
      count: my_sel.data.count + 20
    })
    //通过方法对数据进行修改
    my_sel.inccementCounter(10)
  }
})