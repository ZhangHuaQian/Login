import VueRouter from 'vue-router'

// 导入对应的路由组件
import login from './components/login.vue'
import Home from './components/Home.vue'
import elementHtml from './components/element.html'
// 3. 创建路由对象
const router = new VueRouter({
    routes: [ // 配置路由规则
      { path: '/', redirect: '/login' },
      { path: '/login', component: login  },
      { path: '/home', component: Home  },
      {path:'./elementHtml',component:elementHtml}
    ]
    })


    // 挂载路由导航守卫

    // router.beforeEach((to,from,next)=>{
    //   if(to.path==='./login') return next()

    //  const tokenstr= window.sessionStorage.getItem('token')
    //  if(!tokenstr) return next('/login')
    //  next();   
    // })
    export default router