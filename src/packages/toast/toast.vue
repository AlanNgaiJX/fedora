<!--
 * @Author: your name
 * @Date: 2021-03-14 11:32:56
 * @LastEditTime: 2021-03-16 00:56:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/toast/toast.vue
-->
<template>
  <div class="fe-toast" ref="self" :class="classes" :style="style">
    <div class="fe-toast-wrap" :style="wrapStyle">
      <fe-icon
        :name="icon"
        class="toast-icon"
        color="#fff"
        v-if="icon"
      />
      <div v-html="html" v-if="html"></div>
      <div v-text="title" v-else></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'fe-toast',
  props: {
    title: { // 内容
      type: String,
      require: true,
    },
    icon: { // 图标
      type: String,
    },
    html: { // v-html
      type: String,
    },
    duration: { // 持续时间
      type: Number,
      default: 1.5,
    },
    mask: { // 显示遮罩
      type: Boolean,
      default: true,
    },
    destroy: {
      // 销毁实例的方法
      type: Function,
      require: true,
    },
    enterAnimate: { // 进入动画
      type: String,
      default: 'fadeIn',
      validate(animate) {
        return ['none', 'fadeIn', 'slideInDown', 'slideInUp'].includes('animate');
      },
    },
    leaveAnimate: { // 离开动画
      type: String,
      default: 'fadeOut',
      validate(animate) {
        return ['none', 'fadeOut', 'slideOutDown', 'slideOutUp'].includes(animate);
      },
    },
    animateSpeed: { // 动画速度
      type: Number,
      default: 5, // 建议3~6
    },
    position: { // 方位
      type: String,
      default: 'default',
      validate(position) {
        return ['default', 'top', 'middle', 'bottom'].includes(position);
      },
    },
    background: { // 背景
      type: String,
      default: 'rgba(187, 187, 187, 0.872)',
    },
    color: { // 颜色
      type: String,
      default: '#fff',
    },
    maxWidth: { // 最大宽度
      type: [String, Number],
      default: '30%',
    },
  },
  data() {
    return {
      timer: null,
      status: 0, // 生命周期， 0进入, 1展示, 2离开
    };
  },
  computed: {
    classes() {
      const _classes = [];
      _classes.push(`position-${this.position}`);
      return _classes;
    },
    style() {
      return {
        maxWidth: this.maxWidth,
      };
    },
    wrapStyle() {
      let animation = 'none';

      this.status === 0 && (animation = this.enterAnimate);
      this.status === 2 && (animation = this.leaveAnimate);

      return {
        animation,
        animationDuration: `${this.duration / this.animateSpeed}s`,
        background: this.background,
        color: this.color,
      };
    },
  },
  methods: {
    close() {
      this.destroy && typeof this.destroy === 'function' && this.destroy();
    },
    setKiller() {
      this.timer = setTimeout(() => {
        this.close();
      }, this.duration * 1000);
    },
    lifecycle() {
      let count = 0;
      const initTime = new Date().getTime();
      const duration = this.duration * 1000;
      const enterPoint = duration / this.animateSpeed;
      const leavePoint = duration - duration / this.animateSpeed;
      const run = () => {
        const currTime = new Date().getTime();
        count = currTime - initTime;
        // 设置状态
        if (count >= 0 && count < enterPoint) {
          this.status = 0; // 进入
        } else if (count >= enterPoint && count < leavePoint) {
          this.status = 1; // 展示
        } else if (count > leavePoint) {
          this.status = 2; // 离开
        }
        if (count < duration) {
          requestAnimationFrame(run);
        }
      };
      // kick off
      run();
    },
  },
  mounted() {
    this.setKiller();
    this.lifecycle();
  },
  unmounted() {
    this.timer && clearTimeout(this.timer);
  },
});
</script>

<style lang="scss">
@import '../styles/_var.scss';

.fe-toast {
  position: fixed;
  top: 0;
  left: 0;
  max-width: 30%;

  &.position-default {
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }

  &.position-middle {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &.position-top {
    left: 50%;
    top: 0%;
    transform: translate(-50%, 0);
  }

  &.position-bottom {
    left: 50%;
    top: 100%;
    transform: translate(-50%, -100%);
  }

  .fe-toast-wrap {
    background-color: rgba(187, 187, 187, 0.872);
    height: auto;
    word-wrap: break-word;
    word-break: break-all;
    color: #fff;
    padding: 0.5rem;
    border-radius: $border-radius;

    .toast-icon{
      margin: 5px auto;
      width: 23px;
      height: 23px;
    }
  }
}
</style>
