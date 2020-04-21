<template>
  <div class="nameWrap">
    <div class="name">
      <input type="text" v-model="myName" placeholder="请输入真实姓名" placeholder-style="font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #999999;">
    </div>
    <van-notify id="van-notify" />
    <button @click="updateData">确定修改</button>
  </div>
</template>
<script>
import {updateName} from '@/utils/apiServer.js'
export default {
  data () {
    return {
      myName: ''
    }
  },
  onLoad (options) {
    this.myName = options.name
  },
  methods: {
    async updateData () {
      if (this.myName === '') {
        this.$notify({
          type: 'danger',
          message: '真实姓名不可为空'
        })
        return
      }
      try {
        const res = await updateName({name: this.myName})
        if (res.code === 0) {
          this.$notify({
            type: 'success',
            message: '修改成功'
          })
          wx.setStorage({
            key: 'userInfo',
            data: res.data
          })
          wx.navigateBack({
            delta: 1
          })
        }
      } catch (e) {
        this.$notify({
          type: 'danger',
          message: e.message
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.nameWrap{
  padding: 0 0.32rem;
  .name{
    height: 1.2rem;
    width: 100%;
    border-bottom: 0.05rem solid #555;
    input{
      width: 100%;
      height: 100%;
      font-size: 0.32rem;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(0,0,0,1);
    }
  }
  button{
    position: absolute;
    left: 0.32rem;
    right: 0.32rem;
    bottom: 4.6rem;
    height: 0.88rem;
    background-color: #DE2910;
    font-size: 0.36rem;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    border-radius: 0.08rem;
  }
}
</style>