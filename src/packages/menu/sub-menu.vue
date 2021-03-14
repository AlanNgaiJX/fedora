<!--
 * @Author: your name
 * @Date: 2021-03-11 21:14:07
 * @LastEditTime: 2021-03-12 23:57:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/menu/sub-menu.vue
-->
<template>
  <div class="fe-sub-menu" :class="subMenuClasses" :data-mark="mark">
    <div class="menu-big-title" :data-mark="mark" v-if="$slots.title">
      <slot name="title"></slot>
    </div>
    <fe-menu-item v-if="title" v-text="title" :mark="mark"></fe-menu-item>
    <div class="sub-menu" v-show="!folded">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, inject } from 'vue';

export default defineComponent({
  name: 'fe-sub-menu',
  props: {
    title: {
      type: String,
      default: '',
    },
    mark: {
      type: String,
      require: true,
    },
    foldable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const path = inject('path', []);
    const target = inject('target', '');
    const activeStyleLayer = inject('activeStyleLayer');

    const subMenuClasses = computed(() => {
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
      return classes;
    });

    const folded = computed(() => {
      let result = false;
      const index = path.value.indexOf(props.mark);
      if (props.foldable && index < 0) {
        result = true;
      }
      return result;
    });
    return {
      subMenuClasses, folded, target, activeStyleLayer,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../../styles/_var.scss';

.fe-sub-menu {
  .menu-big-title {
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
  }

  .sub-menu {
    // padding-left: 20px;
    overflow: hidden;
    transition: max-height 0.3s;
  }

  &.active {
  }

  &.activeStyle {
    .menu-big-title {
      color: $primary;
    }
  }
}
</style>
