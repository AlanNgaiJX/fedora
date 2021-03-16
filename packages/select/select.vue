<!--
 * @Author: your name
 * @Date: 2021-03-12 15:53:55
 * @LastEditTime: 2021-03-16 17:47:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/select/select.vue
-->
<template>
  <div class="fe-select" ref="self" :class="selectClasses" v-click-outside="handleBlur">
    <div class="active-option" @click="handleClickSelect">
      <!-- 图标 -->
      <fe-icon :name="icon" class="select-icon" v-if="icon" />

      <!-- value展示 -->
      <span class="active-option-content">
        <span class="value" v-if="value">{{ value }}</span>
        <span class="placeholder" v-else>{{ placeholder }}</span>
      </span>
      <!-- 箭头 -->
      <fe-icon name="fe-down" class="active-option-icon" />
    </div>
    <!-- 选择列表 -->
    <transition
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <div class="select-options mini-scroll" v-show="expanded" :style="optionsStyle">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import {
  defineComponent, ref, computed, provide,
} from 'vue';
import directives from '../common/js/directives';

export default defineComponent({
  name: 'fe-select',
  directives: {
    clickOutside: directives.clickOutside,
  },
  props: {
    icon: { // 图标
      type: String,
      default: '',
    },
    value: { // 值
      type: [String, Number],
    },
    placeholder: { // placeholder
      type: String,
      default: '请输入',
    },
    height: { // 限制高度
      type: [Number, String],
      default: 'auto',
    },
  },
  setup(props, context) {
    const self = ref(null);
    const expanded = ref(false);

    const selectClasses = computed(() => {
      const classes = [];
      if (expanded.value) {
        classes.push('expanded');
      }
      return classes;
    });

    const optionsStyle = computed(() => {
      const style = {};
      if (props.height.replace('.', '').match(/[D]/)) {
        style.height = props.height;
      } else {
        style.height = `${props.height}px`;
      }
      return style;
    });

    function handleClickSelect() {
      expanded.value = !expanded.value;
    }

    function handleClickOption(e, value) {
      expanded.value = false;
      context.emit('update:value', value);
    }

    function handleBlur() {
      expanded.value = false;
    }

    provide('handleClickOption', handleClickOption);
    provide(
      'activeValue',
      computed(() => props.value),
    );

    return {
      self,
      handleClickSelect,
      handleBlur,
      expanded,
      selectClasses,
      optionsStyle,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../common/styles/_var.scss';

$select-height: 35px;

.fe-select {
  position: relative;
  width: 150px;
  height: $select-height;
  box-sizing: border-box;
  border: 1px solid $border-color;
  border-radius: $border-radius;

  .active-option {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    cursor: pointer;

    .select-icon {
      width: 18px;
      height: 18px;
      margin-right: 8px;
      color: $color-text-secondary;
    }

    .active-option-content {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      .value {
        color: $color-text-paragraph;
      }

      .placeholder {
        color: $color-text-placeholder;
      }
    }

    .active-option-icon {
      position: relative;
      top: -2px;
      color: $color-text-secondary;
      transform: rotate(0deg);
      transition: transform 0.3s;
    }
  }

  .select-options {
    width: 100%;
    height: auto;
    background-color: #fff;
    margin-top: 5px;
    box-shadow: $default-box-shadow;
    border-radius: 2px;
    overflow: auto;
    z-index: 1;
    position: relative;
  }

  &.expanded {
    .active-option-icon {
      transform: rotate(180deg);
    }
  }
}
</style>
