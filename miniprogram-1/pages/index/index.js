//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    workLocationArray: ['Guangzhou Taikoo Hui Tower 1', 'Guangzhou Taikoo Hui Tower 2', 'Guangzhou Jiang Wan WeWork', 'Guangzhou Renfeng Building', 'Guangzhou Pazhou', 'Guangzhou Machang', 'Xi\'an'],
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
    emergentContactPhone: ''
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
    console.info("wechatIds: " + app.globalData.wechatIds);
    console.info(this.staffid, this.staffidAgain, this.name, this.phone, this.workLocation, this.currentCity, this.emergentContactName, this.emergentContactPhone);
    app.bindWithAccessKey(app.globalData.accessKey, true);
    this.setData({
      loginSuccess: app.globalData.loginSuccess
    })
  }
})
