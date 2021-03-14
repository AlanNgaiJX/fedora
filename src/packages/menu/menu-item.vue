<!--
 * @Author: your name
 * @Date: 2021-03-11 21:48:12
 * @LastEditTime: 2021-03-12 15:49:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/menu/menu-item.vue
-->
<template>
  <div class="fe-menu-item" ref="self" :data-mark="mark" :class="menuItemClasses">
    <slot></slot>
  </div>
</template>

<script>
import {
  defineComponent, computed, inject, onMounted, ref,
} from 'vue';
import { getPath } from './common';

export default defineComponent({
  name: 'fe-menu-item',
  props: {
    // 唯一key
    mark: {
      type: String,
      require: true,
    },
  },
  setup(props) {
    const self = ref(null);
    const layer = ref(0);

    const root = inject('root');
    const path = inject('path', []);
    const target = inject('target', '');
    const activeStyleLayer = inject('activeStyleLayer');

    const menuItemClasses = computed(() => {
      const classes = [];
      const index = path.value.indexOf(props.mark);
      if (index > -1) {
        classes.push('active');
        if (activeStyleLayer.value < 0) {
          classes.push('activeStyle');
        } else if (index < activeStyleLayer.value) {
          classes.push('activeStyle');
        }
      }

      if (target.value === props.mark) {
        classes.push('focusStyle');
      }

      classes.push(`pd-left-${layer.value - 1}`);
      return classes;
    });

    function setLayer() {
      const fullPath = getPath(self.value, root.value);
      layer.value = fullPath.indexOf(props.mark) + 1;
    }

    onMounted(() => {
      setLayer();
    });

    return {
      self,
      menuItemClasses,
      target,
      activeStyleLayer,
    };
  },
});
</script>

<style lang="scss">
@import '../../styles/_var.scss';

.fe-menu-item {
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  border-right: 3px solid transparent;

  &:hover {
  }

  @for $i from 1 through 999 {
    &.pd-left-#{$i} {
      padding-left: $i * 20px;
    }
  }

  &.active {
  }

  &.activeStyle {
    color: $primary;
  }

  &.focusStyle {
    border-right: 3px solid $primary;
    background-color: $primary-bg;
  }
}
</style>
