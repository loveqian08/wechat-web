<template>
  <div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  onLaunch (shareTicket) {
    console.log('初始化了啊')
    console.log(shareTicket)
  },
  onLoad (options) {
    let token = ''
    wx.getStorage({
      key: 'token',
      success (res) {
        console.log(res)
        token = res.data
        if (token) {
          console.log('进主页')
          console.log(options)
          if (options.url) {
            let url = decodeURIComponent(options.url)
            console.log(url)
            let newUrl = url.split('?')[0]
            let par = url.split('?')[1]
            let parOne = par.split('&&')[0]
            let parTwo = par.split('&&')[1]
            console.log(parOne.split('=')[1], parTwo.split('=')[1])
            try {
              wx.setStorageSync('activeIdx', parOne.split('=')[1])
              wx.setStorageSync('filePath', parTwo.split('=')[1])
              wx.switchTab({
                url: newUrl
              })
            } catch (e) {
              console.log(e)
            }
          } else {
            try {
              wx.setStorageSync('activeIdx', '')
              wx.setStorageSync('filePath', '')
              wx.switchTab({
                url: '../index/main'
              })
            } catch (e) {
              console.log(e)
            }
          }
        } else {
          console.log('token不存在')
        }
      },
      fail (err) {
        console.log('未获取到token')
        console.log(err)
        console.log('去登录')
        if (options.url) {
          console.log('有url')
          let url = decodeURIComponent(options.url)
          console.log(url)
          let newUrl = url.split('?')[0]
          console.log(newUrl)
          let par = url.split('?')[1]
          let parOne = par.split('&&')[0]
          let parTwo = par.split('&&')[1]
          console.log(parOne.split('=')[1], parTwo.split('=')[1])
          try {
            wx.setStorageSync('activeIdx', parOne.split('=')[1])
            wx.setStorageSync('filePath', parTwo.split('=')[1])
            wx.redirectTo({
              url: '../login/main?url=' + newUrl
            })
          } catch (e) {
            console.log(e)
          }
        } else {
          console.log('没有url')
          try {
            wx.setStorageSync('activeIdx', '')
            wx.setStorageSync('filePath', '')
            wx.redirectTo({
              url: '../login/main'
            })
          } catch (e) {
            console.log(e)
          }
        }
      }
    })
  }
}
</script>
