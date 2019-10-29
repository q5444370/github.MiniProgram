// components/my_enent/my_enent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleIncement() {
      //发射一个事件（increment代表一个事件，用于对象的绑定）
      this.triggerEvent("increment", {}, {})
    }
  }
})