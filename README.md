<!--
 * @Author: your name
 * @Date: 2021-03-09 22:02:24
 * @LastEditTime: 2021-03-16 23:38:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/README.md
-->
# fedora

## install 安装
```
npm install fedora-ui -save
```

## 全局引入

```js
import fedora from 'fedora-ui';
import "fedora-ui/fedora.css";
app.use(fedora);
```

## 按需引入
```js
import { Button , Modal } from 'fedora-ui';
import "fedora-ui/fedora.css";

app.component(Button.name, Button);
app.use(Modal);
```