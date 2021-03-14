<!--
 * @Author: your name
 * @Date: 2021-03-14 01:29:54
 * @LastEditTime: 2021-03-14 02:38:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/tabs/tabs-item.vue
-->
<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name" data-color="#66B1FF">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'fe-tabs-item',
  inject: ['eventBus'],
  data() {
    return {
      active: false,
      isOverflowHidden: false,
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled,
        'is-overflow-hidden': this.isOverflowHidden,
      };
    },
  },
  created() {
    if (this.eventBus) {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      });
      this.eventBus.$on('update:initSelected', (name) => {
        if (name === this.name) {
          this.eventBus.$emit('update:selected', this.name, this);
        }
      });
    }
  },
  mounted() {
    const explorer = window.navigator.userAgent;
    // 替换不支持 clip-path 浏览器为 overflow: hidden
    if (
      explorer.indexOf('Trident') >= 0
      || explorer.indexOf('Edge') >= 0
      || explorer.indexOf('Opera') >= 0
    ) {
      this.isOverflowHidden = true;
    } else {
      this.isOverflowHidden = false;
    }
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      this.eventBus && this.eventBus.$emit('update:selected', this.name, this);
      this.$emit('click', this);
    },
  },
};
</script>
<style scoped lang="scss">
@import '../styles/_var.scss';

.tabs-item {
  flex-shrink: 0;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  position: relative;
  cursor: pointer;

  &.active {
    color: $primary;
  }

  &.disabled {
    color: $color-text-disabled;
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.is-overflow-hidden {
  overflow: hidden;
}
</style>
