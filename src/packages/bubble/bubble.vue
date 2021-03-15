<!--
 * @Author: your name
 * @Date: 2021-03-13 16:23:06
 * @LastEditTime: 2021-03-15 20:43:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/bubble/bubble.vue
-->
<template>
  <transition @enter="handleEnter" @leave="handleLeave">
    <div class="fe-bubble" v-if="visable">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import { defineComponent } from 'vue';
import { getPageXY } from './common';

export default defineComponent({
  name: 'fe-bubble',
  props: {
    visable: {
      // bubble内容是否可见，不可见时触发动画
      type: Boolean,
      require: true,
    },
    relTo: {
      // 一个选择器，回收到哪个元素
      type: String,
      require: true,
    },
    animateDuration: {
      // 动画持续时间
      type: Number,
      default: 1,
    },
  },
  methods: {
    handleEnter(el, done) {
      el.style.transform = 'translate(0, 0) scale(1)';
      el.style.transition = 'none';
      done();
    },
    handleLeave(el, done) {
      const target = document.querySelector(this.relTo);
      const selfEl = this.$el;
      const targetXy = getPageXY(target);
      const selfXy = getPageXY(selfEl);
      const diffX = targetXy.x - selfXy.x;
      const diffY = targetXy.y - selfXy.y;
      el.offsetWidth;
      el.style.transition = `all ${this.animateDuration}s ease`;
      el.style.transformOrigin = '0% 0%';
      el.style.transform = `translate(${diffX}px, ${diffY}px) scale(0)`;
      setTimeout(() => {
        done();
      }, this.animateDuration * 1000);
    },
  },
});
</script>

<style lang="scss" scoped>
.fe-bubble {
  display: inline-block;
}
</style>
