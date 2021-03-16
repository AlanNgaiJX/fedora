<!--
 * @Author: your name
 * @Date: 2021-03-14 01:34:30
 * @LastEditTime: 2021-03-14 01:34:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/tabs/tabs-body.vue
-->
<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'fe-tabs-body',
  inject: ['eventBus'],
  created() {},
};
</script>
