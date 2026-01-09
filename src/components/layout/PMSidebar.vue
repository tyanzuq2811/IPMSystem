<template>
  <aside class="w-64 bg-gradient-to-b from-ocean-900 via-ocean-800 to-ocean-900 shadow-2xl flex flex-col">
    <div class="p-6 border-b border-ocean-700/50">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
          <span class="text-white text-xl font-bold">PM</span>
        </div>
        <div>
          <h2 class="text-xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            IPM System
          </h2>
          <p class="text-xs text-cyan-200/70">Project Manager</p>
        </div>
      </div>
    </div>
    
    <nav class="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
      <router-link 
        to="/pm/dashboard" 
        class="nav-item group"
        :class="{'active': $route.path === '/pm/dashboard'}"
      >
        <span>Dashboard</span>
      </router-link>
      
      <router-link 
        to="/pm/projects/create" 
        class="nav-item group"
        :class="{'active': $route.path === '/pm/projects/create'}"
      >
        <span>Tạo dự án mới</span>
      </router-link>
      
      <router-link 
        to="/pm/materials" 
        class="nav-item group"
        :class="{'active': $route.path === '/pm/materials'}"
      >
        <span>Vật tư</span>
      </router-link>
      
      <router-link 
        to="/pm/reports" 
        class="nav-item group"
        :class="{'active': $route.path === '/pm/reports'}"
      >
        <span>Báo cáo</span>
      </router-link>
      
      <router-link 
        to="/pm/calendar" 
        class="nav-item group"
        :class="{'active': $route.path === '/pm/calendar'}"
      >
        <span>Lịch làm việc</span>
      </router-link>
      
      <router-link 
        to="/pm/notifications" 
        class="nav-item group"
        :class="{'active': $route.path === '/pm/notifications'}"
      >
        <span>Thông báo</span>
      </router-link>
      
      <router-link 
        to="/pm/profile" 
        class="nav-item group"
        :class="{'active': $route.path === '/pm/profile'}"
      >
        <span>Cài đặt</span>
      </router-link>
    </nav>

    <div class="p-4 border-t border-ocean-700/50">
      <button 
        @click="handleLogout"
        class="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600/10 text-red-300 hover:bg-red-600/20 rounded-lg transition-colors text-sm font-medium"
      >
        <span>Đăng xuất</span>
      </button>
    </div>
  </aside>
</template>

<script>
import { logout } from '@/utils/auth'

export default {
  name: 'PMSidebar',
  methods: {
    handleLogout() {
      logout()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.nav-item {
  @apply flex items-center gap-3 px-4 py-3 text-cyan-100/80 no-underline transition-all duration-300 font-medium text-sm rounded-lg mx-1 relative overflow-hidden;
}

.nav-item::before {
  @apply absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-400 transform -translate-x-full transition-transform duration-300;
  content: '';
}

.nav-item:hover {
  @apply bg-ocean-700/50 text-cyan-200 shadow-lg;
}

.nav-item:hover::before {
  @apply translate-x-0;
}

.nav-item.active {
  @apply bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 shadow-ocean;
}

.nav-item.active::before {
  @apply translate-x-0;
}
</style>
