<!--
 * @Author: your name
 * @Date: 2021-03-15 20:45:09
 * @LastEditTime: 2021-03-15 20:46:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/packages/skeleton/skeleton-item.vue
-->
<template>
  <div class="fe-skeleton-item is-loading"></div>
</template>

<script>
export default {
  name: 'fe-skeleton-item',
};
</script>

<style lang="scss">
.is-loading {
  /* 宽度和高度根据要展示元素大小设定 */
  position: relative;

  /* 以下代码实现背景动画效果 */
  animation: loading 1.4s ease infinite;
  -webkit-animation: loading 1.4s ease infinite;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(25%, #f0f0f0),
    color-stop(37%, #e3e3e3),
    color-stop(63%, #f0f0f0)
  );
  background-image: -o-linear-gradient(left, #f0f0f0 25%, #e3e3e3 37%, #f0f0f0 63%);
  background-image: linear-gradient(90deg, #f0f0f0 25%, #e3e3e3 37%, #f0f0f0 63%);
  background-size: 400% 100%;
}

@-webkit-keyframes loading {
  0% {
    background-position: 100% 50%;
  }

  to {
    background-position: 0 50%;
  }
}

@keyframes loading {
  0% {
    background-position: 100% 50%;
  }

  to {
    background-position: 0 50%;
  }
}
</style>
