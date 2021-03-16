<!--
 * @Author: your name
 * @Date: 2021-03-09 22:01:48
 * @LastEditTime: 2021-03-16 11:22:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/App.vue
-->
<template>
  <div>
    <fe-button :onClick="()=>{$showToast({title:'hello'})}">hello</fe-button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({ name: 'app' });
</script>
