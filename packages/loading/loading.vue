<!--
 * @Author: your name
 * @Date: 2021-03-14 11:32:56
 * @LastEditTime: 2021-03-16 17:51:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/loading/loading.vue
-->
<template>
  <div class="fe-loading" ref="self" :style="style">
    <fe-shadow-shade v-if="mask" :opacity="maskOpacity"></fe-shadow-shade>
    <div class="position-wrap" :class="classes">
      <div class="fe-loading-wrap" :style="wrapStyle">
        <fe-spin :type="type" :size="size" :speed="speed"></fe-spin>
        <div class="title" v-text="title"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'fe-loading',
  props: {
    title: {
      // 内容
      type: String,
      require: true,
    },
    mask: {
      // 是否显示遮罩
      type: Boolean,
      default: true,
    },
    maskOpacity: {
      // 遮罩透明度
      type: Number,
      default: 0,
    },
    position: {
      // 位置
      type: String,
      default: 'default',
      validate(position) {
        return ['default', 'top', 'middle', 'bottom'].includes(position);
      },
    },
    type: {
      // 图标
      type: String,
      default: 'CHASE',
      validator(type) {
        return (
          typeof type === 'string'
          && [
            'PLANE',
            'CHASE',
            'BOUNCE',
            'WAVE',
            'PULSE',
            'FLOW',
            'SWING',
            'CIRCLE',
            'CIRCLE-FADE',
            'GRID',
            'FOLD',
            'WANDER',
          ].includes(type)
        );
      },
    },
    size: {
      // 大小
      type: Number,
      default: 40, // px
    },
    speed: {
      // 旋转速度
      type: Number,
      default: 1,
      validator(value) {
        return typeof value === 'number' && value > 0;
      },
    },
  },
  data() {
    return {
      timer: null,
    };
  },
  computed: {
    classes() {
      const _classes = [];
      _classes.push(`position-${this.position}`);
      return _classes;
    },
    style() {
      return {};
    },
    wrapStyle() {
      return {};
    },
  },
});
</script>

<style lang="scss">
@import '../common/styles/_var.scss';

.fe-loading {
  .position-wrap {
    position: fixed;
    top: 0;
    left: 0;
    max-width: 30%;
    z-index: 1;

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

    .fe-loading-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        margin-top: 25px;
        color: #bbb;
        font-size: 14px;
      }
    }
  }
}
</style>
