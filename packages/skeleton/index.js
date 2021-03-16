/*
 * @Author: your name
 * @Date: 2021-03-16 17:01:00
 * @LastEditTime: 2021-03-16 17:09:13
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/skeleton/index.js
 */
import Skeleton from './skeleton.vue';
import SkeletonItem from './skeleton-item.vue';

Skeleton.install = (app) => {
  app.component(Skeleton.name, Skeleton);
  app.component(SkeletonItem.name, SkeletonItem);
};
export default Skeleton;
