/*
 * @Author: your name
 * @Date: 2021-03-09 22:01:48
 * @LastEditTime: 2021-03-14 21:41:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/main.js
 */
import { createApp } from 'vue';
import fedora from '@/packages';
import App from './App.vue';

const app = createApp(App);
app.use(fedora, { app }).mount('#app');
