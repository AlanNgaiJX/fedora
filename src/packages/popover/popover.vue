<!--
 * @Author: your name
 * @Date: 2021-03-13 14:29:38
 * @LastEditTime: 2021-03-14 15:40:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/popover/popover.vue
-->
<template>
  <div class="fe-popover" ref="popover">
    <div
      ref="contentWrapper"
      class="content-wrapper"
      v-if="visible"
      :class="{ [`position-${position}`]: true }"
    >
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import {
  defineComponent, ref, onMounted, nextTick, onUnmounted,
} from 'vue';

export default defineComponent({
  name: 'fe-popover',
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0;
      },
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0;
      },
    },
  },
  setup(props) {
    // refs
    const popover = ref(null);
    const contentWrapper = ref(null);
    const triggerWrapper = ref(null);

    // data
    const visible = ref(false);

    function close() {
      visible.value = false;
    }

    function handleBlur(e) {
      if (popover.value && (popover.value === e.target || popover.value.contains(e.target))) {
        return;
      }

      if (
        contentWrapper.value
        && (contentWrapper.value === e.target || contentWrapper.value.contains(e.target))
      ) {
        return;
      }
      close();
    }

    function positionConetent() {
      document.body.appendChild(contentWrapper.value);
      const {
        top, left, width, height,
      } = triggerWrapper.value.getBoundingClientRect();
      const { height: height2 } = contentWrapper.value.getBoundingClientRect();
      const positions = {
        top: { top: top + window.scrollY, left: left + window.scrollX },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX,
        },
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX,
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + width + window.scrollX,
        },
      };
      contentWrapper.value.style.top = `${positions[props.position].top}px`;
      contentWrapper.value.style.left = `${positions[props.position].left}px`;
    }

    function open() {
      visible.value = true;
      nextTick(() => {
        positionConetent();
        document.addEventListener('click', handleBlur);
      });
    }

    function onClick(event) {
      if (triggerWrapper.value.contains(event.target)) {
        if (visible.value === true) {
          close();
        } else {
          open();
        }
      }
    }

    onMounted(() => {
      const trigger = props.trigger;
      if (trigger === 'click') {
        popover.value.addEventListener('click', onClick);
      } else {
        popover.value.addEventListener('mouseenter', open);
        popover.value.addEventListener('mouseleave', close);
      }
    });

    onUnmounted(() => {
      if (popover.value) {
        if (props.trigger === 'click') {
          popover.value.removeEventListener('click', onClick);
        } else {
          popover.value.removeEventListener('mouseenter', open);
          popover.value.removeEventListener('mouseleave', close);
        }
      }
    });

    return {
      popover,
      contentWrapper,
      triggerWrapper,
      visible,
      close,
    };
  },
});
</script>

<style scoped lang="scss">
@import '../styles/_var.scss';

.fe-popover {
  display: inline-block;
  position: relative;
  vertical-align: top;
}

.content-wrapper {
  background: #fff;
  font-size: 14px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  background: #fff;
  padding: 0.6rem 1rem;
  max-width: 20rem;
  word-break: break-all;
  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    border: 10px solid transparent;
    width: 0;
    height: 0;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,
    &::after {
      left: 10px;
      border-bottom: none;
    }
    &::before {
      border-top: 10px solid $border-color;
      top: 100%;
    }
    &::after {
      border-top: 10px solid #fff;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      left: 10px;
      border-top: none;
    }
    &::before {
      border-bottom: 10px solid $border-color;
      bottom: 100%;
    }
    &::after {
      border-bottom: 10px solid #fff;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
      border-right: none;
    }
    &::before {
      border-left: 10px solid $border-color;
      left: 100%;
    }
    &::after {
      border-left: 10px solid #fff;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
      border-left: none;
    }
    &::before {
      border-right: 10px solid $border-color;
      right: 100%;
    }
    &::after {
      border-right: 10px solid #fff;
      right: calc(100% - 1px);
    }
  }
}
</style>
