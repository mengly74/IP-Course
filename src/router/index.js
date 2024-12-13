import DetailPage from '@/views/DetailPage.vue';
import HomeView from '@/views/HomeView.vue';
import PageCategory from '@/views/PageCategory.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path:'/',
    component: HomeView
  },
  {
    path:'/PageCategory',
    name: PageCategory,
    component: PageCategory
  },
  {
    path:'/DetailPage',
    name: DetailPage,
    component: DetailPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
