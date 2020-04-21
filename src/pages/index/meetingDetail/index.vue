<template>
  <div class="addWrap">
    <div class="home">
      <div class="title">
        <i></i><span>会议主题</span>
      </div>
      <div :class="{'content': true, 'isfocus': isfocus}" v-if="isEdit">
        <input type="text" placeholder="请输入会议主题" :maxlength="20" v-model="meetingName" @focus="getFocus" @blur="blur">
        <i v-show="isfocus && meetingName.length > 0">{{meetingName.length}}/20</i>
      </div>
      <div class="meetName" v-if="!isEdit">{{meetingName}}</div>
    </div>
    <div class="timeWrap">
      <div class="title">
        <i></i><span>会议时间</span>
      </div>
      <div class="content" @click="showPop = true" v-if="isEdit">
        <span>{{meetingTime}}</span><i class="next"></i>
      </div>
      <div class="meetTime" v-if="!isEdit">{{meetingTime}}</div>
    </div>
    <div class="person">
      <div class="title">
        <i></i><span>参会人员</span><b v-if="isEdit">已添加{{personLength}}人</b><b v-if="!isEdit">共{{personList.length}}人</b>
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
            <div class="wrap" :class="{'add': item.type === 'add', 'del': item.type === 'del'}"><img :src="item.avatar" alt=""></div>
            <div class="name" v-if="item.name">{{item.name}}</div>
          </li>
        </ul>
        <div class="getAll" @click="getAll" v-if="personList.length > 16">查看全部人员</div>
      </div>
    </div>
    <div class="fileWrap">
      <div class="title">
        <i></i><span>会议材料</span><b @click="addFile" v-if="fileList.length > 0 && isEdit">已添加{{fileList.length}}份，继续添加<i></i></b><b v-if="fileList.length === 0 && !isEdit">暂无</b><b v-if="fileList.length > 0 && !isEdit">共{{fileList.length}}份</b>
      </div>
      <div class="content">
        <div class="addFile" v-if="fileList.length === 0 && isEdit" @click="addFile"><i></i></div>
        <div class="fileList" v-for="(item, index) in fileList" :key="index">
          <i class="fileIcon"></i><span class="fileName">{{item.fileName}}</span><i class="delete" @click="delFile(item.fileUuid, 'file')" v-if="isEdit"></i>
          <!-- <i class="shoucang" v-if="!isEdit && item.isCollection"></i><i class="weishoucang" v-if="!isEdit && !item.isCollection"></i> -->
        </div>
      </div>
    </div>
    <div class="myfileWrap">
      <div class="title">
        <i></i><span>我的材料</span><b @click="addFile('my')" v-if="(myFileList.length > 0 && isEdit) || (myFileList.length > 0 && editFile)">已添加{{myFileList.length}}份，继续添加<i></i></b><b v-if="myFileList.length === 0 && !isEdit && !editFile">暂无</b><b v-if="myFileList.length > 0 && !isEdit && !editFile">共{{myFileList.length}}份</b>
      </div>
      <div class="content">
        <div class="addFile" v-if="(myFileList.length === 0 && isEdit) || (myFileList.length === 0 && editFile)" @click="addFile"><i></i></div>
        <div class="fileList" v-for="(item, index) in myFileList" :key="index">
          <i class="fileIcon"></i><span class="fileName">{{item.fileName}}</span><i class="delete" @click="delFile(item.fileUuid, 'myfile')" v-if="isEdit || editFile"></i>
          <!-- <i class="shoucang" v-if="!isEdit && item.isCollection && !editFile"></i><i class="weishoucang" v-if="!isEdit && !item.isCollection && !editFile"></i> -->
        </div>
      </div>
    </div>
    <div class="okWrap" v-if="roles === 1">
      <button @click="edit">{{editText}}</button>
    </div>
    <div class="okWrap" v-if="roles === 2">
      <button @click="editMyFile">{{editFileText}}</button>
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
      @click-overlay="peoClose"
      position="bottom"
      custom-style="height: 80%;">
      <div class="popWrap">
        <div class="title">
          <div class="iptWrap" v-if="!getAllPeo">
            <i class="search"></i>
            <input type="text" v-model="personName" placeholder="在通讯录里查找">
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
import {meetingDetail, updataMeeting, updataMyFile, getUserList} from '@/utils/apiServer.js'
export default {
  data () {
    return {
      isfocus: false,
      meetingName: '2019年第8次党会2019年第8次党会',
      meetingTime: '2019年10月28日 10:00',
      showPop: false,
      currentDate: new Date().getTime(),
      minDate: new Date().getTime(),
      maxDate: '',
      type: '',
      editFileText: '上传我的材料',
      editText: '重新编辑',
      chooseList: [],
      roles: 1, // 1为创建者，2为参与者
      isEdit: false, // 是否是编辑模式
      editFile: false, // 参与者修改我的材料
      isCollection: false, // 是否已收藏
      personName: '',
      showPerson: false,
      creatorId: '',
      fileIds: [],
      personList: [],
      peoList: [],
      fileList: [],
      myFileList: [],
      getAllPeo: false,
      allPerson: [],
      letterList: [],
      allLetter: [],
      personLength: 0
    }
  },
  onLoad (options) {
    let time = new Date()
    let y = time.getFullYear()
    this.maxDate = new Date(y + 10, 1, 1).getTime()
    this.meetingTime = this.timeFormat()
    this.peoList.forEach((item) => {
      item.check = false
    })
    this.isEdit = false
    this.editText = '重新编辑'
    console.log(this.editText)
    console.log(this.peoList)
    this.getData(options.meetingId)
    this.getUser('')
  },
  peoClose () {
    console.log(11111)
    this.showPerson = false
  },
  onShow () {
    console.log('show')
    let fileArr = JSON.parse(JSON.stringify(store.state.fileList))
    let myFileArr = JSON.parse(JSON.stringify(store.state.myFileList))
    console.log(fileArr)
    // let idsArr = store.state.fileIdx
    if (fileArr.length !== 0) {
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
    }
    if (myFileArr.length !== 0) {
      myFileArr.forEach((item, index) => {
        let flag = false
        for (let i = 0; i < this.myFileList.length; i++) {
          if (this.myFileList[i].fileUuid === item.fileUuid) {
            flag = true
            break
          }
        }
        if (!flag) {
          this.myFileList.push({...item})
        }
      })
    }
  },
  onUnload () {
    this.isEdit = false
    this.editFile = false
    store.commit('SET_FILEIDS', [])
    store.commit('SET_FILELIST', [])
    store.commit('SET_MYFILELIST', [])
  },
  methods: {
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
            t.check = false
          })
        }
      } catch (e) {
        this.$notify({
          type: 'danger',
          message: e.message
        })
      }
    },
    addFile (str) {
      if (str) {
        wx.navigateTo({
          url: '../chooseFile/main?option=' + str
        })
      } else {
        wx.navigateTo({
          url: '../chooseFile/main'
        })
      }
    },
    async getData (id) {
      try {
        const res = await meetingDetail(id)
        if (res.code === 0) {
          this.personList = res.data.people
          this.personLength = this.personList.length;
          this.creatorId = res.data.creatorId
          this.fileList = res.data.materials
          this.myFileList = res.data.userMaterials || []
          this.meetingName = res.data.topic
          this.meetingTime = res.data.meetingTime
          this.meetingId = res.data.meetingId
          const _this = this
          wx.getStorage({
            key: 'userInfo',
            success (result) {
              if (_this.creatorId === result.uuid) {
                _this.roles = 1
                _this.editText = '重新编辑'
              } else {
                _this.roles = 2
                _this.editText = '上传我的材料';
              }
            }
          })
        }
      } catch (e) {
        this.$notify({
          type: 'danger', message: e.message
        })
      }
    },
    async editMyFile () {
      if (this.editFile) {
        let arr = []
        this.myFileList.forEach(item => {
          arr.push(item.fileUuid)
        })
        let par = {
          meetingId: this.meetingId,
          fileIds: arr
        }
        try {
          const res = await updataMyFile(par)
          if (res.code === 0) {
            this.$notify({
              type: 'success',
              message: '保存成功'
            })
            this.editFile = false
            this.editFileText = '上传我的材料'
          }
        } catch (e) {
          this.$notify({
            type: 'danger',
            message: e.message
          })
        }
      } else {
        this.editFile = true
        this.editFileText = '保存修改'
      }
    },
    async edit () {
      console.log(this.isEdit)
      if (this.isEdit) {
        let pel = JSON.parse(JSON.stringify(this.personList))
        let count = 0
        for (let i = 0; i < pel.length; i++) {
          if (!pel[i].userUuid) {
            pel[i].userUuid = pel[i].uuid;
          }
          if (pel[i].type === 'del') {
            count++
          }
          if (pel[i].type === 'add') {
            count++
          }
        }
        if (count === 1) {
          pel.splice(0, 1)
        } else if (count === 2) {
          pel.splice(0, 2)
        }
        let par = {
          meetingId: this.meetingId,
          topic: this.meetingName,
          meetingTime: this.meetingTime,
          creatorId: this.creatorId,
          people: pel,
          materials: this.fileList
        }
        try {
          const res = await updataMeeting(par)
          if (res.code === 0) {
            this.$notify({
              type: 'success',
              message: '保存成功'
            })
            this.isEdit = false
            this.editText = '重新编辑'
            this.personList = JSON.parse(JSON.stringify(pel))
          }
        } catch (e) {
          this.$notify({
            type: 'danger', message: e.message
          })
        }
      } else {
        this.isEdit = true
        this.editText = '保存修改'
        if (this.personList.length > 0) {
          this.personList.unshift({
            type: 'del',
            name: '',
            avatar: require('../../../assets/images/del.png')
          })
        }
        this.personList.unshift({
          type: 'add',
          name: '',
          avatar: require('../../../assets/images/xinjian.png')
        })
      }
    },
    delFile (id, from) {
      if (from === 'myfile') {
        this.myFileList.forEach((item, index) => {
          if (item.fileUuid === id) {
            this.myFileList.splice(index, 1)
            this.myFileList.splice(index, 1)
            store.commit('SET_MYFILELIST', JSON.parse(JSON.stringify(this.myFileList)))
            return false
          }
        })
      } else {
        this.fileList.forEach((item, index) => {
          if (item.fileUuid === id) {
            this.fileList.splice(index, 1)
            this.fileIds.splice(index, 1)
            store.commit('SET_FILEIDS', JSON.parse(JSON.stringify(this.fileIds)))
            store.commit('SET_FILELIST', JSON.parse(JSON.stringify(this.fileList)))
            return false
          }
        })
      }
    },
    isOk () {
      if (this.type === 'add') {
        if (this.getAllPeo) {
          this.showPerson = false;
          this.getAllPeo = false;
          return false;
        }
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
        if (this.getAllPeo) {
          this.showPerson = false;
          this.getAllPeo = false;
          return false;
        }
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
        if (type === 'add') {
          this.peoList = this.allPerson
        }
        console.log(this.letterList)
        console.log(this.peoList)
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
      let s = time.getSeconds()
      if (s < 10) {
        s = '0' + s
      }
      return `${y}-${m}-${d} ${h}:${min}:${s}`
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
  padding-top: 0.16rem;
  position: absolute;
  top: 0.16rem;
  bottom: 1.48rem;
  overflow-y: auto;
  left: 0;
  right: 0;
  .home{
    height: 1.36rem;
    padding: 0.24rem 0.32rem;
    background-color: #fff;
    border-bottom: 0.08rem solid #f7f7f7;
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
        width: 100%;
        box-sizing: border-box;
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
    .meetName{
      height: 1rem;
      font-size: 0.28rem;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(17, 17, 17, 1);
      line-height: 1rem;
    }
    .isfocus{
      border-bottom: 1px solid #DE2910;
    }
  }
  .timeWrap{
    height: 1.36rem;
    padding: 0.24rem 0.32rem;
    background-color: #fff;
    border-bottom: 0.08rem solid #f7f7f7;
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
    .meetTime{
      height: 0.88rem;
      margin-top: 0.18rem;
      margin-bottom: 0.24rem;
      line-height: 0.88rem;
      font-size: 0.28rem;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(17, 17, 17, 1);
    }
  }
  .person{
    padding: 0.24rem 0.32rem;
    background-color: #fff;
    border-bottom: 0.08rem solid #f7f7f7;
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
          overflow: hidden;
          margin-bottom: 0.2rem;
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
            width: 0.62rem;
            height: 0.62rem;
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
            width: 0.62rem;
            height: 0.62rem;
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
            float: left;
            margin-top: 0.09rem;
            width: 0.68rem;
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
    border-bottom: 0.08rem solid #f7f7f7;
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
        .shoucang{
          width: 0.28rem;
          height: 0.28rem;
          background-image: url('../../../assets/images/yishoucang.png');
          background-size: cover;
          float: right;
          margin-top: 0.02rem;
        }
        .weishoucang{
          width: 0.28rem;
          height: 0.28rem;
          background-image: url('../../../assets/images/weishoucang.png');
          background-size: cover;
          float: right;
          margin-top: 0.02rem;
        }
      }
    }
  }
  .myfileWrap{
    padding: 0.24rem 0.32rem;
    background-color: #fff;
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
        .shoucang{
          width: 0.28rem;
          height: 0.28rem;
          background-image: url('../../../assets/images/yishoucang.png');
          background-size: cover;
          float: right;
          margin-top: 0.02rem;
        }
        .weishoucang{
          width: 0.28rem;
          height: 0.28rem;
          background-image: url('../../../assets/images/weishoucang.png');
          background-size: cover;
          float: right;
          margin-top: 0.02rem;
        }
      }
    }
  }
  // .isRoles{
  //   margin-bottom: 1.28rem;
  // }
  .okWrap{
    background-color: #fff;
    height: 1.28rem;
    padding: 0 0.32rem;
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
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
// .popWrap{
//   background-color: #f7f7f7;
//   .title{
//     height: 0.89rem;
//     background-color: #fff;
//     padding: 0 0.32rem;
//     .iptWrap{
//       width: 5.04rem;
//       height: 0.58rem;
//       background-color: #F7F7F7;
//       float: left;
//       margin-top: 0.16rem;
//       i{
//         float: left;
//         width: 0.28rem;
//         height: 0.28rem;
//         margin-top: 0.15rem;
//         margin-left: 0.24rem;
//         margin-right: 0.1rem;
//         background-image: url('../../../assets/images/popSearch.png');
//         background-size: cover;
//       }
//       input{
//         height: 0.58rem;
//         float: left;
//         width: 4rem;
//         border: none;
//         outline: none;
//         font-size: 0.28rem;
//         font-family:PingFang SC;
//         font-weight:400;
//         color: #999999;
//       }
//     }
//     .count{
//       height: 0.58rem;
//       line-height: 0.58rem;
//       float: right;
//       font-size:0.28rem;
//       font-family:PingFang SC;
//       font-weight:400;
//       color:rgba(51,51,51,1);
//       margin-top: 0.16rem;
//     }
//   }
//   .listWrap{
//     background-color: #f7f7f7;
//     position: absolute;
//     top: 0.89rem;
//     bottom: 1.02rem;
//     width: 100%;
//     overflow-y: auto;
//     .list{
//       .type{
//         height: 0.56rem;
//         padding-left: 0.32rem;
//         background-color: #f7f7f7;
//         font-size: 0.34rem;
//         font-family:Helvetica LT;
//         font-weight:400;
//         color:rgba(51,51,51,1);
//         line-height: 0.56rem;
//       }
//       .perList{
//         padding-left: 0.32rem;
//         background-color: #fff;
//         .people{
//           width: 100%;
//           height: 0.89rem;
//           border-top: 0.01rem solid #ddd;
//           .nameWrap{
//             width: 2.5rem;
//             float: left;
//             height: 100%;
//             padding-left: 0.24rem;
//             img{
//               width: 0.4rem;
//               height: 0.4rem;
//               float: left;
//               margin-top: 0.25rem;
//               margin-right: 0.24rem;
//             }
//             span{
//               float: left;
//               height: 100%;
//               line-height: 0.89rem;
//               font-size: 0.34rem;
//               font-family:PingFang SC;
//               font-weight:400;
//               color:rgba(51,51,51,1);
//             }
//           }
//           .check{
//             float: right;
//             margin-right: 0.3rem;
//             margin-top: 0.25rem;
//             span{
//               width: 0.4rem;
//               height: 0.4rem;
//               float: left;
//               background-image: url('../../../assets/images/popDel.png');
//               background-size: cover;
//             }
//           }
//         }
//         .people:first-child{
//           border: none;
//         }
//       }
//     }
//   }
//   .foot{
//     height: 1.02rem;
//     position: absolute;
//     bottom: 0;
//     padding: 0 0.32rem;
//     button{
//       width: 6.86rem;
//       height: 0.88rem;
//       float: left;
//       outline: none;
//       border: none;
//       background-color: #EB3017;
//       border-radius: 0.08rem;
//       font-size: 0.35rem;
//       font-family:PingFang SC;
//       font-weight:500;
//       color:rgba(255,255,255,1);
//     }
//   }
// }
</style>
<style lang="wxss">
  page{
    background-color:#fff !important;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>