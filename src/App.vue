<!--
 * @Author: your name
 * @Date: 2021-03-09 22:01:48
 * @LastEditTime: 2021-03-16 18:00:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/App.vue
-->
<template>
  <div>
    <button
      @click="
        () => {
          $showToast({ title: 'hello', icon: 'fe-search' });
        }
      "
    >
      hello
    </button>
    <button
      @click="
        () => {
          $showLoading({ title: 'hello', icon: 'fe-search' });
        }
      "
    >
      hello
    </button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({ name: 'app' });
</script>
