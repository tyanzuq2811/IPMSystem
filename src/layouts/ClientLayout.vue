<template>
  <div class="flex h-screen bg-gradient-to-br from-gray-50 via-cyan-50 to-blue-50">
    <ClientSidebar />
    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />
      <main class="flex-1 overflow-y-auto p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import ClientSidebar from '@/components/layout/ClientSidebar.vue'
import Header from '@/components/layout/Header.vue'
</script>
