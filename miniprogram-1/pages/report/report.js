const app = getApp()

Page({
  data: {
    focus: false,
    sexArray: ['男', '女'],
    sexIndex: '',
    brithday: '',
    items: [
      { name: 'USA', value: '未返穗本地常住居民' },
      { name: 'CHN', value: '持续在穗人员'},
      { name: 'BRA', value: '一月初来穗人员' },
      { name: 'JPN', value: '一月中返穗居民' },
      { name: 'ENG', value: '居家医学观察人员' }
    ],
    inputValue: ''
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail)
    this.setData({
      sexIndex: e.detail.value
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      brithday: e.detail.value
    })
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  switch1Change: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  }
})
