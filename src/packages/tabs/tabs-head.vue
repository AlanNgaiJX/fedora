<!--
 * @Author: your name
 * @Date: 2021-03-14 01:30:08
 * @LastEditTime: 2021-03-14 02:10:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/tabs/tabs-head.vue
-->
<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fe-tabs-head',
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (item, vm) => {
      this.updateLinePosition(vm);
    });
  },
  methods: {
    updateLinePosition(selectedVm) {
      const { width, left } = selectedVm.$el.getBoundingClientRect();
      const { left: left2 } = this.$refs.head.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left - left2}px`;
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/_var.scss";

.tabs-head {
  display: flex;
  height: 40px;
  justify-content: flex-start;
  position: relative;
  border-bottom: 2px solid $border-color;
  > .line {
    position: absolute;
    bottom: -2px;
    border-bottom: 2px solid $primary;
    transition: all 300ms;
  }
  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
  }
}
</style>
