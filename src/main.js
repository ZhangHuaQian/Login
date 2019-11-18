// 入口文件
import Vue from 'vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import { Button, Select } from 'element-ui';
import {  Form,FormItem} from 'element-ui';
import { Icon} from 'element-ui'
import {Message} from 'element-ui'
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Form.name,Form);
Vue.component(FormItem.name,FormItem)
Vue.use(Icon)
Vue.prototype.$message=Message;

import router from './router.js'







//导入App.vue
import app from './App.vue';
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
    
    
  })