//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showview:true,
    Keyname: "",
    Taskname: "",
    Taskcontent: " ",
    Label: "",
    Condition: "",
  },
  onLoad: function (options) {
      console.log(options);
      var that=this;
      that.data.dataList=app.globalData.dataList;
      console.log(that.data.dataList);
      that.data.Keyname=options.keyname;
      console.log(that.data.Keyname);
      this.setData({
        Taskname: that.data.dataList[that.data.Keyname].taskname,Taskcontent: that.data.dataList[that.data.Keyname].taskcontent,
Label: that.data.dataList[that.data.Keyname].label,
Condition: that.data.dataList[that.data.Keyname].condition
      }),
      console.log(this.data.Taskname);},
  finishTask : function (e) {
      this.data.dataList[this.data.Keyname].condition=2;
      app.globalData.dataList=this.data.dataList;
      wx.navigateBack({
      delta: 1
    })
    },
  deleteTask : function (e) {
    var that=this;
    wx.showModal({
      title: '',
      content: '确定要删除吗？',
      confirmText: '确认',
      confirmColor:'#FF0000',
      cancelText: '取消',
      success: function (res) {
        if (res.confirm) {
          delete that.data.dataList[that.data.Keyname];
          app.globalData.dataList=that.data.dataList;
          wx.navigateBack({
            delta: 1})}
        else {};
        } 
    })
    }
    


  })
