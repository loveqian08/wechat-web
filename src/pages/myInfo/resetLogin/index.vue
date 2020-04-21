<template>
  <div class="resetLogin">
    <van-popup
      :show="popShow"
      position="bottom"
      custom-style="height: 20%;"
    >
    <button class="yes">是</button><button class="no">否</button>
    </van-popup>
  </div>
</template>
<script>
import {fastLogin} from '@/utils/apiServer.js'
export default {
  data () {
    return {
      popShow: false
    }
  },
  methods: {
    resetLogin () {
      wx.login({
        success: async (res) => {
          console.log(res)
          if (res.code) {
            try {
              const result = await fastLogin({wxCode: res.code})
              if (result.code === 0) {
                console.log('token是' + result.user.token)
                wx.setStorage({
                  key: 'token',
                  data: result.user.token
                })
                wx.setStorage({
                  key: 'userInfo',
                  data: result.user
                })
                wx.switchTab({
                  url: '../index/main'
                })
              } else if (result.code === 10002) {
                wx.redirectTo({
                  url: '../login/main'
                })
              }
            } catch (e) {
              wx.removeStorage({
                key: 'token',
                success (res) {
                  wx.reLaunch({
                    url: '../../login/main'
                  })
                }
              })
            }
          }
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.resetLogin{}
</style>