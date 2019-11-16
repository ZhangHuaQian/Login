import Vue from 'vue'
import VueRouter from 'vue-router'
const path =require('path');
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import {Message} from 'element-ui'
Vue.prototype.$message=Message;

// 导入对应的路由组件
import login from './components/login.vue'
import Home from './components/Home.vue'
import elementHtml from './components/element.html'

Vue.use(VueRouter);
// 3. 创建路由对象
const router = new VueRouter({
    routes: [ // 配置路由规则
      { path: '/', redirect: '/login' },
      { path: '/login', component: login  },
      { path: '/home', component: Home  },
      {path:'./elementHtml',component:elementHtml}
    ],
    
    
    })


  
    
    
    

    
      
      
      
    

      
    
    window.onload=function(){

      router.beforeEach((to,from,next)=>{
     
        //获取token
        
         const tokenstr=window.sessionStorage.getItem('token');
         
         
         if(!tokenstr){
          
          // alert('meiyou')
         
          // Vue.options.methods.warning();
          Message.warning('对不起，您没有登录，禁止访问')
          
         
           if(to.path!=='./login')return next('./login')
           
           
         }
         next()
         
         
        
       })
    }

    
    

   

    export default router