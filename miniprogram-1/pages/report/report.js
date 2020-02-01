const app = getApp()

Page({
  data: {
    focus: false,
    reportOther: '',
    otherStaffId: '',
    checkboxSymptoms: [],
    located: '',
    circumstanceStatusCode: '',
    startDate: '',
    emergencySupportStatus: '',
    emergencySupportContent: '',
    wfhContent: '',
    wfhStatus: '',
    submited: false,
    items: [
      { name: '0', value: '我自己 Myself' },
      { name: '1', value: '其他同事 Another colleague' }
    ],
    circumstances: [
      { name: '0', value: '由医疗机构或者疾控部门告知的确诊病毒性肺炎案例 Confirmed viral pneumonia as advised by hospital/authority' },
      { name: '1', value: '由医疗机构或者疾控部门告知的疑似病毒性肺炎案例 Suspected viral pneumonia as advised by hospital/authority' },
      { name: '2', value: '由医疗机构或者疾控部门告知的密切接触 Close contact as advised by hospital/authority' },
      { name: '3', value: '有发烧但不是肺炎 Fever but not pneumonia' },
      { name: '4', value: '没有发烧，但有其它身体不适的情况（请提供具体的症状）Not fever but feel uncomfortable (please provide the detail of symptoms)' },
      { name: '5', value: '居住楼或小区被有关部门限制出入 The building or residential estate lived in is being restricted.' },
    ],
    symptoms: [
      { name: '0', value: '发热 Fever' },
      { name: '1', value: '干咳 Cough' },
      { name: '2', value: '乏力 Malaise' },
      { name: '3', value: '腹泻 diarrhea' },
      { name: '4', value: '感冒 Flu-like' },
      { name: '5', value: '头疼头晕 Headache and dizziness' },
      { name: '6', value: '其它 Others' }
    ],
    supports: [
      {
        name: '0', value: '需要提供紧急支持 (请提供联系方式及需要支持的内容）Yes, need the emergency support(please provide the contact number and what kind of support is required)'
      },
      { name: '1', value: '不需要提供紧急支持 (No need for emergency support)' }
    ],
    remotelys: [
      { name: '0', value: '可以远程工作 Yes, can work from home' },
      {
        name: '1', value: '无法远程工作(请提供具体原因）No,cannot work from home(please describe your current status)'
      }
    ],
    inputValue: ''
  },
  bindKeyInput: function (e) {
    this.setData({
      otherStaffId: e.detail.value
    })
  },
  radioReportOtherChange: function (e) {
    this.setData({
      reportOther: e.detail.value,
      otherStaffId: ''
    })
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  radioCircumstanceStatusCode: function (e) {
    this.setData({
      circumstanceStatusCode: e.detail.value,
      checkboxSymptoms: ''
    })
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  checkboxSymptomsChange: function (e) {
    this.setData({
      checkboxSymptoms: e.detail.value
    })
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  bindLocated: function (e) {
    this.setData({
      located: e.detail.value
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      startDate: e.detail.value
    })
  },
  radioEmergencySupportChange: function (e) {
    console.log('radio Emergency发送选择改变，携带值为', e.detail)
    this.setData({
      emergencySupportStatus: e.detail.value,
      emergencySupportContent: ''
    })
  },
  radioWFHChange: function (e) {
    this.setData({
      wfhStatus: e.detail.value,
      wfhContent: ''
    })
    console.log('radio WFH发生change事件，携带value值为：', e.detail.value)
  },
  bindEmergencySupportContent: function (e) {
    this.setData({
      emergencySupportContent: e.detail.value
    })
  },
  bindWfhContent: function (e) {
    this.setData({
      wfhContent: e.detail.value
    })
  },
  submit: function () {
    this.setData({
      submited: true
    })
    console.log('submit');
  }
})
