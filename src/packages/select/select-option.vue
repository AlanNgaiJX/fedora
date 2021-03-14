<!--
 * @Author: your name
 * @Date: 2021-03-12 15:53:55
 * @LastEditTime: 2021-03-12 20:54:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/select/select.vue
-->
<template>
  <div class="fe-select-option" :class="optionClass" :data-value="value" @click="handleClick">
    <fe-icon :name="icon" class="option-icon" v-if="icon" />
    <span class="option-content">
      <slot></slot>
    </span>
    <fe-icon name="fe-check" class="active-icon" v-show="isActive" />
  </div>
</template>

<script>
import {
  defineComponent, onMounted, inject, computed,
} from 'vue';

export default defineComponent({
  name: 'fe-select-option',
  props: {
    icon: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      require: true,
    },
    default: {
      type: Boolean,
      default: false,
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const handleClickOption = inject('handleClickOption');
    const activeValue = inject('activeValue');

    const isActive = computed(() => activeValue.value === props.value);
    const optionClass = computed(() => {
      const calsses = [];
      if (props.disable) {
        calsses.push('disable');
      }
      if (isActive.value) {
        calsses.push('active');
      }
      return calsses;
    });

    function handleClick(e) {
      if (props.disable) {
        return;
      }
      handleClickOption(e, props.value);
    }

    onMounted(() => {
      if (props.default) {
        handleClickOption(null, props.value);
      }
    });
    return { handleClick, optionClass, isActive };
  },
});
</script>

<style lang="scss" scoped>
@import '../../styles/_var.scss';

.fe-select-option {
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 10px;
  box-sizing: border-box;
  color: $color-text-base;
  background-color: #fff;
  transition: background-color 0.2s;

  .option-content {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .active-icon{
    width: 18px;
    height: 18px;
    color: $primary;
    margin-left: 5px;
  }

  &:hover {
    background-color: $primary-bg;
  }

  &.disable {
    cursor: not-allowed;
    color: $color-text-disabled;
    background-color: $fill-grey;
  }
}
</style>
