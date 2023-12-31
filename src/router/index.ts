import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Leaderboard.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/lessons',
      name: 'lessons',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Lessons.vue')
    },
    {
      path: '/lessons/basics', 
      name: 'lessonsBasics', 
      component: () => import('../views/Basics.vue')
    },    
    {
      path: '/lessons/basics/quiz', 
      name: 'lessonsBasicsQuiz', 
      component: () => import('../views/BasicsQuiz.vue')
    },
    //{
    //  path: '/lessons/hashcat', 
    //  name: 'lessonsHashcat', 
    //  component: () => import('../views/Lessons.vue')
    //},
    //{
    //  path: '/lessons/wireshark', 
    //  name: 'lessonsWireshark', 
    //  component: () => import('../views/Lessons.vue')
    //},
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SignUp.vue')
    }
  ]
})

export default router
