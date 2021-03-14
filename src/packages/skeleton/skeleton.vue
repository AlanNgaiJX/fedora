<!--
 * @Author: your name
 * @Date: 2021-03-14 00:11:00
 * @LastEditTime: 2021-03-14 01:19:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/skeleton/skeleton.vue
-->
<template>
  <div class="fe-skeleton">
    <div v-if="loading" class="skeleton">
      <div class="avatar is-loading" v-if="avatar"></div>
      <div class="paragraph">
        <div class="title is-loading"></div>
        <div class="content is-loading" v-for="item in rows" :key="item"></div>
      </div>
    </div>
    <slot v-if="!loading"></slot>
  </div>
</template>

<script>
export default {
  name: 'fe-skeleton',
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    avatar: {
      type: Boolean,
      default: true,
    },
    rows: {
      type: Number,
      default: 4,
    },
  },
  watch: {
    loading(nv) {
      console.log(nv);
    },
  },
};
</script>

<style lang="scss">
.fe-skeleton {
  .skeleton {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    box-sizing: border-box;
    padding: 5px;

    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      margin-right: 10px;
    }

    .paragraph{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      flex: 1;
      padding: 10px 0;

      .title,.content{
        height: 8px;
      }

      .title{
        width: 30%;
      }

      .content{
        width: 80%;
      }
    }

  }

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
}
</style>
