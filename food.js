// pages/food/food.js
const fenlei=require('../../netmode/fooditem.js')
/* const {host,foodList}=require('../../netmode/config') */
Page({
  data: {
      location:"北京",
      num:1,
      itemArr:fenlei,
      listArr:[]
  },
  onLoad(options) {
/*       wx.request({
        url: host+foodList,
        data:{
          city:this.data.location,
          page:1
        },
        success:res=>{
            console.log(this.data);
            this.setData({
              listArr:res.data.data.result
            })
        }
      }) */
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