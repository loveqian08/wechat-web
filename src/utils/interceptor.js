import Fly from 'flyio/dist/npm/wx'
import Dialog from '@/components/vant-webapp/dialog/dialog';
// import {fastLogin} from '@/utils/apiServer.js'
var fly = new Fly()

// let token = window.localStorage.getItem('token')
fly.interceptors.request.use((config) => {
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  console.log(config)
  try {
    // let token = wx.getStorageSync('token')
    let token = 'd468095f8e724228adffe603f888cda5'

    if (token) {
      config.headers = {
        'content-type': 'application/json',
        'X-Token': token
      }
      return config
    }
  } catch (e) {
    console.log(e)
  }
})

fly.interceptors.response.use(response => {
  wx.hideLoading()
  console.log(response)
  if (response.data && response.data.code === 10004) {
    console.log('超时了')
    wx.showToast({
      title: '登录超时',
      icon: 'none',
      duration: 2000
    })
    wx.removeStorage({
      key: 'token',
      success (result) {
        console.log(3232)
        wx.reLaunch({
          // url: '/pages/myInfo/resetLogin/main'
          url: '/pages/login/main'
        })
      },
      fail () {
        wx.reLaunch({
          // url: '/pages/myInfo/resetLogin/main'
          url: '/pages/login/main'
        })
      }
    })
    // Dialog.alert({
    //   message: '登录超时，请重新登录'
    // }).then(() => {
    // });
    return false
  } else {
    console.log('返回数据了')
    return response
  }
}, err => {
  console.log(err)
  wx.hideLoading()
  if (err.data && err.data.code === 10004) {
    Dialog.alert({
      message: '登录超时，请重新登录'
    }).then(() => {
      wx.removeStorage({
        key: 'token',
        success (result) {
          console.log(3232)
          wx.reLaunch({
            url: '../pages/myInfo/resetLogin/main'
          })
          // wx.login({
          //   success: async (res) => {
          //     console.log(res)
          //     if (res.code) {
          //       try {
          //         const result = await fastLogin({wxCode: res.code})
          //         if (result.code === 0) {
          //           console.log('token是' + result.user.token)
          //           wx.setStorage({
          //             key: 'token',
          //             data: result.user.token
          //           })
          //           wx.setStorage({
          //             key: 'userInfo',
          //             data: result.user
          //           })
          //           wx.switchTab({
          //             url: '../index/main'
          //           })
          //         } else if (result.code === 10002) {
          //           wx.redirectTo({
          //             url: '../login/main'
          //           })
          //         }
          //       } catch (e) {
          //         console.log(e.message)
          //       }
          //     }
          //   }
          // })
        },
        fail () {
          wx.reLaunch({
            url: '../pages/myInfo/resetLogin/main'
          })
        }
      })
    });
  }
})

export default fly
