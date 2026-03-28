<template>
  <div class="min-h-screen bg-[#FAFAF8] dark:bg-[#1C1917] text-[#1C1917] dark:text-[#FAFAF8]">
    <Navbar />
    <main class="max-w-5xl mx-auto px-4 py-8">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') {
    document.documentElement.classList.add('dark')
  }
})
</script>
