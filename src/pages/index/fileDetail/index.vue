<template>
  <div class="fileDetailWrap">
    <div class="title">{{fileName}}</div>
    <div class="detailWrap">
      <div class="detail">
        <!-- <img :src="item.imageUrl" alt="" v-for="(item, index) in imgList" :key="index"> -->
        <div class="pdfWrap" v-for="(item, index) in imgList" :key="index">
          <img :src="item.imageUrl" alt="" class="imgOne">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {getFileDetail} from '@/utils/apiServer.js'
export default {
  data () {
    return {
      fileName: '',
      imgList: [],
      drawList: [],
      pdf: {},
      pageNum: 1
    }
  },
  onLoad (options) {
    console.log(options);
    this.imgList = [];
    this.drawList = [];
    if (options.fileName === 'null') {
      this.fileName = ''
    } else {
      this.fileName = options.fileName
    }
    this.getDetail(options.fileId, options.fileUrl, options.createType, options.meetingId)
  },
  methods: {
    async getDetail (fileUuid, url, createType, meetingUuid) {
      console.log(fileUuid, url, createType, meetingUuid)
      try {
        const res = await getFileDetail({fileUuid: fileUuid, fileUrl: url, meetingUuid: meetingUuid, createType: Number(createType)})
        this.imgList = JSON.parse(res.data.originImagesJson)
        this.drawList = JSON.parse(res.data.markImagsJson)
        this.drawList.forEach((item, idx) => {
          let page = Number(item.page)
          this.imgList[page] = {...item}
          this.$forceUpdate()
        })
      } catch (e) {
        console.log(e.message)
      }
    }
  }
}
</script>
<style lang="scss">
.fileDetailWrap{
  .title{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1.1rem;
    padding-left: 0.32rem;
    line-height: 1.1rem;
    font-size: 0.32rem;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(17,17,17,1);
    background-color: #F3F3F3;
  }
  .detailWrap{
    position: absolute;
    top: 1.1rem;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: auto;
    background-color: #fff;
    padding: 0 0.26rem;
    .detail{
      width: 100%;
      padding-top: 0.01rem;
      .pdfWrap{
        width: 100%;
        height: 8.85rem;
        float: left;
        margin-top: 0.3rem;
        border: 0.01rem solid #B6AFAA;
        position: relative;
        .imgOne{
          position: absolute;
          top: 0.01rem;
          left: 0;
          width: 99.5%;
          height: 99%;
          z-index: 1;
        }
        .draw{
          position: absolute;
          top: 0.01rem;
          left: 0;
          width: 99.5%;
          height: 99%;
          z-index: 2;
        }
      }
    }
  }
}
</style>