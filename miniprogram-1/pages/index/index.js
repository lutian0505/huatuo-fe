//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    workLocationArray: ['广州太古汇一座', '广州太古汇二座', '广州江湾WeWork', '广州壬丰大厦', '广州琶洲', '西安'],
    currentLocationArray: ['北京','上海','广州','深圳'],
    motto: 'Hello World',
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    staffid: '',
    staffidAgain: '',
    name: '',
    phone: '', 
    workLocationIndex: '',
    currentLocationIndex: '',
    emergentContactName: '',
    emergentContactPhone: '',
    list: [
      {
        id: 'report',
        name: '举报/自我上报疫情',
        open: false,
        url: '../report/report'
      },
      {
        id: 'vpn',
        name: '上报V.P.N问题',
        open: false,
        url: '../report/report'
      },
      {
        id: 'help',
        name: '请求援助',
        open: false,
        url: '../report/report'
      },
      {
        id: 'call',
        name: '紧急热线',
        open: false,
        url: '../report/report'
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
  onLoad: function () {
    console.info("staffid: " + app.globalData.staffid);
    if (app.globalData.loginSuccess){
      this.setData({
        loginSuccess: true
      })
    }else{
      this.setData({
        loginSuccess: false
      })
    }
  },
  getStaffid: function (e) {
    var that = this
    var val = e.detail.value;
    app.globalData.staffid = val;
    that.setData({
      staffid: val
    });
  },
  getStaffidAgain: function (e) {
    var that = this
    var val = e.detail.value;
    that.setData({
      staffidAgain: val
    });
  },
  getName: function (e) {
    var that = this
    var val = e.detail.value;
    that.setData({
      name: val
    });
  },
  getPhone: function (e) {
    var that = this
    var val = e.detail.value;
    that.setData({
      phone: val
    });
  },
  workLocationChange: function (e) {
    this.setData({
      workLocationIndex: e.detail.value
    })
  },
  currentLocationChange: function (e) {
    this.setData({
      currentLocationIndex: e.detail.value
    })
  },
  getEmergentContactName: function (e) {
    var that = this
    var val = e.detail.value;
    that.setData({
      emergentContactName: val
    });
  },
  getEmergentContactPhone: function (e) {
    var that = this
    var val = e.detail.value;
    that.setData({
      emergentContactPhone: val
    });
  },
  binding: function (e) {
    console.info('binding');
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    console.info(this.data.staffid, this.data.staffidAgain, this.data.name, this.data.phone, this.data.workLocationIndex, this.data.currentLocationIndex, this.data.emergentContactName, this.data.emergentContactPhone);
    app.bindWithAccessKey(app.globalData.accessKey, this.data.staffid, this.data.staffidAgain, this.data.name, this.data.phone, this.data.workLocationArray[this.data.workLocationIndex], this.data.currentLocationArray[this.data.currentLocationIndex], this.data.emergentContactName, this.data.emergentContactPhone, true);
    this.setData({
      loginSuccess: app.globalData.loginSuccess
    })
  }
})
