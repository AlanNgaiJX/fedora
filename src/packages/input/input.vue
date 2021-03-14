<!--
 * @Author: your name
 * @Date: 2021-03-12 22:55:42
 * @LastEditTime: 2021-03-14 21:42:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/input/input.vue
-->
<template>
  <div class="fe-input" :class="inputClasses">
    <div class="detail" v-if="$slots.default || $slots.hint || $slots.unvalidText">
      <span class="label" v-if="$slots.default">
        <slot></slot>
      </span>
      <span class="hint" v-if="$slots.hint">
        <slot name="hint"></slot>
      </span>
      <span class="unvalidText" v-if="$slots.unvalidText && !valid">
        <slot name="unvalidText"></slot>
      </span>
    </div>
    <div class="input-wrap">
      <fe-icon v-if="leftIcon" :name="leftIcon" class="left-icon" />
      <input
        :type="type"
        @input="handleInput"
        :value="value"
        :placeholder="placeholder"
        @focus="handleFocus"
        @blur="handleBlur"
        :disabled="disable"
      />
      <div class="counter" v-if="count">{{ counter }}</div>
      <div class="cancel" v-if="cancelable && value.length" @click="cancel">
        <fe-icon name="fe-stroke-close" class="cancel-icon" />
      </div>
      <fe-icon v-if="rightIcon" :name="rightIcon" class="right-icon" />
    </div>
  </div>
</template>

<script>
import {
  defineComponent, ref, onMounted, watch, computed,
} from 'vue';

export default defineComponent({
  name: 'fe-input',
  props: {
    value: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    width: {
      type: [String, Number],
      default: '100%',
    },
    placeholder: {
      type: String,
      default: '',
    },
    fontSize: {
      type: [String, Number],
      default: '14px',
    },
    cancelable: {
      type: Boolean,
      default: false,
    },
    validator: {
      type: Function,
      default: () => true,
    },
    leftIcon: {
      type: String,
      default: '',
    },
    rightIcon: {
      type: String,
      default: '',
    },
    disable: {
      type: Boolean,
      default: false,
    },
    maxLength: {
      type: [Number, String],
    },
    count: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const valid = ref(true);
    const counter = ref(0);
    const focus = ref(false);

    const inputClasses = computed(() => {
      const classes = [];
      if (!valid.value) {
        classes.push('unvalid');
      }
      if (props.disable) {
        classes.push('disable');
      }
      if (focus.value) {
        classes.push('focus');
      }
      return classes;
    });

    // 更新counter
    function updateCounter(currValue) {
      const maxLength = props.maxLength * 1;
      if (maxLength) {
        counter.value = maxLength - currValue.length;
      } else {
        counter.value = currValue.length;
      }
    }

    // 更新验证器
    function updateValid(currValue) {
      valid.value = props.validator(currValue);
    }

    // 清空
    function cancel() {
      context.emit('update:value', '');
    }

    function handleInput(e) {
      let { value } = e.target;
      const maxLength = props.maxLength * 1;
      if (maxLength && value.length > maxLength) {
        value = value.slice(0, maxLength);
        e.target.value = value;
      }
      context.emit('update:value', value);

      updateValid(value);
    }

    function handleFocus() {
      focus.value = true;
    }

    function handleBlur() {
      focus.value = false;

      if (props.required) {
        updateValid(props.value);
      }
    }

    // 监听 props.value，发生改变则更新counter
    watch(
      () => props.value,
      (value) => {
        updateCounter(value);
      },
    );

    onMounted(() => {
      // 验证初始值
      if (props.value.length) {
        updateValid(props.value);
      }

      // 初始化counter
      updateCounter(props.value);
    });

    return {
      cancel,
      handleInput,
      handleFocus,
      handleBlur,
      counter,
      valid,
      inputClasses,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../styles/_var.scss';

.fe-input {
  .detail {
    margin-bottom: 10px;

    .label {
      font-size: 15px;
      color: $color-text-secondary;
    }

    .hint {
      font-size: 12px;
      color: $color-text-placeholder;
      margin-left: 5px;
    }

    .unvalidText {
      font-size: 12px;
      color: $danger;
      margin-left: 5px;
    }
  }

  .input-wrap {
    border: 1px solid $border-color;
    border-radius: $border-radius;
    display: flex;
    align-items: center;
    overflow: hidden;
    transition: border 0.3s;

    input {
      flex: 1;
      border: none;
      outline: none;
      padding: 8px;
      display: block;
      font-size: 14px;
      color: $color-text-paragraph;
    }

    .counter {
      color: $color-text-secondary;
      padding: 5px;
    }

    .cancel {
      padding: 5px;
      cursor: pointer;

      .cancel-icon {
        width: 18px;
        height: 18px;
        color: $color-text-secondary;
      }
    }

    .left-icon {
      width: 18px;
      height: 18px;
      padding: 8px;
      color: $color-text-secondary;
    }

    .right-icon {
      width: 18px;
      height: 18px;
      padding: 8px;
      color: $color-text-secondary;
    }
  }

  &.unvalid {
    .input-wrap {
      border-color: $danger;
    }
  }

  &.focus {
    .input-wrap {
      border-color: $primary;
    }
  }

  &.disable {
    .input-wrap {
      cursor: not-allowed;
      input {
        cursor: not-allowed;
      }
    }
  }
}
</style>
