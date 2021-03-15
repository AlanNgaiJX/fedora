<!--
 * @Author: your name
 * @Date: 2021-03-12 20:59:28
 * @LastEditTime: 2021-03-15 16:53:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/switch/switch.vue
-->
<template>
  <div class="fe-switch">
    <div class="outerText left" v-if="outerText">{{ format.off }}</div>

    <!-- 主体 -->
    <div class="vessel" @click="switchState" :class="switchClassed">
      <div class="inner-text" v-if="innerText">
        <span v-show="isOn" class="left">{{ format.on }}</span>
        <span v-show="!isOn" class="right">{{ format.off }}</span>
      </div>
      <div class="slide-btn" :style="style"></div>
    </div>

    <div class="outerText right" v-if="outerText">{{ format.on }}</div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'fe-switch',
  props: {
    value: { // 值
      type: [Number, String, Boolean],
    },
    format: { // 版式
      type: Object,
      default() {
        return {
          on: true,
          off: false,
        };
      },
    },
    innerText: { // 是否内置文字
      type: Boolean,
      default: false,
    },
    outerText: { // 是否外置文字
      type: Boolean,
      default: false,
    },
    disable: { // 是否可用
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const diff = {
      left: 2,
      right: 23,
    };

    const isOn = computed(() => {
      if (props.value === props.format.on) {
        return true;
      }
      return false;
    });

    const style = computed(() => ({
      transform: `translateX(${isOn.value ? diff.right : diff.left}px)`,
    }));

    const switchClassed = computed(() => {
      const classes = [];
      if (isOn.value) {
        classes.push('active');
      }
      if (props.disable) {
        classes.push('disable');
      }
      return classes;
    });

    function switchState() {
      if (props.disable) {
        return;
      }
      context.emit('update:value', isOn.value ? props.format.off : props.format.on);
    }

    return {
      style,
      switchState,
      switchClassed,
      isOn,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../styles/_var.scss';

.fe-switch {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  .outerText {
    font-size: 14px;
    color: $color-text-secondary;

    &.left {
      margin-right: 10px;
    }

    &.right {
      margin-left: 10px;
    }
  }

  .vessel {
    position: relative;
    width: 50px;
    height: 27px;
    border-radius: 50px;
    background-color: $fill-deep-grey;
    box-shadow: $default-box-shadow;
    border: 1px solid $border-color;
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color 0.2s;

    &.active {
      background-color: $primary;
    }

    &.disable {
      background-color: $fill-disabled;
      cursor: not-allowed;
    }

    .inner-text {
      span {
        position: absolute;
        height: 100%;
        width: 50%;
        font-size: 12px;
        color: #fff;
        line-height: 25px;
        text-align: center;

        &.left {
          left: 1px;
        }

        &.right {
          right: 1px;
        }
      }
    }

    .slide-btn {
      position: absolute;
      height: 21px;
      width: 21px;
      margin: auto 0;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border-radius: 100%;
      background: #fff;
      transition: all 0.3s;
      box-shadow: $default-box-shadow;
    }
  }
}
</style>
