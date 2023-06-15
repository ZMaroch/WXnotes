// pages/index/index.js
//解构赋值 ：[x,y]=[y,x] {foo,boo}={foo:"",boo:""}
//导入外部模块js
const {host,bannerUrl,indexUrl} =require('../../netmode/config.js')
const app=getApp()
Page({
  /*页面的初始数据*/
  data: {
        currentIndex: 0,
        bannerArr:[],
        listArr:[],
  },
  goDetail(e){
    wx.navigateTo({
      url: '../indexDetail/indexDetail?mark='+e.currentTarget.dataset.id,
    })
  },
  //1.swiper 触发
  swiperchange(e){
    this.setData({
          currentIndex:e.detail.current 
    })
  },
  /*生命周期函数--监听页面加载*/
  //封装网络请求已转移至app.js
/*  http(url,arr){
    wx.request({
      url:url,
      success:(res)=>{
        console.log(res.data);
        this.setData({
          [arr]:res.data.data
        })
      }
    })
  }, */

  onLoad(options) {
    //获取appjs网络请求
    app.http(host+bannerUrl,this,'bannerArr')
    app.http(host+indexUrl,this,'listArr')
    /* wx.request({
      url:host+bannerUrl,
      success:(res)=>{
        console.log(res.data);
        this.setData({
          bannerArr:res.data.data
        })
      }
    }) */
/*     this.http(host+bannerUrl,'bannerArr')
    this.http(host+indexUrl,'listArr') */
/*     wx.request({
      url:host+indexUrl,
      success:res=>{
        console.log('列表数据',res.data);
        this.setData({
          listArr:res.data.data
        })
      }
    })*/
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