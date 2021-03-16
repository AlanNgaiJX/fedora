<!--
 * @Author: your name
 * @Date: 2021-03-11 01:48:12
 * @LastEditTime: 2021-03-15 16:04:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/radio/radioList.vue
-->
<template>
  <div class="fe-radio-list" :class="radioListClass">
    <fe-radio
      v-for="(item, index) in list"
      :key="index + item.value"
      :active="item.value === value"
      :value="item.value"
      :rect="rect"
      @clickRadio="handleClickRadio"
      >{{ item.text }}</fe-radio
    >
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'fe-radio-list',
  props: {
    rect: { // stroke风格
      type: Boolean,
      default: false,
    },
    value: { // 单选值
      type: [Number, String],
      require: true,
    },
    list: { // 单选列表
      type: Array,
      require: true,
      defualt: [
        { value: 0, text: 'a' },
        { value: 1, text: 'b' },
      ],
      /*
      example
      [{value:0, text: 'a'},{value:1, text: 'b'}]
      */
    },
    layout: { // 排列方式
      type: String,
      default: 'row',
      validator(layout) {
        if (layout && !['row', 'column'].includes(layout)) {
          console.error('layout的类型必须为row,column');
        }
        return true;
      },
    },
  },
  computed: {
    radioListClass() {
      const calsses = [];
      if (this.layout === 'column') {
        calsses.push('lay-column');
      }
      return calsses;
    },
  },
  methods: {
    handleClickRadio(val) {
      this.$emit('update:value', val);
    },
  },
});
</script>

<style lang="scss">
.fe-radio-list {
  display: inline-flex;

  &.lay-column {
    flex-direction: column;
  }
}
</style>
