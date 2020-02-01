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
    emergentContactPhone: '',
    list: [
      {
        id: 'form',
        name: '健康自查上报',
        open: false
      },
      {
        id: 'widget',
        name: '医疗物资捐赠',
        open: false
      },
      {
        id: 'feedback',
        name: '在家工作上报',
        open: false
      },
      {
        id: 'nav',
        name: '更多新闻',
        open: false
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
    app.bindWithAccessKey(app.globalData.accessKey, true);
    this.setData({
      loginSuccess: app.globalData.loginSuccess
    })
  }
})
