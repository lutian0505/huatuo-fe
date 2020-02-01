//app.js
App({
  loginWithCode: function (code, isDummy) {
    //TODO: get staff id
    if (isDummy){
      this.globalData.loginSuccess=true;
      this.globalData.accessKey='1232';
    }else{
      console.info('call backend to check whether has bind');
      wx.request({
        url: 'test.php', //仅为示例，并非真实的接口地址
        data: {
          code: code
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          console.info('login success');
          console.log(res.data);
          //if then true
          this.globalData.loginSuccess = true;
          this.globalData.accessKey = '1232';
        },
        fail(res){
          console.info('login error');
        }
      });
    }
  },
  bindWithAccessKey: function (accessKey, staffid, staffidAgain, name, phone, workLocation, currentLocation, emergentContactName, emergentContactPhone, isDummy) {

    console.info(accessKey, staffid, staffidAgain, name, phone, workLocation, currentLocation, emergentContactName, emergentContactPhone);
    if (isDummy) {
      this.globalData.loginSuccess = true;
    } else {
      console.info('call backend to bind');
      wx.request({
        url: 'test.php', //仅为示例，并非真实的接口地址
        data: {
          code: code
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          console.info('login success');
          console.log(res.data);
          //if then true
          this.globalData.loginSuccess = true;
        },
        fail(res) {
          console.info('login error');
        }
      });
    }
  },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录, everytime open will call
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res.code);
        this.loginWithCode(res.code, false);
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    staffid: null,
    accessKey: null,
    loginSuccess: false
  }
})