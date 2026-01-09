<template>
  <div class="flex h-screen bg-gradient-to-br from-gray-50 via-cyan-50 to-blue-50 overflow-hidden">
    <Sidebar />
    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />
      <div class="flex-1 overflow-y-auto p-6 animate__animated animate__fadeIn">
        <router-view v-slot="{ Component }">
          <transition name="page" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/layout/Sidebar.vue'
import Header from '../components/layout/Header.vue'

export default {
  name: 'AdminLayout',
  components: {
    Sidebar,
    Header
  }
}
</script>

<style scoped>
.page-enter-active {
  animation: slideUp 0.4s ease-out;
}

.page-leave-active {
  animation: fadeOut 0.3s ease-in;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
