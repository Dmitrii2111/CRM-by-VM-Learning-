import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'


Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: { layout: 'main', auth: true },
      component: () => import('../views/Home.vue')
    },
    {
      path: '/login',
      name: 'Login',
      meta: { layout: 'empty' },
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      meta: { layout: 'empty' },
      component: () => import('../views/Register.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      meta: { layout: 'main', auth: true },
      component: () => import('../views/Categories.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      meta: { layout: 'main', auth: true },
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/record',
      name: 'Record',
      meta: { layout: 'main', auth: true },
      component: () => import('../views/Record.vue')
    },
    {
      path: '/planning',
      name: 'Planning',
      meta: { layout: 'main', auth: true },
      component: () => import('../views/Planning.vue')
    },
    {
      path: '/history',
      name: 'History',
      meta: { layout: 'main', auth: true },
      component: () => import('../views/History.vue')
    },
    {
      path: '/detail-record/:id',
      name: 'Detail-record',
      meta: { layout: 'main', auth: true },
      component: () => import('../views/Detail-record.vue')
    },
  ]

})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)


  if (requireAuth && !currentUser) {
    next('/login?message=login')
  } else {
    next()
  }

})

export default router
