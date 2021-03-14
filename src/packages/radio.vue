<template>
  <div class="fe-radio" :class="radioClass" @click="handleClick">
    <div class="btn-circle"></div>
    <!-- slot -->
    <span class="text" v-if="this.$slots.default">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'fe-radio',
  props: {
    active: {
      type: Boolean,
      require: true,
      default: false,
    },
    value: {
      type: [String, Number],
      require: true,
    },
    rect: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    radioClass() {
      const classes = [];
      if (this.active) {
        classes.push('active');
      }
      if (this.rect) {
        classes.push('rect');
      }
      return classes;
    },
  },
  methods: {
    handleClick() {
      this.$emit('clickRadio', this.value);
    },
  },
});
</script>

<style lang="scss">
@import '../styles/_var.scss';

.fe-radio {
  justify-content: center;
  align-items: center;
  color: $color-text-base;
  display: inline-flex;
  cursor: pointer;
  padding-right: 10px;

  .btn-circle {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border: 1px solid $color-icon-base;
    border-radius: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    box-shadow: $default-shadow;

    &:hover {
      border-color: $primary;
    }

    &::after {
      content: '';
      display: block;
      width: 0%;
      height: 0%;
      opacity: 0;
      transition: all 0.3s;
      position: absolute;
    }
  }

  &.rect {
    border: 1px solid $border-color;
    padding: 5px 10px;
    .btn-circle {
      display: none;
    }
  }

  &.active {
    &.rect {
      border: 1px solid $primary;
      color: $primary;
    }

    .btn-circle {
      border-color: $primary;

      &::after {
        content: '';
        display: block;
        width: 65%;
        height: 65%;
        border-radius: 100%;
        opacity: 1;
        background-color: $primary;
      }
    }
  }
}
</style>
