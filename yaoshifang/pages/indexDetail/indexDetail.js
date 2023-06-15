// pages/indexDetail/indexDetail.js
//导入模块 
const{host,indexDetail}=require('../../netmode/config')
Page({

  /**
   * 页面的初始数据
   */
  data: {
      info:'',//页面数据存储变量
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options);
    wx.showLoading({
      title: '加载中...',
    })
    wx.showNavigationBarLoading()
    wx.request({
      url: host+indexDetail,
      data:{
        id:options.mark
      },
      success:res=>{
          console.log(res.data);
          wx.showToast({
            title:'加载完毕',
            duration:500
          })
          wx.setNavigationBarTitle({
            title: res.data[0].title,
          })
          this.setData({
            info:res.data[0]
          })
      },
      complete(){
        wx.hideLoading()
        wx.hideNavigationBarLoading()
      }
    })
    //获取上个页面进来的参数url
    //网络请求

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})