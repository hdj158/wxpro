// pages/csym/csym.js
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    movies: [
      { url: '../img/mmexport1531982923941.jpg' },
      { url: '../img/mmexport1531982907149.jpg' },
      { url: '../img/mmexport1531982892557.jpg' },
      { url: '../img/mmexport1532005132713.jpg' }
    ],
    msgList: [
      { url: "../zhisk/zhisk", title: "刷牙的几大好处，你都‘资到’吗？" },
      { url: "../zhisk/zhisk", title: "研究表明儿童不刷牙得龋齿的概率是刷牙的50倍！" },
      { url: "../zhisk/zhisk", title: "电动刷牙对比传统刷牙方式哪个更好？" },
      { url: "../zhisk/zhisk", title: "口腔常见十大疾病你'造'吗？" },
      { url: "../zhisk/zhisk", title: "形成口腔溃疡的5大因素！" }
    ],
    items0: [
      { id: "1", imageUrl: "../img/mmexport1531982923941.jpg", content: "YIKOYO声波电动牙刷", nums: "5", countDownList: null, actEndTime: '2018-7-02 10:00:43', yjiag: "298.00", jiag: "1.00"},
      { id: "2", imageUrl: "../img/mmexport1531982923941.jpg", content: "YIKOYO声波电动牙刷", nums: "5", countDownList: null, actEndTime: '2018-07-22 10:00:43', yjiag: "298.00", jiag: "1.00"},
      { id: "3", imageUrl: "../img/mmexport1531982923941.jpg", content: "YIKOYO声波电动牙刷", nums: "5", countDownList: null, actEndTime: '2018-07-24 10:00:43', yjiag: "298.00", jiag: "1.00"},
      { id: "4", imageUrl: "../img/mmexport1531982923941.jpg", content: "YIKOYO声波电动牙刷", nums: "5", countDownList: null, actEndTime: '2018-07-21 10:00:43', yjiag: "298.00", jiag: "1.00"},
      { id: "5", imageUrl: "../img/mmexport1531982923941.jpg", content: "YIKOYO声波电动牙刷", nums: "5", countDownList: null, actEndTime: '2018-07-25 20:00:43', yjiag: "298.00", jiag: "1.00"},
      { id: "6", imageUrl: "../img/mmexport1531982923941.jpg", content: "YIKOYO声波电动牙刷", nums: "5", countDownList: null, actEndTime: '2018-07-20 19:00:43', yjiag: "298.00", jiag: "1.00"}
    ],
    items1: [
      { id: "1", imageUrl: "../img/mmexport1531982923941.jpg", content: "YIKOYO声波电动牙刷", nums: "PRO智能牙刷",yjiag:"298.00",jiag:"168.00" },
      { id: "2", imageUrl: "../img/mmexport1531982923941.jpg", content: "YIKOYO声波电动牙刷", nums: "G1P美白去渍", yjiag: "298.00", jiag: "168.00" },
      { id: "3", imageUrl: "../img/mmexport1531982923941.jpg", content: "YIKOYO声波电动牙刷", nums: "LOL限量版", yjiag: "298.00", jiag: "168.00" },
      { id: "4", imageUrl: "../img/mmexport1531982923941.jpg", content: "YIKOYO儿童电动牙刷", nums: "星空版", yjiag: "298.00", jiag: "168.00" },
      { id: "5", imageUrl: "../img/mmexport1531982923941.jpg", content: "YIKOYO儿童电动牙刷", nums: "迪士尼版", yjiag: "298.00", jiag: "168.00" },
      { id: "6", imageUrl: "../img/mmexport1531982923941.jpg", content: "YIKOYO声波电动牙刷", nums: "明星同款+小清新", yjiag: "298.00", jiag: "168.00" },
      { id: "7", imageUrl: "../img/mmexport1531982923941.jpg", content: "YIKOYO声波电动牙刷", nums: "送刷头+牙膏", yjiag: "298.00", jiag: "168.00" }
    ]

  },
  onShow: function () {
    
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  onLoad() {
    let endTimeList = [];
    // 将活动的结束时间参数提成一个单独的数组，方便操作
    this.data.items0.forEach(o => { 
      endTimeList.push(o.actEndTime) 
    })
    // 执行倒计时函数
    this.countDown();
  },
  timeFormat(param) {//小于10的格式化函数
    return param < 10 ? '0' + param : param;
  },
  countDown() {//倒计时函数
    // 获取当前时间，同时得到活动结束时间数组
    let newTime = new Date().getTime();
    // 对结束时间进行处理渲染到页面
    this.data.items0.forEach(o => {
      let endTime = new Date(o.actEndTime).getTime();
      let obj = null;
      // 如果活动未结束，对时间进行处理
      if (endTime - newTime > 0) {
        let time = (endTime - newTime) / 1000;
        // 获取天、时、分、秒
        let day = parseInt(time / (60 * 60 * 24));
        let hou = parseInt(time % (60 * 60 * 24) / 3600);
        let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
        let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
        obj = {
          day: this.timeFormat(day),
          hou: this.timeFormat(hou),
          min: this.timeFormat(min),
          sec: this.timeFormat(sec)
        }
      } else {//活动已结束，全部设置为'00'
        obj = {
          day: '00',
          hou: '00',
          min: '00',
          sec: '00'
        }
      }
      o.countDownList = [];
      o.countDownList = obj;
    })
    this.setData({
      items0: this.data.items0
    });
    // 渲染，然后每隔一秒执行一次倒计时函数
    setTimeout(this.countDown, 1000);
  }
})