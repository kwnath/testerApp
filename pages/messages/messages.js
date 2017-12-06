// pages/messages/messages.js
const AV = require('../../utils/leancloud.js');
const Message = require('../../model/quote.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  bindFormSubmit: function (e) {
    var name = e.detail.value.name
    var message = e.detail.value.message
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    var acl = new AV.ACL();
    acl.setPublicReadAccess(true);
    acl.setPublicWriteAccess(true);
    setTimeout(function () {
      new Message({
        name: name,
        quote: message,
        time: formattedTime
      }).setACL(acl).save().catch(console.error);
      console.log('form发生了submit事件，携带数据为：', e.detail.value, timestamp)
      wx.reLaunch({
        url: '/pages/index/index'
      });
    }, 2000);
  },
})