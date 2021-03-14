<template>
  <div id="app">
    <!-- icon -->
    <h1>icon</h1>
    <ul class="grid-icons">
      <li v-for="item in iconList" :key="item">
        <div class="icon-wrap">
          <fe-icon :name="item" :className="'icon-item'" />
        </div>
        <span class="icon-name">{{ item }}</span>
      </li>
    </ul>

    <!-- button -->
    <h1>button</h1>

    <!-- type -->
    <fe-button>hello</fe-button>
    <fe-button type="primary">hello</fe-button>
    <fe-button type="warning">hello</fe-button>
    <fe-button type="danger">hello</fe-button>
    <fe-button type="success">hello</fe-button>
    <fe-button type="info">hello</fe-button><br /><br /><br />

    <!-- stroke -->
    <fe-button type="primary" stroke>hello</fe-button>&nbsp;
    <fe-button type="primary">hello</fe-button> <br /><br /><br />

    <!-- shape -->
    <fe-button type="primary" shape="default">hello</fe-button>&nbsp;
    <fe-button type="primary" shape="rect">hello</fe-button>&nbsp;
    <fe-button type="primary" shape="round">hello</fe-button>
    <br />
    <br />
    <br />

    <!-- disable loading -->
    <fe-button type="primary" status="disable">hello</fe-button>&nbsp;<br /><br />
    <fe-button type="primary" status="loading">hello</fe-button>&nbsp;<br /><br />

    <!-- icon-button -->
    <fe-button type="primary" icon="fe-check">hello</fe-button>&nbsp;
    <fe-button
      type="primary"
      :icon="{
        name: 'fe-go',
        lay: 'after',
        className: 'afIcon'
      }"
      >hello</fe-button
    >&nbsp;

    <!-- radio -->
    <h1>radio</h1>
    <fe-radio active>hello</fe-radio><fe-radio>world</fe-radio>

    <br />
    <!-- react radio -->
    <fe-radio active rect>hello</fe-radio><fe-radio rect>world</fe-radio>
    <br />
    <br />
    <br />

    <!-- radioList -->
    <fe-radio-list
      :list="[
        { value: 0, text: 'a' },
        { value: 1, text: 'b' },
        { value: 2, text: 'c' }
      ]"
      v-model:value="radioListValue"
    ></fe-radio-list>
    <br />
    <br />

    <!-- column -->
    <fe-radio-list
      :list="[
        { value: 0, text: 'a' },
        { value: 1, text: 'b' },
        { value: 2, text: 'c' }
      ]"
      v-model:value="radioListValue"
      layout="column"
    ></fe-radio-list>
    <br /><br />

    <!-- menu -->
    <fe-menu width="300">
      <fe-sub-menu mark="1">
        <template v-slot:title>
          <div>title A</div>
        </template>
        <fe-menu-item mark="a-1">a-1</fe-menu-item>
        <fe-menu-item mark="a-2">a-2</fe-menu-item>
        <fe-menu-item mark="a-3">a-3</fe-menu-item>
      </fe-sub-menu>
      <fe-sub-menu mark="2">
        <template v-slot:title>
          <div>title B</div>
        </template>
        <fe-menu-item mark="b-1">b-1</fe-menu-item>
        <fe-menu-item mark="b-2">b-2</fe-menu-item>
        <fe-menu-item mark="b-3">b-3</fe-menu-item>
      </fe-sub-menu>
      <fe-sub-menu mark="3" foldable>
        <template v-slot:title>
          <div>title C</div>
        </template>
        <fe-menu-item mark="c-1">c-1</fe-menu-item>
        <fe-menu-item mark="c-2">c-2</fe-menu-item>
        <fe-menu-item mark="c-3">c-3</fe-menu-item>
        <fe-sub-menu mark="c-4" title="c-4" foldable>
          <fe-menu-item mark="c-4-1">c-4-1</fe-menu-item>
          <fe-menu-item mark="c-4-2">c-4-2</fe-menu-item>
          <fe-menu-item mark="c-4-3">c-4-3</fe-menu-item>
        </fe-sub-menu>
        <fe-menu-item mark="c-5">c-5</fe-menu-item>
      </fe-sub-menu>
    </fe-menu>
    <br />
    <br />
    <br />

    <fe-select v-model:value="selectValue">
      <fe-select-option value="1">1</fe-select-option>
      <fe-select-option value="2">2</fe-select-option>
      <fe-select-option value="3">3</fe-select-option>
    </fe-select>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <fe-select v-model:value="selectValue" height="200">
      <fe-select-option value="1">1</fe-select-option>
      <fe-select-option value="2">2</fe-select-option>
      <fe-select-option value="3">3</fe-select-option>
      <fe-select-option value="4">4</fe-select-option>
      <fe-select-option value="5">5</fe-select-option>
      <fe-select-option value="6">6</fe-select-option>
      <fe-select-option value="7">8</fe-select-option>
      <fe-select-option value="9">9</fe-select-option>
    </fe-select>
    <br />
    <br />
    <br />
    <br />
    <br />
    <fe-select v-model:value="selectValue1">
      <fe-select-option value="1" default>1</fe-select-option>
      <fe-select-option value="2">2</fe-select-option>
      <fe-select-option value="3" disable>3</fe-select-option>
    </fe-select>
    <br />
    <br />
    <br />
    <br />
    <br />
    <fe-select v-model:value="selectValue1" icon="fe-search">
      <fe-select-option value="1" default>1</fe-select-option>
      <fe-select-option value="2">2</fe-select-option>
      <fe-select-option value="3" disable>3</fe-select-option>
    </fe-select>
    <br />
    <br />
    <br />
    <br />
    <br />
    <fe-switch v-model:value="switch1"></fe-switch>
    <br />
    <fe-switch v-model:value="switch2" innerText :format="{ on: 'on', off: 'off' }"></fe-switch>
    <br />
    <fe-switch
      v-model:value="switch3"
      outerText
      :format="{ on: 'apple', off: 'banana' }"
    ></fe-switch>
    <br />
    <fe-switch v-model:value="switch4" disable></fe-switch>
    <br />
    <br />
    <br />
    <fe-input v-model:value="input1"></fe-input>
    <br />
    <br />
    <fe-input v-model:value="input2" cancelable>Username</fe-input>
    <br />
    <br />
    <fe-input v-model:value="input3" type="password" cancelable>Password</fe-input>
    <br />
    <br />
    <fe-input v-model:value="input4" rightIcon="fe-edit" cancelable>Edit</fe-input>
    <br />
    <br />
    <fe-input v-model:value="input5" leftIcon="fe-edit" cancelable>Edit</fe-input>
    <br />
    <br />
    <fe-input v-model:value="input6" maxLength="5">MaxLength 5</fe-input>
    <br />
    <br />
    <fe-input v-model:value="input6" maxLength="5" count>MaxLength 5 Count</fe-input>
    <br />
    <br />
    <fe-input v-model:value="input7" count>Just Count</fe-input>
    <br />
    <br />
    <fe-input
      v-model:value="input8"
      required
      :validator="
        value => {
          return /^\d+$/.test(value);
        }
      "
    >
      <template v-slot:default>
        Validator
      </template>
      <template v-slot:unvalidText>
        required and only need numbers !!
      </template>
    </fe-input>
    <br />
    <br />
    <fe-input v-model:value="input9" disable>Disable</fe-input>
    <br />
    <br />
    <fe-textarea v-model:value="textarea1" count cancelable>A textarea</fe-textarea>
    <br />
    <br />
    <br />
    <br />
    <fe-popover>
      <fe-button type="primary">上方弹出</fe-button>
      <template v-slot:content>弹出内容</template>
    </fe-popover>
    <fe-popover position="bottom">
      <fe-button type="primary">下方弹出</fe-button>
      <template v-slot:content>弹出内容</template>
    </fe-popover>
    <fe-popover position="bottom" trigger="hover">
      <fe-button type="primary">下方弹出</fe-button>
      <template v-slot:content>弹出内容</template>
    </fe-popover>
    <button
      @click="
        () => {
          alive = !alive;
        }
      "
    >
      switchalive
    </button>
    <fe-bubble :visable="viewVisable" relTo="#target">hello</fe-bubble>
    <div id="target" @click="switchView">target</div>
    <!-- <ul class="lazyImgWrap" id="lazyImgWrap">
      <li v-for="item in imgTestList" :key="item">
        <fe-lazy-img :src="item" root="#lazyImgWrap"/>
      </li>
    </ul> -->

    <div class="squareWrap">
      <fe-square-img :src="imgTestList[1]" full lazyLoad />
    </div>
    <fe-square-img :src="imgTestList[2]" size="200" lazyLoad />

    <br />
    <br />
    <fe-switch v-model:value="isLoading"></fe-switch>
    <div class="paragraph-wrap">
      <fe-skeleton :loading="isLoading">
        <div>
          <h1>Hello world</h1>
          <h2>hello fedora...</h2>
        </div>
      </fe-skeleton>
    </div>

    <br />
    <br />
    <br />
    <br />
    <fe-tabs selected="2">
      <fe-tabs-head>
        <fe-tabs-item name="1">item-1</fe-tabs-item>
        <fe-tabs-item name="2">item-2</fe-tabs-item>
        <fe-tabs-item name="3">item-3</fe-tabs-item>
        <fe-tabs-item name="4">item-4</fe-tabs-item>
        <fe-tabs-item name="5" disabled>item-disabled</fe-tabs-item>
      </fe-tabs-head>
      <fe-tabs-body>
        <fe-tabs-pane name="1">content-1</fe-tabs-pane>
        <fe-tabs-pane name="2">content-2</fe-tabs-pane>
        <fe-tabs-pane name="3">content-3</fe-tabs-pane>
        <fe-tabs-pane name="4">content-4</fe-tabs-pane>
      </fe-tabs-body>
    </fe-tabs>
    <br />
    <br />
    <br />
    <br />
    {{ sliderVal }}
    <fe-slider v-model:value="sliderVal"></fe-slider>
    <br />
    <br />
    <br />
    <br />
    <button @click="showToast1">showToast1</button>
    <br />
    <br />
    <br />
    <br />
    <!-- <ul>
      <li v-for="item in spinList" :key="item">
        <fe-spin :type="item" />
      </li>
    </ul> -->
    <br />
    <button @click="showLoading">showLoading</button>
    <button @click="hideLoading">hideLoading</button>
    <br />
  </div>
</template>

<script>
import imgTestList from './packages/imgTestList';

export default {
  name: 'App',
  components: {},
  data() {
    return {
      iconList: [
        'fe-search',
        'fe-edit',
        'fe-link',
        'fe-setting',
        'fe-upload',
        'fe-download',
        'fe-list',
        'fe-stroke-check',
        'fe-stroke-close',
        'fe-fill-check',
        'fe-stroke-info',
        'fe-up',
        'fe-left',
        'fe-down',
        'fe-right',
        'fe-left-triangle',
        'fe-right-triangle',
        'fe-up-triangle',
        'fe-down-triangle',
        'fe-go',
        'fe-check',
        'fe-close',
      ],
      radioListValue: 0,
      selectValue: '',
      selectValue1: '',
      switch1: false,
      switch2: 'on',
      switch3: 'apple',
      switch4: false,

      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      input8: '',
      input9: '',

      textarea1: '',
      textarea2: '',
      textarea3: '',
      textarea4: '',
      textarea5: '',
      textarea6: '',
      textarea7: '',
      textarea8: '',
      textarea9: '',

      viewVisable: false,

      imgTestList,

      isLoading: true,

      selected: '1',
      sliderVal: 0.5,

      alive: false,

      spinList: [
        'PLANE',
        'CHASE',
        'BOUNCE',
        'WAVE',
        'PULSE',
        'FLOW',
        'SWING',
        'CIRCLE',
        'CIRCLE-FADE',
        'GRID',
        'FOLD',
        'WANDER',
      ],
    };
  },
  methods: {
    switchView() {
      this.viewVisable = !this.viewVisable;
    },
    showToast1() {
      this.$showToast({
        title: '1231231231231231231',
      });
    },
    showLoading() {
      this.$showLoading();
    },
    hideLoading() {
      this.$hideLoading();
    },
  },
};
</script>

<style lang="scss">
#app {
  padding-left: 30px;
  padding-bottom: 300px;

  .grid-icons {
    width: 500px;
    height: 500px;

    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: repeat(5, 20%);

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid #eee;

      .icon-wrap {
        .icon-item {
          width: 25px;
          height: 25px;
        }
      }
      .icon-name {
        font-size: 12px;
      }
    }
  }

  .lazyImgWrap {
    width: 100px;
    height: 500px;
    overflow: auto;
    position: relative;
    li {
      width: 100%;
      margin: 30px 0;
      img {
        width: 100%;
      }
    }
  }

  .squareWrap {
    width: 100px;
    height: 100px;
    background-color: red;
  }

  .paragraph-wrap {
    width: 500px;
    height: 100px;
    position: relative;
  }
}

#target {
  position: fixed;
  left: 0;
  top: 100px;
  background-color: red;
}
</style>
