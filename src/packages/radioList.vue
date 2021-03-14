<template>
  <div class="fe-radio-list" :class="radioListClass">
    <fe-radio
      v-for="(item, index) in list"
      :key="index + item.value"
      :active="item.value === value"
      :value="item.value"
      @clickRadio="handleClickRadio"
      >{{ item.text }}</fe-radio
    >
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Radio from './radio.vue';

export default defineComponent({
  name: 'fe-radio-list',
  components: {
    'fe-radio': Radio,
  },
  props: {
    value: {
      type: [Number, String],
      require: true,
    },
    list: {
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
    layout: {
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
