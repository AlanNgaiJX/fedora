<!--
 * @Author: your name
 * @Date: 2021-03-14 01:34:52
 * @LastEditTime: 2021-03-15 19:56:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/tabs/tabs-pane.vue
-->
<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'fe-tabs-pane',
  inject: ['eventBus'],
  props: {
    name: { // 名对应tab-item名
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      active: false,
    };
  },
  computed: {
    classes() {
      return {
        active: this.active,
      };
    },
  },
  created() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name;
    });
  },
};
</script>
<style scoped lang="scss">
.tabs-pane {
  padding: 1rem;
}
</style>
