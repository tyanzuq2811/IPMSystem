<template>
  <div class="flex h-screen bg-gradient-to-br from-gray-50 via-cyan-50 to-blue-50 overflow-hidden">
    <PMSidebar />
    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />
      <div class="flex-1 overflow-y-auto p-6">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import PMSidebar from '../components/layout/PMSidebar.vue'
import Header from '../components/layout/Header.vue'

export default {
  name: 'PMLayout',
  components: {
    PMSidebar,
    Header
  }
}
</script>
