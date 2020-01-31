//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    staffid: ''
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
  binding: function(e) {
    console.info('binding');
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    console.info("wechatIds: " + app.globalData.wechatIds);
    app.bindWithUnionid(app.globalData.wechatIds, true);
    this.setData({
      loginSuccess: app.globalData.loginSuccess
    })
  },
  getStaffid: function (e) {
    var that = this
    var val = e.detail.value;
    app.globalData.staffid = val;
    that.setData({
      staffid: val
    });
  }
})
