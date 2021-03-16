/*
 * @Author: your name
 * @Date: 2021-03-09 22:01:48
 * @LastEditTime: 2021-03-16 17:59:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/main.js
 */
import { createApp } from 'vue';
// import fedora from '../packages/index';
// import Button from '../packages/button/index';
import Modal from '../packages/modal/index';
import App from './App.vue';

const app = createApp(App);
app.use(Modal).mount('#app');
// app.use(fedora, { app }).mount('#app');
