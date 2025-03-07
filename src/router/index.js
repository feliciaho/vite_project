import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
  ],
})

export default router
