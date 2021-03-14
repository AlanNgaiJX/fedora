<!--
 * @Author: your name
 * @Date: 2021-03-14 01:28:02
 * @LastEditTime: 2021-03-14 02:33:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/tabs/tabs.vue
-->
<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Bus from './bus';

export default {
  name: 'fe-tabs',
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0;
      },
    },
  },
  data() {
    return {
      eventBus: new Bus(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  methods: {
  },
  mounted() {
    this.eventBus.$emit('update:initSelected', this.selected);
  },
};
</script>
