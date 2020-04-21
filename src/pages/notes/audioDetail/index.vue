<template>
  <div class="audioDetail">
    <div class="detailHead">
      <div class="info">
        <div class="title">{{info.name}}</div>
        <div class="time">{{info.createTime}}</div>
      </div>
    </div>
    <div class="detailContent">
      <div class="noData" v-if="!info.memo && requested">
        <img :src="noData"/>
        <span>暂无数据</span>
      </div>
      <div class="content" v-if="info.memo !== null">{{info.memo}}</div>
    </div>
    <van-notify id="van-notify" />
  </div>
</template>
<script>
import {getNoteDetail} from '@/utils/apiServer.js'
export default {
  data () {
    return {
      info: {},
      requested: false,
      noData: require('../../../assets/images/noData.png')
    }
  },
  onLoad (options) {
    this.getDetail(options.uuid)
  },
  methods: {
    formatJson (json) {
      return JSON.parse(json)
    },
    async getDetail (uuid) {
      try {
        const res = await getNoteDetail(uuid)
        if (res.code === 0) {
          this.info = res.data
          this.requested = true;
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
.audioDetail{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .detailHead{
    height: 1.51rem;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #F3F3F3;
    .info{
      height: 100%;
      position: absolute;
      left: 0;
      right: 1.6rem;
      .title{
        position: absolute;
        top: 0.4rem;
        left: 0.32rem;
        font-size: 0.32rem;
        font-family: PingFang SC;
        font-weight: bold;
        color:rgba(17,17,17,1);
      }
      .time{
        position: absolute;
        bottom: 0.29rem;
        left: 0.32rem;
        font-size: 0.28rem;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(85,85,85,1);
      }
    }
  }
  .detailContent{
    position: absolute;
    top: 1.51rem;
    left: 0rem;
    right: 0rem;
    bottom: 0;
    overflow-y: auto;
    padding-top: 0.36rem;
    .noData{
      width: 5.43rem;
      height: 4.6rem;
      position: absolute;
      top: 2.2rem;
      left: 0.72rem;
      img{
        width: 5.43rem;
        height: 4.14rem;
        float: left;
      }
      span{
        width: 100%;
        font-size: 0.32rem;
        font-family: PingFang SC;
        font-weight: 400;
        float: left;
        color:#333;
        text-align: center;
        margin-top: 0.08rem;
      }
    }
    .content{
      width: 100%;
      padding: 0 0.26rem;
      box-sizing: border-box;
    }
  }
}
</style>