<template>
  <button
    class="fe-button"
    :class="btnClass"
    @mousedown="handleMousedown"
    @mouseup="handleMouseup"
    @touchstart="handleMousedown"
    @touchend="handleMouseup"
  >
    <!-- loading -->
    <span class="fe-button-icon before" v-if="status === 'loading'">
      <fe-icon name="loading" className="loading" />
    </span>

    <!-- icon-before -->
    <span class="fe-button-icon before" v-if="btnIcon && btnIcon.lay === 'before'">
      <fe-icon :name="btnIcon.name" :className="btnIcon.className" />
    </span>

    <!-- slot -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>

    <!-- icon-after -->
    <span class="fe-button-icon after" v-if="btnIcon && btnIcon.lay === 'after'">
      <fe-icon :name="btnIcon.name" :className="btnIcon.className" />
    </span>
  </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'fe-button',
  props: {
    type: {
      type: String,
      default: 'default',
      validator(type) {
        if (
          type
          && !['default', 'primary', 'warning', 'danger', 'success', 'info'].includes(type)
        ) {
          console.error('type的类型必须为default、primary,warning,danger,success,info');
        }
        return true;
      },
    },
    stroke: {
      type: Boolean,
      default: false,
    },
    shape: {
      type: String,
      default: 'default',
      validator(shape) {
        if (shape && !['default', 'round', 'rect'].includes(shape)) {
          console.error('shape的类型必须为default,round,rect');
        }
        return true;
      },
    },
    status: {
      type: String,
      default: 'default',
      validator(shape) {
        if (shape && !['default', 'disable', 'loading'].includes(shape)) {
          console.error('shape的类型必须为default,disable,loading');
        }
        return true;
      },
    },
    icon: {
      type: [Object, String],
      default: null,
      /* 可以是stirng或是一个objcet，example：
      {
        name:"fe-check",
        lay: "before", // or "after",
        className: "btn-icon"
      }

      or just

      "fe-check"
      */
    },
  },
  data() {
    return {
      isMousedown: false,
    };
  },
  computed: {
    btnClass() {
      const classes = [];
      // 类型
      if (this.type) {
        classes.push(`fe-button-${this.type}`);
      }
      // 描边
      if (this.stroke) {
        classes.push('stroke');
      }
      // 按下去的状态
      if (this.isMousedown) {
        classes.push('active');
      }
      // 形状
      if (this.shape) {
        classes.push(`shape-${this.shape}`);
      }
      // disable
      if (this.status && this.status === 'disable') {
        classes.push('disable');
      }
      return classes;
    },
    btnIcon() {
      const btnIcon = {
        name: '',
        lay: 'before',
        className: 'btn-icon',
      };
      if (this.icon) {
        if (typeof this.icon === 'string') {
          btnIcon.name = this.icon;
          return btnIcon;
        }
        return Object.assign(btnIcon, this.icon);
      }
      return null;
    },
  },
  methods: {
    handleMousedown() {
      if (this.status === 'disable') {
        return;
      }
      this.isMousedown = true;
    },
    handleMouseup() {
      if (this.status === 'disable') {
        return;
      }
      setTimeout(() => {
        this.isMousedown = false;
      }, 200);
    },
  },
});
</script>

<style lang="scss">
@import '../styles/_var.scss';

$height: 42px;
$font-size: 16px;
$color: #606266;

@keyframes loading {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
.fe-button {
  border: 1px solid;
  border-color: $border-color;
  color: $color;
  background: #fff;
  height: $height;
  cursor: pointer;
  font-size: $font-size;
  line-height: 1;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  outline: none;
  transition: background-color, border-color 0.2s, 0.2s;

  &.shape-default {
    border-radius: $border-radius;
  }
  &.shape-round {
    border-radius: $radius-round;
  }
  &.shape-rect {
    border-radius: none;
  }

  &.disable {
    cursor: not-allowed;
  }

  .loading {
    animation: loading 0.8s infinite;
  }

  // set button bg
  $color-list: (
    primary: $primary,
    success: $success,
    info: $info,
    warning: $warning,
    danger: $danger
  );

  @each $type, $color in $color-list {
    #{'&.fe-button-' + $type} {
      background-color: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      &.stroke {
        background-color: #fff;
        border: 1px solid #{$color};
        color: $color;
      }
    }
  }

  // set hover bg
  @each $type,
    $color
      in (
        primary: $primary-hover,
        success: $success-hover,
        info: $info-hover,
        warning: $warning-hover,
        danger: $danger-hover
      )
  {
    #{'&.fe-button-' + $type}:hover {
      background-color: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      &.stroke {
        background-color: #fff;
        border: 1px solid #{$color};
        color: $color;
      }
    }
  }

  // set pressed bg
  @each $type,
    $color
      in (
        primary: $primary-active,
        success: $success-active,
        info: $info-active,
        warning: $warning-active,
        danger: $danger-active
      )
  {
    #{'&.fe-button-' + $type } {
      &.active {
        color: #fff;
        border: 1px solid #{$color};
        background-color: #{$color};
      }
      &.stroke {
        &.active {
          color: $color;
          border: 1px solid #{$color};
          background-color: #fff;
        }
      }
    }
  }

  .fe-button-icon {
    &.before {
      margin-right: 4px;
    }
    &.after {
      margin-left: 4px;
    }

    .btn-icon {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
