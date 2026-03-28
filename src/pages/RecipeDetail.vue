<template>
  <div v-if="recipe" class="space-y-10">

    <!-- Back -->
    <RouterLink
      to="/recipes"
      class="inline-flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
      </svg>
      Back to Recipes
    </RouterLink>

    <!-- Hero Image -->
    <div class="rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-800 aspect-video w-full">
      <img
        v-if="recipe.image"
        :src="recipe.image"
        :alt="recipe.title"
        class="w-full h-full object-cover"
      />
      <div
        v-else
        class="w-full h-full flex items-center justify-center text-stone-300 dark:text-stone-700 font-serif text-2xl"
      >
        {{ recipe.title }}
      </div>
    </div>

    <!-- Title + Meta -->
    <div class="space-y-4">
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in recipe.tags ?? []"
          :key="tag"
          class="text-xs px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400"
        >
          {{ tag }}
        </span>
      </div>

      <h1 class="font-serif text-2xl sm:text-4xl font-semibold tracking-tight">{{ recipe.title }}</h1>
      <p class="text-stone-500 dark:text-stone-400 text-base sm:text-lg max-w-2xl">{{ recipe.description }}</p>

      <!-- Stats -->
      <div class="flex flex-wrap gap-6 pt-2 text-sm">
        <div>
          <span class="text-stone-400 dark:text-stone-500 block text-xs uppercase tracking-wide mb-0.5">Prep</span>
          <span class="font-medium">{{ recipe.prepTime }}</span>
        </div>
        <div>
          <span class="text-stone-400 dark:text-stone-500 block text-xs uppercase tracking-wide mb-0.5">Cook</span>
          <span class="font-medium">{{ recipe.cookTime }}</span>
        </div>
        <div>
          <span class="text-stone-400 dark:text-stone-500 block text-xs uppercase tracking-wide mb-0.5">Servings</span>
          <span class="font-medium">{{ recipe.servings }}</span>
        </div>
        <div>
          <span class="text-stone-400 dark:text-stone-500 block text-xs uppercase tracking-wide mb-0.5">Difficulty</span>
          <span class="font-medium">{{ recipe.difficulty }}</span>
        </div>
      </div>
      <!-- Macros -->
      <div v-if="recipe.macros" class="flex flex-wrap gap-3 pt-2">
        <div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-100 dark:bg-stone-800">
          <span class="text-xs text-stone-400 dark:text-stone-500 uppercase tracking-wide">Calories</span>
          <span class="font-semibold text-sm">{{ recipe.macros.calories }}</span>
        </div>
        <div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-50 dark:bg-green-900/20">
          <span class="text-xs text-green-600 dark:text-green-400 uppercase tracking-wide">Protein</span>
          <span class="font-semibold text-sm text-green-700 dark:text-green-300">{{ recipe.macros.protein }}g</span>
        </div>
        <div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 dark:bg-amber-900/20">
          <span class="text-xs text-amber-600 dark:text-amber-400 uppercase tracking-wide">Carbs</span>
          <span class="font-semibold text-sm text-amber-700 dark:text-amber-300">{{ recipe.macros.carbs }}g</span>
        </div>
        <div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/20">
          <span class="text-xs text-blue-600 dark:text-blue-400 uppercase tracking-wide">Fat</span>
          <span class="font-semibold text-sm text-blue-700 dark:text-blue-300">{{ recipe.macros.fat }}g</span>
        </div>
      </div>

      <p v-if="recipe.servingSize" class="text-xs text-stone-400 dark:text-stone-500">
        Per serving ({{ recipe.servingSize }})
      </p>

      <!-- Macro Calculator -->
      <div v-if="recipe.macros && baseGrams" class="mt-4 p-4 rounded-xl border border-stone-200 dark:border-stone-800 space-y-3">
        <p class="text-xs text-stone-400 dark:text-stone-500 uppercase tracking-wide">Macro Calculator</p>
        <div class="flex items-center gap-3">
          <input
            v-model.number="customGrams"
            type="number"
            min="1"
            placeholder="Enter grams"
            class="w-36 px-3 py-1.5 text-sm rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 focus:outline-none focus:ring-1 focus:ring-[#C2614F]"
          />
          <span class="text-sm text-stone-400">g</span>
        </div>
        <div v-if="customGrams" class="flex flex-wrap gap-3 text-sm">
          <span class="px-3 py-1 rounded-lg bg-stone-100 dark:bg-stone-800">
            <span class="text-stone-400 text-xs">Cal </span>
            <span class="font-semibold">{{ calc(recipe.macros.calories) }}</span>
          </span>
          <span class="px-3 py-1 rounded-lg bg-green-50 dark:bg-green-900/20">
            <span class="text-green-600 dark:text-green-400 text-xs">Protein </span>
            <span class="font-semibold text-green-700 dark:text-green-300">{{ calc(recipe.macros.protein) }}g</span>
          </span>
          <span class="px-3 py-1 rounded-lg bg-amber-50 dark:bg-amber-900/20">
            <span class="text-amber-600 dark:text-amber-400 text-xs">Carbs </span>
            <span class="font-semibold text-amber-700 dark:text-amber-300">{{ calc(recipe.macros.carbs) }}g</span>
          </span>
          <span class="px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/20">
            <span class="text-blue-600 dark:text-blue-400 text-xs">Fat </span>
            <span class="font-semibold text-blue-700 dark:text-blue-300">{{ calc(recipe.macros.fat) }}g</span>
          </span>
        </div>
      </div>
    </div>

    <hr class="border-stone-200 dark:border-stone-800" />

    <!-- Ingredients + Instructions -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

      <!-- Ingredients -->
      <div>
        <h2 class="font-serif text-xl font-semibold mb-4">Ingredients</h2>
        <ul class="space-y-2">
          <li
            v-for="(item, i) in recipe.ingredients"
            :key="i"
            class="flex gap-3 text-sm text-stone-700 dark:text-stone-300"
          >
            <span class="text-[#C2614F] mt-0.5">—</span>
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- Instructions -->
      <div class="md:col-span-2">
        <h2 class="font-serif text-xl font-semibold mb-4">Instructions</h2>
        <ol class="space-y-6">
          <li
            v-for="(step, i) in recipe.instructions"
            :key="i"
            class="flex gap-4"
          >
            <span class="font-serif text-2xl font-semibold text-stone-200 dark:text-stone-700 leading-none mt-0.5 w-6 shrink-0">
              {{ i + 1 }}
            </span>
            <p class="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">{{ step }}</p>
          </li>
        </ol>
      </div>

    </div>

  </div>

  <!-- 404 -->
  <div v-else class="text-center py-24">
    <p class="font-serif text-2xl text-stone-400">Recipe not found.</p>
    <RouterLink to="/recipes" class="text-sm text-[#C2614F] mt-4 inline-block hover:underline">
      Back to Recipes
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getRecipeBySlug } from '@/data/index'

const route = useRoute()
const recipe = computed(() => getRecipeBySlug(route.params.slug as string))

const customGrams = ref<number | null>(null)

const baseGrams = computed(() => {
  const size = recipe.value?.servingSize
  if (!size) return null
  const match = size.match(/(\d+)/)
  return match ? parseInt(match[1]) : null
})

function calc(value: number): number {
  if (!customGrams.value || !baseGrams.value) return value
  return Math.round((value / baseGrams.value) * customGrams.value)
}
</script>
