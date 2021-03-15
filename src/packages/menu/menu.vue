<!--
 * @Author: your name
 * @Date: 2021-03-12 13:24:29
 * @LastEditTime: 2021-03-15 18:00:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/menu/menu1.vue
-->
<template>
  <div class="fe-menu" ref="self" :style="menuStyle" @click="handleClickMenu">
    <slot></slot>
  </div>
</template>

<script>
import {
  defineComponent, ref, computed, provide,
} from 'vue';
import { getPath, getTarget } from './common';

export default defineComponent({
  name: 'fe-menu',
  props: {
    activeStyleLayer: { // active样式最高应用到那一层菜单，-1为 unlimit
      type: Number,
      default: -1,
    },
    width: { // 菜单宽度
      type: [Number, String],
      default: '100%',
    },
  },
  setup(props, context) {
    const self = ref(null);
    const path = ref([]);
    const target = ref('');

    const menuStyle = computed(() => {
      const style = {};
      if (props.width.replace('.', '').match(/[D]/)) {
        style.width = props.width;
      } else {
        style.width = `${props.width}px`;
      }
      return style;
    });

    function handleClickMenu(e) {
      const aPath = getPath(e.target, self.value);
      const aTarget = getTarget(e.target, self.value);
      if (aPath.length && aTarget) {
        path.value = aPath;
        target.value = aTarget;

        context.emit('onChange', {
          target: target.value,
          targetEl: e.target,
          path: JSON.parse(JSON.stringify(path.value)),
        });
      }
    }

    provide('path', path);
    provide('target', target);
    provide(
      'activeStyleLayer',
      computed(() => props.activeStyleLayer),
    );
    provide('root', self);

    return {
      self, path, target, menuStyle, handleClickMenu,
    };
  },
});
</script>
