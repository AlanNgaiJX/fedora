<!--
 * @Author: your name
 * @Date: 2021-03-14 02:43:41
 * @LastEditTime: 2021-03-16 19:59:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/slider/slider.vue
-->
<template>
  <div class="fe-slider">
    <div class="wrap" ref="wrapRef">
      <div class="currValue" :style="valueStyle" ref="currValueRef" v-drag="onDrag">
        <div class="controller"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import directives from '../common/js/directives';

export default defineComponent({
  name: 'fe-slider',
  props: {
    value: { // 值
      type: Number,
      required: true,
    },
    toFixed: { // 精度到小数点几位
      type: Number,
      default: 3,
    },
    disable: { // 不可操作
      type: Boolean,
      default: false,
    },
  },
  directives: {
    drag: directives.drag,
  },
  setup(props, context) {
    const wrapRef = ref(null);
    const currValueRef = ref(null);
    const currValue = computed(() => props.value);
    const valueStyle = computed(() => {
      if (props.disable) {
        return {
          width: '100%',
          'background-color': '#ddd',
          transition: 'width 1s',
          cursor: 'not-allowed',
        };
      }
      return {
        width: `${currValue.value * 100}%`,
        transition: 'none',
      };
    });

    let cacheValue = 0;

    function onDrag(status, { startPoint, endPoint }) {
      if (props.disable) {
        return;
      }
      if (status === 'start') {
        cacheValue = currValue.value;
      }
      if (status === 'move') {
        const wrapDom = wrapRef.value;
        const offsetX = endPoint.x - startPoint.x;

        if (wrapRef.value) {
          let _currValue = cacheValue + offsetX / wrapDom.offsetWidth;
          _currValue < 0 && (_currValue = 0);
          _currValue > 1 && (_currValue = 1);
          _currValue = parseFloat(_currValue.toFixed(props.toFixed));
          context.emit('update:value', _currValue);
        }
      }
    }
    return {
      wrapRef, currValueRef, valueStyle, onDrag,
    };
  },
});
</script>

<style lang="scss">
@import "../common/styles/_var.scss";

.fe-slider {
  width: 100%;

  .wrap {
    background-color: #e4e7ed;
    position: relative;
    height: 8px;
    width: 100%;
    border-radius: 5px;
    box-sizing: border-box;

    .currValue {
      background-color: $primary;
      height: 100%;
      border-radius: 5px;
      position: relative;
      cursor: pointer;

      .controller {
        position: absolute;
        right: -8px;
        width: 10px;
        transform: translateY(-50%);
        cursor: pointer;
        box-sizing: border-box;

        &::before {
          content: '';
          display: block;
          width: 10px;
          height: 10px;
          background-color: #000;
          border-radius: 50%;
          transform: translate(-40%, 0);
          border-radius: 50%;
        }
        &::after {
          content: '';
          display: block;
          height: 15px;
          width: 2px;
          background-color: #000
        }
      }
    }
  }
}
</style>
