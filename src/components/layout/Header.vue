<template>
  <header class="h-16 bg-white/80 backdrop-blur-xl border-b border-cyan-100 flex justify-between items-center px-6 shadow-lg animate__animated animate__slideInDown">
    <div class="flex items-center space-x-4">
      <div class="flex items-center space-x-2 text-sm animate__animated animate__fadeIn">
        <span class="text-gray-500">{{ userRoleText }}</span>
        <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
        <span class="text-gray-900 font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">{{ currentPageTitle }}</span>
      </div>
    </div>
    
    <div class="flex items-center space-x-6">
      <!-- Search -->
      <div class="hidden md:flex items-center bg-gradient-to-r from-cyan-50 to-blue-50 rounded-full px-4 py-2 border border-cyan-200 focus-within:shadow-ocean transition-all duration-300">
        <svg class="w-4 h-4 text-cyan-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <input type="text" placeholder="Tìm kiếm..." class="bg-transparent outline-none text-sm w-40 text-gray-700 placeholder-gray-400" />
      </div>
      
      <!-- Notification Button -->
      <button class="relative p-2 text-gray-600 hover:text-cyan-600 transition-all duration-300 hover:bg-cyan-50 rounded-full group">
        <svg class="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
        </svg>
        <span class="absolute top-1 right-1 h-5 w-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
          5
        </span>
      </button>
      
      <!-- User Menu -->
      <div class="flex items-center space-x-3 cursor-pointer px-3 py-2 rounded-full hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-300 group animate__animated animate__fadeIn animate__delay-1s">
        <div class="relative">
          <img :src="`https://ui-avatars.com/api/?name=${userName}&background=06b6d4&color=fff`" alt="Avatar" class="w-10 h-10 rounded-full ring-2 ring-cyan-400 ring-offset-2 group-hover:ring-4 transition-all duration-300" />
          <span class="absolute bottom-0 right-0 h-3 w-3 bg-green-400 border-2 border-white rounded-full"></span>
        </div>
        <div class="hidden md:block text-right">
          <div class="text-sm font-semibold text-gray-900">{{ userName }}</div>
          <div class="text-xs text-gray-500">{{ userRoleLabel }}</div>
        </div>
        <svg class="w-4 h-4 text-gray-400 group-hover:text-cyan-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </div>
  </header>
</template>

<script>
import { getUser } from '@/utils/auth'

export default {
  name: 'Header',
  computed: {
    currentUser() {
      return getUser()
    },
    userName() {
      return this.currentUser?.name || 'User'
    },
    userRole() {
      return this.currentUser?.role || 'admin'
    },
    userRoleText() {
      if (this.userRole === 'admin') return 'Admin'
      if (this.userRole === 'pm') return 'PM'
      if (this.userRole === 'foreman') return 'Foreman'
      if (this.userRole === 'client') return 'Client'
      return 'User'
    },
    userRoleLabel() {
      const labels = {
        'admin': 'Super Administrator',
        'pm': 'Project Manager',
        'foreman': 'Foreman',
        'client': 'Client'
      }
      return labels[this.userRole] || 'User'
    },
    currentPageTitle() {
      const titles = {
        'AdminDashboard': 'Dashboard',
        'AdminProjects': 'Dự Án',
        'AdminProjectDetail': 'Chi Tiết Dự Án',
        'AdminStaff': 'Nhân Sự',
        'AdminReports': 'Báo Cáo',
        'AdminSettings': 'Cài Đặt',
        'PMDashboard': 'Dashboard',
        'PMProjectCreate': 'Tạo dự án mới',
        'PMProjectDetail': 'Chi tiết dự án',
        'PMMaterials': 'Vật tư',
        'PMReports': 'Báo cáo',
        'PMCalendar': 'Lịch làm việc',
        'PMNotifications': 'Thông báo',
        'PMProfile': 'Cài đặt',
        'ForemanDashboard': 'Dashboard',
        'ForemanUpdateProgress': 'Cập nhật tiến độ',
        'ForemanProjectDetail': 'Chi tiết dự án',
        'ForemanMaterialRequest': 'Yêu cầu vật tư',
        'ForemanChat': 'Chat',
        'ForemanProfile': 'Hồ sơ',
        'ClientDashboard': 'Dashboard',
        'ClientProgress': 'Theo dõi tiến độ',
        'ClientBudget': 'Ngân sách',
        'ClientMessages': 'Tin nhắn & Feedback',
        'ClientDocuments': 'Tài liệu'
      }
      return titles[this.$route.name] || 'Dashboard'
    }
  }
}
</script>
