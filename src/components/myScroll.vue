<template>
  <scroll-view 
    class="scrollView"
    :class="{'animate': animateStatus}"
    scroll-with-animation
    enable-back-to-top
    :refreshing="refreshing"
    :scroll-y="true"
    :lower-threshold="lowerThreshold"
    @touchstart="_start"
    @touchmove="_move"
    @touchend="_end"
    @scrolltoupper="scrolltoupper"
    @scroll="scroll" @scrolltolower="scrolltolower"
    :style="'transform: translateY(' + transitionY + 'px)'">
    <div class="noData" v-if="(!fileList || fileList.length === 0) && requested">
      <img :src="noData"/>
      <span>暂无数据</span>
    </div>
    <div class="pulldown">
      <div v-if="transitionY < 0 && !isReques && !finishEd">
        <p> {{pullText}}</p>
      </div>
      <div v-else-if="transitionY >= 0 && !isReques && !finishEd">
        <p> {{releaseText}}</p>
      </div>
      <div v-else-if="isReques && transitionY === 0 && !finishEd" class="loadingWrap">
        <slot name="loading"></slot><p> {{loadingText}}...</p>
      </div>
      <div v-else-if="finishEd && transitionY < 0 && !isReques">
        <p class="iconfont icon-complete" space="nbsp"></p><p class="loadingText"> {{finishText}}</p>
      </div>
    </div>
    <slot></slot>
    <div v-if="isBottom" class="noMore">暂无更多数据</div>
  </scroll-view>
</template>
<script>
export default {
  data () {
    return {
      pullText: '下拉可刷新',
      releaseText: '松开立即刷新',
      loadingText: '正在刷新数据中',
      finishText: '刷新完成',
      refurbish: true, // 是否开启下拉刷新
      startClientX: 0,
      startClientY: 0,
      animateStatus: true,
      isBottom: false,
      refreshing: true,
      transitionY: -40
    }
  },
  props: {
    pullText: {
      type: String,
      default: '下拉可刷新'
    },
    fileList: {
      type: Array,
      default: []
    },
    releaseText: {
      type: String,
      default: '松开立即刷新'
    },
    loadingText: {
      type: String,
      default: '正在刷新数据中'
    },
    finishText: {
      type: String,
      default: '刷新完成'
    },
    upperThreshold: {
      type: Number,
      default: 40
    },
    lowerThreshold: {
      type: Number,
      default: 50
    },
    angle: {
      type: Number,
      default: 0.5
    },
    isReques: {
      type: Boolean,
      default: false
    },
    finishEd: {
      type: Boolean,
      default: false
    },
    isBottom: {
      type: Boolean,
      default: false
    },
    transY: {
      type: Number,
      default: -40
    },
    ty: {
      type: Number,
      default: -40
    }
  },
  watch: {
    ty () {
      this.transitionY = this.ty;
    }
  },
  methods: {
    scrolltoupper () {
      console.log('到顶部了');
      this.refurbish = true;
    },
    scrolltolower () {
      console.log('到底部了');
      if (this.isBottom) {
        return;
      }
      this.$emit('scrolltolower');
    },
    _start: function (e) { // 记录开始位置
      // console.log(e, '_start');
      console.log(e);
      this.startClientX = Math.abs(e.mp.changedTouches[0].clientX);
      this.startClientY = Math.abs(e.mp.changedTouches[0].clientY);
    },
    _move: function (e) { // 是否进行移动
      // console.log(e, '_move');
      if (this.refurbish) {
        let clientX = Math.abs(e.mp.changedTouches[0].clientX);
        let clientY = Math.abs(e.mp.changedTouches[0].clientY);
        let startClientX = this.startClientX;
        let startClientY = this.startClientY;
        let defaultAngle = this.angle;
        let angle = (clientX - startClientX) / (clientY - startClientY);
        console.log('横向:' + (clientX - startClientX), '纵向:' + (clientY - startClientY))
        if (Math.abs(angle) < defaultAngle) {
          let moveDistance = (clientY - startClientY) <= 0 ? 0 : (clientY - startClientY) / 2;
          if (moveDistance < 0) return false; // 阻止方向滑出
          this.transitionY = moveDistance + this.transY;
          this.animateStatus = false;
        }
      }
    },
    _end: function (e) { // 手势是否离开界面
      // console.log(e, '_end');
      let translateY = this.transitionY;
      // if (translateY > 50) this.triggerEvent('scrolltoupper');
      let trsy = translateY > 0 ? 0 : this.transY;
      this.transitionY = trsy;
      this.animateStatus = translateY > 0;
      if (translateY > 0) {
        this.requested = false;
        this.$emit('scrolltoupper', true, false, trsy);
        // this.getList('new');
      }
    },
    scroll (e) {
      // let upperThreshold = this.upperThreshold;
      if (e.mp.detail.scrollTop < this.upperThreshold) this.refurbish = true;
      else this.refurbish = false;
    }
  }
}
</script>
<style lang="scss" scoped>
.scrollView{
  height: calc(100% + 40px);
  .noMore{
    font-size: 0.28rem;
    line-height: 1rem;
    text-align: center;
    height: 1rem;
  }
  .pulldown {
    height: 40px;
    width: 100%;
    line-height: 40px;
    text-align: center;
    position: relative;
    .loadingWrap{
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
      .loadingText{
        float: left;
      }
    }
    p{
      font-size: 0.28rem;
    }
  }
}
.scrollView.animate {
  transition: all 0.4s;
}
</style>