// components/tab-control/tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hendleItemClick(event) {
      console.log("11")
      const index = event.currentTarget.dataset.index;
      console.log(index);
      this.setData({
        currentIndex: index
      })
      //通过页面内部的点击事件
      this.triggerEvent("itemClick", {index})
    }


  }
})