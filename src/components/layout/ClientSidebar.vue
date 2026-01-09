<template>
  <div class="w-64 bg-gradient-to-b from-ocean-900 to-ocean-800 text-white flex flex-col">
    <div class="p-6 border-b border-cyan-700">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-xl font-bold">
          C
        </div>
        <div>
          <h1 class="text-xl font-bold text-cyan-300">IPM System</h1>
          <p class="text-xs text-cyan-400">Client Portal</p>
        </div>
      </div>
    </div>

    <nav class="flex-1 p-4 space-y-2">
      <router-link
        v-for="item in menuItems"
        :key="item.path"
        :to="item.path"
        class="flex items-center gap-3 px-4 py-3 rounded-lg transition-all hover:bg-cyan-700/30"
        active-class="bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg"
      >
        <span class="text-cyan-300">{{ item.name }}</span>
      </router-link>
    </nav>

    <div class="p-4 border-t border-cyan-700">
      <button
        @click="handleLogout"
        class="w-full px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition-colors text-white font-medium"
      >
        Đăng xuất
      </button>
    </div>
  </div>
</template>

<script setup>
import { logout } from '@/utils/auth'

const menuItems = [
  { name: 'Dashboard', path: '/client/dashboard' },
  { name: 'Theo dõi tiến độ', path: '/client/project/1/progress' },
  { name: 'Ngân sách', path: '/client/project/1/budget' },
  { name: 'Tin nhắn & Feedback', path: '/client/messages' },
  { name: 'Tài liệu', path: '/client/documents' }
]

const handleLogout = () => {
  logout()
}
</script>
