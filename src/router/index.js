import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  scrollBehavior(to, from ,savedPosition){
    // to 去哪的路由網址
    // from 從哪來的路由網址
    // savedPosition {top: 0} 之類的可記錄scroll位置
    if(to.fullPath.match('newPage')){
      return{
        top: 50,
      }
    };
    console.log(to, from ,savedPosition)
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/newPage',
      name: 'newPage',
      component: () => import('../views/NewPage.vue'),
      children: [
        {
          path: 'a',
          component: () => import('../views/NewPageA.vue'),
        },
        {
          path: 'b',
          component: () => import('../views/NewPageB.vue'),
        },
        {
          path: 'dynamic/:id',
          component: ()=> import('../views/DynamicRouter.vue'),
        },
        {
          path: 'dynamicProps/:id',
          component: ()=> import('../views/DynamicRouterProps.vue'),
          props: (el)=>{
            return {
              id:el.params.id,
            }
          }
        },
        {
          path: 'namedView',
          component: () => import('../views/NamedView.vue'),
          children: [
            {
              path: 'ac',
              components: {
                first: () => import('../views/NewPageA.vue'),
                second: () => import('../views/NewPageC.vue'),
              },
            },
            {
              path: 'ab',
              components: {
                first: () => import('../views/NewPageA.vue'),
                second: () => import('../views/NewPageB.vue'),
              },
            },
          ],
        },
      ],
    },
    // 404頁面
    {
      path: '/:pathMatch(.*)*',
      component: () =>import('../views/NotFound.vue'),
    },
    // 重新導向
    // {
    //   path: '/newPage/:pathMatch(.*)*',
    //   redirect:{
    //     name:'home'
    //   }
    // }
  ],
})

export default router
