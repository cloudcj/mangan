<template>
  <div class="space-y-16">

    <!-- Hero -->
    <section class="pt-8 sm:pt-12 pb-4">
      <h1 class="font-serif text-4xl sm:text-5xl font-semibold tracking-tight mb-4">Mangan.</h1>
      <p class="text-stone-500 dark:text-stone-400 text-base sm:text-lg max-w-md">
        A personal collection of recipes — family favorites, everyday meals, and things worth making again.
      </p>
    </section>

    <!-- Featured -->
    <section v-if="featured.length">
      <h2 class="font-serif text-xl font-semibold mb-6">Featured</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <RecipeCard v-for="recipe in featured" :key="recipe.slug" :recipe="recipe" />
      </div>
    </section>

    <!-- All Recipes -->
    <section>
      <h2 class="font-serif text-xl font-semibold mb-6">All Recipes</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <RecipeCard v-for="recipe in recipes" :key="recipe.slug" :recipe="recipe" />
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { recipes } from '@/data/index'
import RecipeCard from '@/components/RecipeCard.vue'

const featured = computed(() => recipes.filter(r => r.featured))
</script>
