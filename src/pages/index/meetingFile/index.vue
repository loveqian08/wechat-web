<template>
  <div class="meetingFile">
    <div class="fileWrap" :class="{'isRoles': roles === 1}">
      <div class="title">
        <i></i><span>会议材料</span><b>共{{fileList.length}}份</b>
      </div>
      <div class="content">
        <div class="fileList" v-for="(item, index) in fileList" :key="index" @click.stop="detail(item.fileUuid, item.fileName, item.fileUrl, 0)">
          <i class="fileIcon"></i><span class="fileName">{{item.fileName || ''}}</span>
        </div>
      </div>
    </div>
    <div class="fileWrap" :class="{'isRoles': roles === 1}">
      <div class="title">
        <i></i><span>我的材料</span><b>共{{myFileList.length}}份</b>
      </div>
      <div class="content">
        <div class="fileList" v-for="(item, index) in myFileList" :key="index" @click.stop="detail(item.fileUuid, item.fileName, item.fileUrl, 1)">
          <i class="fileIcon"></i><span class="fileName">{{item.fileName || ''}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {getMeetingFileList} from '@/utils/apiServer.js'
export default {
  data () {
    return {
      fileList: [],
      myFileList: [],
      meetingId: ''
    }
  },
  onLoad (options) {
    this.$forceUpdate()
    this.meetingId = options.meetingId
    this.getFileList(options.meetingId)
  },
  methods: {
    detail (id, fileName, fileUrl, createType) {
      wx.navigateTo({
        url: '../fileDetail/main?fileId=' + id + '&fileName=' + fileName + '&fileUrl=' + fileUrl + '&createType=' + createType + '&meetingId=' + this.meetingId
      })
    },
    async getFileList (id) {
      try {
        const res = await getMeetingFileList({meetId: id})
        if (res.code === 0) {
          this.fileList = res.data.meetingMaterialList
          this.fileList.forEach(item => {
            if (item.pdfUrl) {
              item.fileUrl = item.pdfUrl
            }
          })
          this.myFileList = res.data.myMaterialList
          this.myFileList.forEach(item => {
            if (item.pdfUrl) {
              item.fileUrl = item.pdfUrl
            }
          })
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.meetingFile{
  .fileWrap{
    margin-top: 0.16rem;
    padding: 0.24rem 0.32rem;
    background-color: #fff;
    overflow: hidden;
    .title{
      height: 0.3rem;
      i{
        width: 0.28rem;
        height: 0.28rem;
        float: left;
        margin-top: 0.01rem;
        margin-right: 0.09rem;
        background-image: url('../../../assets/images/meetTxt.png');
        background-size: cover;
      }
      span{
        height: 0.3rem;
        float: left;
        line-height: 0.3rem;
        font-size: 0.28rem;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(17, 17, 17, 1);
      }
      b{
        float: right;
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.24rem;
        font-family:PingFang SC;
        color: #999;
        font-style: normal;
      }
    }
    .content{
      overflow: hidden;
      .fileList{
        height: 0.32rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        position: relative;
        .fileIcon{
          width: 0.28rem;
          height: 0.28rem;
          float: left;
          margin-top: 0.02rem;
          background-image: url('../../../assets/images/file.png');
          background-size: cover;
        }
        .fileName{
          height: 100%;
          line-height: 0.32rem;
          font-size: 0.28rem;
          font-family:PingFang SC;
          font-weight:400;
          color:rgba(17, 17, 17, 1);
          position: absolute;
          top: 0;
          left: 0.35rem;
          right: 0.92rem;
        }
      }
    }
  }
}
</style>
<style lang="wxss">
  page{
    background-color:#fff !important;
  }
</style>
