var base64 = require("images/base64");
var util = require('../../utils/util.js');
const app = getApp();
Page({
   data: {
    showOrHidden: true,
    dataList:{}
  },
   onLoad: function(){
    var time = util.formatTime(new Date());
    this.setData({
      icon: base64.icon20,
      time:time,
      dataList:app.globalData.dataList, 
    });
     console.log(this.data.dataList);
     // 再通过setData更改Page()里面的data，动态更新页面的数据
  },
  onShow: function () {
    this.setData({
      icon: base64.icon20,
      dataList: app.globalData.dataList,
    });
    console.log(this.data.dataList);},

   btn:function(){
    var that = this;
    that.setData({
      showOrHidden: (!that.data.showOrHidden)
    })
  }
  
});

