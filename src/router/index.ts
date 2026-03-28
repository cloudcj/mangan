import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Recipes from '@/pages/Recipes.vue'
import RecipeDetail from '@/pages/RecipeDetail.vue'
import About from '@/pages/About.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/recipes', component: Recipes },
    { path: '/recipes/:slug', component: RecipeDetail },
    { path: '/about', component: About },
  ],
})

export default router
