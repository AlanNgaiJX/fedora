<template>
  <i :class="['svg-icon', `svg-icon-${name}`, className]" :style="svgStyle">
    <svg fill="currentColor" aria-hidden="true" width="100%" height="100%">
      <use :xlink:href="iconName" />
    </svg>
  </i>
</template>

<script>
import { defineComponent } from 'vue';
import '../styles/iconfont';

export default defineComponent({
  name: 'fe-icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
    color: {
      type: String,
    },
    size: {
      // 设置size，宽=高
      type: [Number, String],
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.name}`;
    },
    svgStyle() {
      const { color, size } = this;
      const style = {};
      if (color) {
        style.color = color;
      }
      if (size) {
        style.width = `${size}px`;
        style.height = `${size}px`;
      }
      return style;
    },
  },
});

/*
  自定义引入svg图标并使用

-1- vue.config.js中使用如下配置
chainWebpack: (config) => {
      // 解析svg文件，该插件会自动将@/src/assets/icon/svgIcon下的svg文件,整合并注入到document中
      config.module
          .rule("svg")
          .exclude.add(path.resolve("src/assets/images/icon/svgIcon")) // url-loader不处理
          .end();
      config.module
          .rule("icon")
          .test(/\.svg$/)
          .include.add(path.resolve("src/assets/images/icon/svgIcon"))
          .end()
          .use("svg-sprite-loader")
          .loader("svg-sprite-loader")
          .options({
              symbolId: "icon-[name]",
          })
          .end();
  },

-2- main.js
在main.js中使用useIcons('@...svg文件夹')，引入svg

-3-在组件中使用
<fe-icon name="图标文件名" class="自定义样式类" />
*/
function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function useIcons(path) {
  // eslint-disable-next-line
  requireAll(require.context(path, false, /\.svg$/));
}

export { useIcons };
</script>

<style scoped>
.svg-icon {
  display: block;
  width: 16px;
  height: 16px;
  overflow: hidden;
}
</style>
