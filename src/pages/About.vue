<template>
  <div class="max-w-xl space-y-8 pt-8">

    <!-- Avatar placeholder -->
    <div class="w-20 h-20 rounded-full bg-stone-100 dark:bg-stone-800 overflow-hidden">
      <img
        v-if="avatar"
        :src="avatar"
        alt="Profile"
        class="w-full h-full object-cover"
      />
      <div
        v-else
        class="w-full h-full flex items-center justify-center text-stone-400 dark:text-stone-600 font-serif text-2xl"
      >
        C
      </div>
    </div>

    <!-- Bio -->
    <div class="space-y-4">
      <h1 class="font-serif text-2xl sm:text-4xl font-semibold tracking-tight">About</h1>
      <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
        Hi, I'm CJ — home cook and food enthusiast from Pampanga. This is my personal recipe collection,
        a mix of family dishes, everyday meals, and things I've learned to love making from scratch.
      </p>
      <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
        <span class="font-medium text-stone-900 dark:text-stone-100">Mangan</span> means "to eat" in Kapampangan —
        because that's really what this is all about.
      </p>
    </div>

    <hr class="border-stone-200 dark:border-stone-800" />

    <div class="space-y-2">
      <p class="text-sm text-stone-400 dark:text-stone-600">Built with Vue + Tailwind. Recipes added one at a time.</p>
    </div>

  </div>
</template>

<script setup lang="ts">
const avatar = ''  // put image path or URL here when you have one
</script>
