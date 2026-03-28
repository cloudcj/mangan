<template>
  <div class="space-y-8">

    <!-- Header -->
    <div>
      <h1 class="font-serif text-2xl sm:text-4xl font-semibold tracking-tight mb-2">Recipes</h1>
      <p class="text-stone-500 dark:text-stone-400">{{ recipes.length }} recipes and counting.</p>
    </div>

    <!-- Category Filter -->
    <div class="flex flex-wrap gap-2 overflow-x-auto pb-1">
      <button
        @click="selected = null"
        :class="[
          'px-4 py-1.5 rounded-full text-sm transition-colors',
          selected === null
            ? 'bg-[#C2614F] text-white'
            : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
        ]"
      >
        All
      </button>
      <button
        v-for="cat in categories"
        :key="cat"
        @click="selected = cat"
        :class="[
          'px-4 py-1.5 rounded-full text-sm transition-colors',
          selected === cat
            ? 'bg-[#C2614F] text-white'
            : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <RecipeCard v-for="recipe in filtered" :key="recipe.slug" :recipe="recipe" />
    </div>

    <!-- Empty state -->
    <p v-if="filtered.length === 0" class="text-stone-400 dark:text-stone-600 text-sm">
      No recipes in this category yet.
    </p>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { recipes, categories } from '@/data/index'
import RecipeCard from '@/components/RecipeCard.vue'

const selected = ref<string | null>(null)

const filtered = computed(() =>
  selected.value ? recipes.filter(r => r.category === selected.value) : recipes
)
</script>
