<!--
 * @Author: your name
 * @Date: 2021-03-14 02:43:41
 * @LastEditTime: 2021-03-14 14:34:51
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
import directives from '../directives';

export default defineComponent({
  name: 'fe-slider',
  props: {
    value: {
      type: Number,
      required: true,
    },
    toFixed: {
      type: Number,
      default: 3,
    },
    disable: {
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
          'background-color': '#000000',
          transition: 'width 1s',
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
@import "../../styles/_var.scss";

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
          background-color: black;
          border-radius: 50%;
          transform: translate(-40%, 0);
          border-radius: 50%;
        }
        &::after {
          content: '';
          display: block;
          height: 15px;
          width: 2px;
          background-color: black;
        }
      }
    }
  }
}
</style>
