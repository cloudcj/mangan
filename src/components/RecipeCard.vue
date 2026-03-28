<template>
  <RouterLink :to="`/recipes/${recipe.slug}`" class="group block">
    <div class="rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-800 aspect-video mb-3">
      <img
        v-if="recipe.image"
        :src="recipe.image"
        :alt="recipe.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div
        v-else
        class="w-full h-full flex items-center justify-center text-stone-400 dark:text-stone-600"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.002 0a8 8 0 1 0 0 16 8 8 0 0 0 0-16m-.004 1a7 7 0 1 1 0 14 7 7 0 0 1 0-14"/>
          <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4m.002 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
        </svg>
      </div>
    </div>

    <div class="space-y-1">
      <div class="flex items-center justify-between">
        <span class="text-xs text-[#C2614F] font-medium">{{ recipe.category.join(' · ') }}</span>
        <span class="text-xs text-stone-400 dark:text-stone-500">{{ recipe.prepTime }} + {{ recipe.cookTime }}</span>
      </div>
      <h3 class="font-serif font-semibold text-base group-hover:text-[#C2614F] transition-colors">
        {{ recipe.title }}
      </h3>
      <p class="text-sm text-stone-500 dark:text-stone-400 line-clamp-2">
        {{ recipe.description }}
      </p>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import type { Recipe } from '@/data/index'

defineProps<{
  recipe: Recipe
}>()
</script>
