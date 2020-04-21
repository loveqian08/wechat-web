<template>
  <div class="addWrap">
    <div class="home">
      <div class="title">
        <i></i><span>会议主题</span>
      </div>
      <div :class="{'content': true, 'isfocus': isfocus}">
        <input type="text" placeholder="请输入会议主题" :maxlength="20" v-model="meetingName" @focus="getFocus" @blur="blur">
        <i v-show="isfocus && meetingName.length > 0">{{meetingName.length}}/20</i>
      </div>
    </div>
    <div class="timeWrap">
      <div class="title">
        <i></i><span>会议时间</span>
      </div>
      <div class="content" @click="showPop = true">
        <span>{{meetingTime}}</span><i class="next"></i>
      </div>
    </div>
    <div class="person">
      <div class="title">
        <i></i><span>参会人员</span><b>已添加{{personLength}}人</b>
      </div>
      <div class="content">
        <ul class="list">
          <!-- <li class="add" style="margin-left: 0;">
            <div class="wrap"><span></span></div>
          </li>
          <li class="del">
            <div class="wrap"><span></span></div>
          </li> -->
          <li v-for="(item, index) in personList" :key="index" :class="{'first': index % 8 === 0}" @click="choose(item.type)">
            <div class="wrap" :class="{'add': item.type === 'add', 'del': item.type === 'del'}" @click="addUser(item)"><img :src="item.avatar" alt=""></div>
            <div class="name" v-if="item.name">{{item.name}}</div>
          </li>
        </ul>
        <div class="getAll" @click="getAll" v-if="personList.length > 16">查看全部人员</div>
      </div>
    </div>
    <div class="fileWrap">
      <div class="title">
        <i></i><span>会议材料</span><b @click="addFile">已添加{{fileList.length}}份，继续添加<i></i></b>
      </div>
      <div class="content">
        <div class="addFile" v-if="fileList.length === 0" @click="addFile"><i></i></div>
        <div class="fileList" v-for="(item, index) in fileList" :key="index">
          <i class="fileIcon"></i><span class="fileName">{{item.fileName}}</span><i class="delete" @click="delFile(item.fileUuid)"></i>
        </div>
      </div>
    </div>
    <div class="okWrap">
      <button @click="newAdd">确定新建</button>
    </div>
    <van-dialog id="van-dialog" />
    <van-notify id="van-notify" />
    <van-popup
      :show="showPop"
      position="bottom"
      @close="onClose">
      <van-datetime-picker
        type="datetime"
        :value="currentDate"
        :min-date="minDate"
        :max-date="maxDate"
        @input="onInput"
        @confirm="getTime"
        @cancel="cancelTime"
      />
    </van-popup>
    <van-popup
      :show="showPerson"
      position="bottom"
      close-on-click-overlay
      custom-style="height: 80%;">
      <div class="popWrap">
        <div class="title">
          <div class="iptWrap" v-if="!getAllPeo">
            <i class="search"></i>
            <input type="text" v-model="personName" placeholder="在通讯录里查找" @input="searchPerson">
          </div>
          <div class="allPeoTitle" v-if="getAllPeo">
            <span>全部参会人员</span>
          </div>
          <div class="count">已选{{chooseList.length}}人</div>
        </div>
        <div class="listWrap">
          <div class="list" v-for="(temp, idx) in letterList" :key="idx">
            <div class="type">{{temp}}</div>
            <div class="perList">
              <div class="people" v-for="(it, index) in peoList" :key="index" v-if="it.firstLetter === temp">
                <div class="nameWrap"><img :src="it.avatar" alt=""><span>{{it.name}}</span></div>
                <div class="check" v-if="!getAllPeo"><van-checkbox :value="it.check" shape="square" @change="onChange(it)" v-if="type === 'add'"></van-checkbox><span v-if="type === 'del'" @click="delSome(it)"></span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="foot"><button @click="isOk">确定</button></div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import store from '@/utils/store.js'
import {getUserList, createMeet} from '@/utils/apiServer.js'
export default {
  data () {
    return {
      isfocus: false,
      meetingName: '',
      meetingTime: '',
      showPop: false,
      currentDate: new Date().getTime(),
      minDate: new Date().getTime(),
      maxDate: '',
      type: '',
      chooseList: [],
      personName: '',
      showPerson: false,
      personList: [],
      personLength: 0,
      peoList: [],
      fileList: [],
      fileIds: [],
      getAllPeo: false,
      allPerson: [],
      letterList: []
    }
  },
  created () {
  },
  onLoad () {
    this.initData();
    console.log('load');
    let time = new Date()
    let y = time.getFullYear()
    this.maxDate = new Date(y + 10, 1, 1).getTime()
    this.meetingTime = this.timeFormat()
    if (this.personList.length > 0) {
      this.personList.unshift(
        {
          type: 'del',
          name: '',
          avatar: require('../../../assets/images/del.png')
        }
      )
    }
    this.personList.unshift({
      type: 'add',
      name: '',
      avatar: require('../../../assets/images/xinjian.png')
    })
    this.peoList.forEach((item) => {
      item.arr.forEach(t => {
        t.check = false
      })
    })
  },
  onLaunch () {
    console.log('launch')
  },
  onUnload () {
    store.commit('SET_FILEIDS', [])
    store.commit('SET_FILELIST', [])
  },
  onShow () {
    console.log('show')
    let fileArr = JSON.parse(JSON.stringify(store.state.fileList))
    console.log(fileArr)
    // let idsArr = store.state.fileIdx
    fileArr.forEach((item, index) => {
      let flag = false
      for (let i = 0; i < this.fileList.length; i++) {
        if (this.fileList[i].fileUuid === item.fileUuid) {
          flag = true
          break
        }
      }
      if (!flag) {
        this.fileList.push({...item})
        this.fileIds.push(item.fileUuid)
      }
    })
  },
  methods: {
    searchPerson () {
      this.getUser(this.personName);
    },
    initData () {
      this.isfocus = false;
      this.meetingName = '';
      this.meetingTime = '';
      this.showPop = false;
      this.chooseList = [];
      this.personName = '';
      this.showPerson = false;
      this.personList = [];
      this.peoList = [];
      this.fileList = [];
      this.fileIds = [];
      this.allPerson = [];
      this.letterList = [];
    },
    newAdd () {
      let users = []
      this.personList.forEach(item => {
        if (item.uuid) {
          users.push(item.uuid)
        }
      })
      const _this = this
      wx.getStorage({
        key: 'userInfo',
        async success (res) {
          console.log(res)
          users.push(res.data.uuid)
          let par = {
            meetingTopic: _this.meetingName,
            meetingTime: _this.meetingTime,
            userIds: users,
            userId: res.data.uuid,
            materials: _this.fileList
          }
          try {
            const res = await createMeet(par)
            if (res.code === 0) {
              _this.$notify({
                type: 'success',
                message: '新建会议成功'
              })
              store.commit('SET_RESETLIST', true)
              wx.navigateBack({
                delta: 1
              })
            }
          } catch (e) {
            _this.$notify({
              type: 'danger',
              message: e.message
            })
          }
        }
      })
    },
    delSome (item) {
      this.peoList.forEach((tmp, index) => {
        if (tmp.uuid === item.uuid) {
          this.peoList.splice(index, 1)
        }
      })
      this.chooseList.forEach((tmp, index) => {
        if (tmp.uuid === item.uuid) {
          this.chooseList.splice(index, 1)
        }
      })
      let br = []
      this.chooseList.forEach(item => {
        if (br.indexOf(item.firstLetter) < 0) {
          br.push(item.firstLetter)
        }
      })
      br.sort()
      this.letterList = [...br]
    },
    addUser (item) {
      const _this = this
      if (!item.type) {
        return false
      } else {
        _this.type = item.type
        if (item.type === 'add') {
          this.personName = '';
          this.chooseList = []
          _this.getUser('')
        } else {
          let arr = JSON.parse(JSON.stringify(_this.personList))
          arr.splice(0, 1)
          arr.splice(0, 1)
          _this.peoList = arr
          let br = []
          _this.peoList.forEach(item => {
            console.log(_this.peoList)
            if (br.indexOf(item.firstLetter) < 0) {
              br.push(item.firstLetter)
            }
          })
          br.sort()
          _this.letterList = [...br]
        }
      }
    },
    async getUser (name) {
      try {
        const res = await getUserList({name: name})
        if (res.code === 0) {
          let arr = res.data
          this.allPerson = [...res.data]
          let brr = [arr[0].firstLetter]
          arr.forEach((item, index) => {
            if (brr.indexOf(item.firstLetter) < 0) {
              brr.push(item.firstLetter)
            }
          })
          brr.sort()
          this.letterList = [...brr]
          this.allLetter = [...brr]
          this.peoList = [...res.data]
          this.peoList.forEach(t => {
            let flag = false
            this.personList.forEach(tm => {
              if (t.uuid === tm.uuid) {
                flag = true
              }
            })
            if (flag) {
              t.check = true
            } else {
              t.check = false
            }
          })
          if (this.type === 'add') {
            this.personList.forEach((item) => {
              if (item.check) {
                this.chooseList.push({...item})
              }
            })
          }
        }
      } catch (e) {
        this.$notify({
          type: 'danger',
          message: e.message
        })
      }
    },
    addFile () {
      wx.navigateTo({
        url: '../chooseFile/main'
      })
    },
    delFile (id) {
      this.fileList.forEach((item, index) => {
        if (item.fileUuid === id) {
          this.fileList.splice(index, 1)
          this.fileIds.splice(index, 1)
          store.commit('SET_FILEIDS', JSON.parse(JSON.stringify(this.fileIds)))
          store.commit('SET_FILELIST', JSON.parse(JSON.stringify(this.fileList)))
          return false
        }
      })
    },
    isOk () {
      if (this.type === 'add') {
        this.chooseList.forEach((tmp, index) => {
          let flag = false
          for (let i = 0; i < this.personList.length; i++) {
            if (tmp.uuid === this.personList[i].uuid) {
              flag = true
            }
          }
          if (!flag) {
            this.personList.push({...tmp})
          }
        })
        // this.personList = this.personList.concat(this.chooseList)
        let hasDel = this.personList.filter(item => item.type === 'del')
        let hasAdd = this.personList.filter(item => item.type === 'add')
        if (hasAdd.length <= 0 && hasDel <= 0) {
          this.personList.unshift({
            type: 'del',
            name: '',
            avatar: require('../../../assets/images/del.png')
          })
          this.personList.unshift({
            type: 'add',
            name: '',
            avatar: require('../../../assets/images/xinjian.png')
          })
        } else if (hasAdd.length > 0 && hasDel <= 0) {
          this.personList.splice(1, 0, {
            type: 'del',
            name: '',
            avatar: require('../../../assets/images/del.png')
          })
        }
        if (this.personList.length < 2) {
          this.personLength = 0
        } else {
          this.personLength = this.personList.length - 2
        }
      } else if (this.type === 'del') {
        this.personList = JSON.parse(JSON.stringify(this.chooseList))
        if (this.personList.length > 0) {
          this.personList.unshift({
            type: 'del',
            name: '',
            avatar: require('../../../assets/images/del.png')
          })
          this.personList.unshift({
            type: 'add',
            name: '',
            avatar: require('../../../assets/images/xinjian.png')
          })
        } else {
          this.personList.unshift({
            type: 'add',
            name: '',
            avatar: require('../../../assets/images/xinjian.png')
          })
        }
        if (this.personList.length < 2) {
          this.personLength = 0
        } else {
          this.personLength = this.personList.length - 2
        }
      }
      console.log(this.personList)
      this.showPerson = false
    },
    onChange (item) {
      item.check = !item.check
      this.$forceUpdate()
      this.chooseList = []
      this.peoList.forEach((item) => {
        if (item.check) {
          this.chooseList.push({...item})
        }
      })
    },
    choose (type) {
      if (type) {
        this.type = type
        this.showPerson = true
      }
    },
    getAll () {
      let arr = JSON.parse(JSON.stringify(this.personList))
      arr.splice(0, 2)
      this.peoList = arr
      let br = []
      this.peoList.forEach(item => {
        console.log(this.peoList)
        if (br.indexOf(item.firstLetter) < 0) {
          br.push(item.firstLetter)
        }
      })
      br.sort()
      this.letterList = [...br]
      this.showPerson = true
      this.getAllPeo = true
      console.log('获取所有')
    },
    timeFormat (val) {
      let time = new Date()
      if (val) {
        time = new Date(val)
      }
      let y = time.getFullYear()
      let m = time.getMonth()
      m = m + 1
      if (m < 10) {
        m = '0' + m
      }
      let d = time.getDate()
      if (d < 10) {
        d = '0' + d
      }
      let h = time.getHours()
      if (h < 10) {
        h = '0' + h
      }
      let min = time.getMinutes()
      if (min < 10) {
        min = '0' + min
      }
      return `${y}-${m}-${d} ${h}:${min}`
    },
    cancelTime () {
      this.showPop = false
    },
    getTime (val) {
      this.meetingTime = this.timeFormat(val.mp.detail)
      this.showPop = false
    },
    onInput () {
      console.log(111)
    },
    onClose () {
      console.log(222)
    },
    getFocus () {
      this.isfocus = true
    },
    blur () {
      this.isfocus = false
    }
  }
}
</script>
<style lang="scss" scoped>
.addWrap{
  background-color: #F7F7F7;
  padding-top: 0.16rem;
  height: 100%;
  .home{
    height: 1.36rem;
    padding: 0.24rem 0.32rem;
    background-color: #fff;
    margin-bottom: 0.08rem;
    .title{
      height: 0.3rem;
      i{
        width: 0.19rem;
        height: 0.28rem;
        float: left;
        margin-top: 0.01rem;
        margin-right: 0.09rem;
        background-image: url('../../../assets/images/meethome.png');
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
    }
    .content{
      height: 1rem;
      border-bottom: 1px solid #ccc;
      position: relative;
      input{
        height: 0.3rem;
        border: none;
        outline: none;
        padding-left: 0.21rem;
        padding-right: 0.8rem;
        float: left;
        margin-top: 0.35rem;
        font-size: 0.28rem;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(17, 17, 17, 1);
      }
      i{
        position: absolute;
        top: 0.35rem;
        right: 0;
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.28rem;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(153,153,153,1);
      }
    }
    .isfocus{
      border-bottom: 1px solid #DE2910;
    }
  }
  .timeWrap{
    height: 1.36rem;
    padding: 0.24rem 0.32rem;
    background-color: #fff;
    margin-bottom: 0.08rem;
    .title{
      height: 0.3rem;
      i{
        width: 0.28rem;
        height: 0.28rem;
        float: left;
        margin-top: 0.01rem;
        margin-right: 0.09rem;
        background-image: url('../../../assets/images/meethome.png');
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
    }
    .content{
      height: 0.88rem;
      border:1px solid rgba(204, 204, 204, 1);
      border-radius:4px;
      margin-top: 0.18rem;
      margin-bottom: 0.24rem;
      span{
        float: left;
        height: 0.88rem;
        line-height: 0.88rem;
        margin-left: 0.21rem;
        font-size: 0.28rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(17, 17, 17, 1);
      }
      i{
        width: 0.24rem;
        height: 0.24rem;
        float: right;
        background-image: url('../../../assets/images/next.png');
        background-size: cover;
        margin-top: 0.32rem;
        margin-right: 0.25rem;
      }
    }
  }
  .person{
    padding: 0.24rem 0.32rem;
    background-color: #fff;
    margin-bottom: 0.08rem;
    .title{
      height: 0.3rem;
      i{
        width: 0.22rem;
        height: 0.28rem;
        float: left;
        margin-top: 0.01rem;
        margin-right: 0.09rem;
        background-image: url('../../../assets/images/people.png');
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
      margin-top: 0.37rem;
      .list{
        list-style: none;
        width: 100%;
        overflow: hidden;
        max-height: 2.25rem;
        li{
          width: 0.64rem;
          float: left;
          margin-left: 0.25rem;
          margin-bottom: 0.2rem;
          position: relative;
          height: 1rem;
          .wrap{
            width: 0.64rem;
            height: 0.64rem;
            float: left;
            overflow: hidden;
            img{
              width: 100%;
              height: 100%;
              float: left;
            }
          }
          .add{
            width: 0.61rem;
            height: 0.61rem;
            border: 0.01rem solid #ccc;
            img{
              width: 0.36rem;
              height: 0.36rem;
              margin-top: 0.13rem;
              margin-left: 0.13rem;
              float: left;
            }
          }
          .del{
            width: 0.61rem;
            height: 0.61rem;
            border: 0.01rem solid #ccc;
            img{
              width: 0.36rem;
              height: 0.36rem;
              margin-top: 0.14rem;
              margin-left: 0.14rem;
              float: left;
            }
          }
          .name{
            position: absolute;
            bottom: 0;
            left: -0.125rem;
            margin-top: 0.09rem;
            width: 0.89rem;
            font-size: 0.24rem;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(17, 17, 17, 1);
            line-height: 0.24rem;
            text-align: center;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          }
        }
        .first{
          margin-left: 0;
        }
      }
      .getAll{
        font-size: 0.24rem;
        font-family: PingFang SC;
        font-weight: 500;
        color:rgba(153,153,153,1);
        width: 1.5rem;
        margin: 0.32rem auto;
        margin-bottom: 0;
      }
    }
  }
  .fileWrap{
    padding: 0.24rem 0.32rem;
    background-color: #fff;
    margin-bottom: 0.08rem;
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
        i{
          width: 0.28rem;
          height: 0.28rem;
          float: right;
          background-image: url('../../../assets/images/addFile.png');
          background-size: cover;
        }
      }
    }
    .content{
      overflow: hidden;
      .addFile{
        width: 0.62rem;
        height: 0.62rem;
        border: 0.01rem solid #ccc;
        border-radius: 0.04rem;
        float: left;
        margin-top: 0.36rem;
        margin-bottom: 0.26rem;
        i{
          float: left;
          width: 0.36rem;
          height: 0.36rem;
          margin-top: 0.13rem;
          margin-left: 0.13rem;
          background-image: url('../../../assets/images/xinjian.png');
          background-size: cover;
        }
      }
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
        .delete{
          width: 0.28rem;
          height: 0.28rem;
          margin-top: 0.02rem;
          float: right;
          background-image: url('../../../assets/images/delFile.png');
          background-size: cover;
        }
      }
    }
  }
  .okWrap{
    background-color: #F7F7F7;
    height: 1.28rem;
    padding: 0 0.32rem;
    padding-top: 0.66rem;
    button{
      height: 0.88rem;
      outline: none;
      border: none;
      background-color: #DE2910;
      font-size: 0.36rem;
      font-family:PingFang SC;
      font-weight:500;
      color:rgba(255,255,255,1);
      margin-bottom: 0.4rem;
    }
  }
}
.popWrap{
  background-color: #f7f7f7;
  .title{
    height: 0.89rem;
    background-color: #fff;
    padding: 0 0.32rem;
    .iptWrap{
      width: 5.04rem;
      height: 0.58rem;
      background-color: #F7F7F7;
      float: left;
      margin-top: 0.16rem;
      i{
        float: left;
        width: 0.28rem;
        height: 0.28rem;
        margin-top: 0.15rem;
        margin-left: 0.24rem;
        margin-right: 0.1rem;
        background-image: url('../../../assets/images/popSearch.png');
        background-size: cover;
      }
      input{
        height: 0.58rem;
        float: left;
        width: 4rem;
        border: none;
        outline: none;
        font-size: 0.28rem;
        font-family:PingFang SC;
        font-weight:400;
        color: #999999;
      }
    }
    .allPeoTitle{
      height: 100%;
      span{
        width: 3rem;
        height: 100%;
        float: left;
        line-height: 0.89rem;
        font-size: 0.34rem;
        font-family: PingFang SC;
        font-weight: 400;
        color:rgba(51,51,51,1);
      }
    }
    .count{
      height: 0.58rem;
      line-height: 0.58rem;
      float: right;
      font-size:0.28rem;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(51,51,51,1);
      margin-top: 0.16rem;
    }
  }
  .listWrap{
    background-color: #f7f7f7;
    position: absolute;
    top: 0.89rem;
    bottom: 1.02rem;
    width: 100%;
    overflow-y: auto;
    .list{
      .type{
        height: 0.56rem;
        padding-left: 0.32rem;
        background-color: #f7f7f7;
        font-size: 0.34rem;
        font-family:Helvetica LT;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height: 0.56rem;
      }
      .perList{
        padding-left: 0.32rem;
        background-color: #fff;
        .people{
          width: 100%;
          height: 0.89rem;
          border-top: 0.01rem solid #ddd;
          .nameWrap{
            width: 2.5rem;
            float: left;
            height: 100%;
            padding-left: 0.24rem;
            img{
              width: 0.4rem;
              height: 0.4rem;
              float: left;
              margin-top: 0.25rem;
              margin-right: 0.24rem;
            }
            span{
              float: left;
              height: 100%;
              line-height: 0.89rem;
              font-size: 0.34rem;
              font-family:PingFang SC;
              font-weight:400;
              color:rgba(51,51,51,1);
            }
          }
          .check{
            float: right;
            margin-right: 0.3rem;
            margin-top: 0.25rem;
            span{
              width: 0.4rem;
              height: 0.4rem;
              float: left;
              background-image: url('../../../assets/images/popDel.png');
              background-size: cover;
            }
          }
        }
        .people:first-child{
          border: none;
        }
      }
    }
  }
  .foot{
    height: 1.02rem;
    position: absolute;
    bottom: 0;
    padding: 0 0.32rem;
    button{
      width: 6.86rem;
      height: 0.88rem;
      float: left;
      outline: none;
      border: none;
      background-color: #EB3017;
      border-radius: 0.08rem;
      font-size: 0.35rem;
      font-family:PingFang SC;
      font-weight:500;
      color:rgba(255,255,255,1);
    }
  }
}
</style>