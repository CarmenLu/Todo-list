const app = getApp();

Page({
  data: {
    array: ['生活', '工作', '学习', '其他', ''],
    index: 0,
    taskname: null,
    taskcontent: null,
    num: 0,
    dataList: {}
  },
  onLoad: function () {
    this.data.dataList = app.globalData.dataList;
    this.data.num = this.data.dataList.num;
    console.log(this.data.num);
    console.log(this.data.dataList);
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  taskname: function (e) {
    console.log(e.detail.value)
    this.setData({
      taskname: e.detail.value
    })
  },//获取任务名称
  taskcontent: function (e) {
    console.log(e.detail.value)
    this.setData({
      taskcontent: e.detail.value
    })
  },//获取任务内容
  tasksummit: function (e) {
    if (this.data.taskname == null)//当必填项为空
    {
      wx.showModal({
        title: '',
        content: '任务名不能为空',
        confirmText: '确认',
        cancelText: '取消'
      });
    }
    else {
      //将数据储存为一个对象
      var Task = {
        "taskname": this.data.taskname,
        "taskcontent": this.data.taskcontent,
        "condition": 1,
        "label": this.data.array[this.data.index],
        "keyname": "task" + this.data.num
      };
      console.log(Task);
      console.log(index);
      var index=Task.keyname;
      
      //记录下标
      //console.log(index);
      this.data.dataList[index]=Task;//记录元素
      //console.log(this.data.dataList[index]);
      this.data.num++;//num自加
      //console.log(this.data.num);
      this.data.dataList.num=this.data.num;//同步num
      //console.log(this.data.dataList.num);
      app.globalData.dataList=this.data.dataList;//同datalist
      /*console.log(this.data.dataList);
      console.log(app.globalData.dataList);*/
      wx.showToast({
          title: '已提交',
          icon: 'success',
          duration: 3000
        });
      wx.navigateBack({
        delta: 1
      })
      }


 }
  }
);