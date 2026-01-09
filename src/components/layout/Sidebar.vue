<template>
  <aside class="w-64 bg-gradient-to-b from-ocean-900 via-ocean-800 to-ocean-900 shadow-2xl flex flex-col animate__animated animate__fadeInLeft">
    <div class="p-6 border-b border-ocean-700/50">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
          </svg>
        </div>
        <div>
          <h2 class="text-xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            IPM System
          </h2>
          <p class="text-xs text-cyan-200/70">{{ userRoleText }}</p>
        </div>
      </div>
    </div>
    
    <nav class="flex-1 py-4 px-2 space-y-1">
      <router-link 
        to="/admin/dashboard" 
        class="nav-item group"
        :class="{'active': $route.path === '/admin/dashboard'}"
      >
        <svg class="w-5 h-5 icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
        <span>Dashboard</span>
        <div class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
          <svg class="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </div>
      </router-link>
      
      <router-link 
        to="/admin/projects" 
        class="nav-item group"
        :class="{'active': $route.path.includes('/projects')}"
      >
        <svg class="w-5 h-5 icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
        </svg>
        <span>Dự Án</span>
        <div class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
          <svg class="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </div>
      </router-link>
      
      <router-link 
        to="/admin/staff" 
        class="nav-item group"
        :class="{'active': $route.path === '/admin/staff'}"
      >
        <svg class="w-5 h-5 icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
        <span>Nhân Sự</span>
        <div class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
          <svg class="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </div>
      </router-link>
      
      <router-link 
        to="/admin/reports" 
        class="nav-item group"
        :class="{'active': $route.path === '/admin/reports'}"
      >
        <svg class="w-5 h-5 icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
        <span>Báo Cáo</span>
        <div class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
          <svg class="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </div>
      </router-link>
      
      <router-link 
        to="/admin/settings" 
        class="nav-item group"
        :class="{'active': $route.path === '/admin/settings'}"
      >
        <svg class="w-5 h-5 icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        <span>Cài Đặt</span>
        <div class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
          <svg class="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </div>
      </router-link>
    </nav>
    
    <div class="p-4 border-t border-ocean-700/50">
      <div class="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-md p-4 border border-cyan-400/20">
        <div class="flex items-center gap-2 mb-2">
          <svg class="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
          </svg>
          <p class="text-xs text-cyan-200/80 font-semibold">Quick Tip</p>
        </div>
        <p class="text-xs text-cyan-100/60">Click on any project to view detailed progress tracking</p>
      </div>
      
      <!-- Logout Button -->
      <button 
        @click="handleLogout"
        class="w-full mt-4 flex items-center gap-2 px-4 py-2 text-cyan-100/80 hover:bg-ocean-700/50 rounded-lg transition-all"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
        </svg>
        <span>Đăng xuất</span>
      </button>
    </div>
  </aside>
</template>

<script>
import { getUser, logout } from '@/utils/auth'

export default {
  name: 'Sidebar',
  computed: {
    userRoleText() {
      const user = getUser()
      if (user) {
        return user.role === 'admin' ? 'Admin Dashboard' : 'Project Manager'
      }
      return 'Interior Project Manager'
    }
  },
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
  content: '';
  @apply absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-400 transform -translate-x-full transition-transform duration-300;
}

.nav-item:hover {
  @apply bg-ocean-700/50 text-cyan-200 shadow-lg;
}

.nav-item:hover::before {
  @apply translate-x-0;
}

.nav-item.active {
  @apply bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 shadow-ocean;
  border-left: 3px solid theme('colors.cyan.400');
}

.nav-item .icon {
  @apply text-xl;
}
</style>
