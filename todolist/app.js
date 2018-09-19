//app.js
App({

  onLaunch: function () {

  },

  onShow() {
    let that = this;
    wx.getStorage({
      key: 'key',
      success: function (res) {
        console.log("success")
        console.log(res.data)
        that.globalData.dataList = res.data;//同步数据
        if (that.globalData.dataList.num == null) {
          that.globalData.dataList.num = 0;
        }
        console.log(that.globalData.dataList);
        // 异步接口在success回调才能拿到返回值
        // this.globalData.dataList = res.data
        //this.num = this.globalData.dataList.num
      },
      fail: function () {
        console.log('读取key发生错误')
      }
    })
  },

  onHide() {
    wx.setStorage({
      key: "key",
      data: this.globalData.dataList,
      success: function () {
        console.log('写入成功')
      },
      fail: function () {
        console.log('写入错误')
      }
    })
  },
  globalData: {
    userInfo: null,
    dataList:{num:0 }
  }
})