<template>
  <div class="space-y-6 animate__animated animate__fadeIn">
    <!-- Page Title -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate__animated animate__fadeInLeft">
          Dashboard Tổng Quan
        </h1>
        <p class="text-gray-500 mt-1">Chào mừng trở lại! Đây là tổng quan hệ thống của bạn.</p>
      </div>
      <button class="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:shadow-ocean-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 animate__animated animate__fadeInRight">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
        </svg>
        Tạo Dự Án Mới
      </button>
    </div>
    
    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Card 1 -->
      <div class="bg-white rounded-lg shadow-lg hover:shadow-ocean-lg transition-all duration-300 p-6 border border-cyan-100 transform hover:-translate-y-2 animate__animated animate__fadeInUp" style="animation-delay: 0.1s">
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <div>
                <div class="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">24</div>
                <div class="text-xs text-gray-500">Tổng số dự án</div>
              </div>
            </div>
            <div class="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
              </svg>
              +3 tháng này
            </div>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="bg-white rounded-lg shadow-lg hover:shadow-ocean-lg transition-all duration-300 p-3 border border-orange-100 transform hover:-translate-y-1 animate__animated animate__fadeInUp" style="animation-delay: 0.2s">
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <div class="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">15</div>
                <div class="text-xs text-gray-500">Đang thi công</div>
              </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
              <div class="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" style="width: 62.5%"></div>
            </div>
            <div class="text-xs text-gray-500 mt-0.5">62.5% tổng dự án</div>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="bg-white rounded-lg shadow-lg hover:shadow-ocean-lg transition-all duration-300 p-3 border border-green-100 transform hover:-translate-y-1 animate__animated animate__fadeInUp" style="animation-delay: 0.3s">
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <div class="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">7</div>
                <div class="text-xs text-gray-500">Hoàn thành</div>
              </div>
            </div>
            <div class="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
              </svg>
              +2 tuần này
            </div>
          </div>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="bg-white rounded-lg shadow-lg hover:shadow-ocean-lg transition-all duration-300 p-6 border border-red-100 transform hover:-translate-y-2 animate__animated animate__fadeInUp" style="animation-delay: 0.4s">
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-14 h-14 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <div class="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">2</div>
                <div class="text-sm text-gray-500">Tạm dừng</div>
              </div>
            </div>
            <div class="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
              Cần xử lý
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Main Chart -->
      <div class="lg:col-span-2 bg-white rounded-lg shadow-lg p-6 border border-cyan-100 animate__animated animate__fadeInLeft">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-xl font-bold text-gray-900">Doanh thu 12 tháng gần nhất</h3>
            <p class="text-sm text-gray-500 mt-1">Theo dõi xu hướng doanh thu và chi phí</p>
          </div>
          <select class="px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-md text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500">
            <option>Năm 2024</option>
            <option>Năm 2023</option>
          </select>
        </div>
        <div class="h-80">
          <canvas ref="revenueChart"></canvas>
        </div>
        <div class="flex items-center justify-center gap-6 mt-4">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            <span class="text-sm text-gray-600">Doanh thu</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
            <span class="text-sm text-gray-600">Chi phí</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
            <span class="text-sm text-gray-600">Lợi nhuận</span>
          </div>
        </div>
      </div>
      
      <!-- Top Projects -->
      <div class="bg-white rounded-lg shadow-lg p-6 border border-cyan-100 animate__animated animate__fadeInRight">
        <h3 class="text-xl font-bold text-gray-900 mb-4">Dự án vượt ngân sách</h3>
        <div class="space-y-4">
          <div v-for="project in topProjects" :key="project.id" class="group hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 p-3 rounded-md transition-all duration-300 cursor-pointer border border-transparent hover:border-red-200">
            <div class="flex items-start justify-between mb-2">
              <div class="flex-1">
                <div class="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">{{ project.name }}</div>
                <div class="text-xs text-gray-500 mt-1">Vượt: {{ project.exceed }}M / {{ project.budget }}M</div>
              </div>
              <div class="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded-lg">
                +{{ project.percent }}%
              </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div class="h-full bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse" :style="{ width: project.percent + '%' }"></div>
            </div>
          </div>
        </div>
        <button class="w-full mt-4 py-2 text-center text-sm font-semibold text-cyan-600 hover:bg-cyan-50 rounded-xl transition-all duration-300">
          Xem tất cả →
        </button>
      </div>
    </div>
    
    <!-- Staff & Notifications Row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Staff Workload -->
      <div class="bg-white rounded-2xl shadow-lg p-6 border border-cyan-100 animate__animated animate__fadeInUp">
        <h3 class="text-xl font-bold text-gray-900 mb-4">Công việc của Project Managers</h3>
        <div class="space-y-3">
          <div v-for="pm in projectManagers" :key="pm.id" class="flex items-center gap-4 p-4 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 rounded-md transition-all duration-300 group cursor-pointer border border-transparent hover:border-cyan-200">
            <img :src="pm.avatar" alt="" class="w-12 h-12 rounded-full ring-2 ring-cyan-400 ring-offset-2 group-hover:ring-4 transition-all" />
            <div class="flex-1">
              <div class="font-semibold text-gray-900">{{ pm.name }}</div>
              <div class="text-sm text-gray-500">{{ pm.projects }} dự án</div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-24 bg-gray-200 rounded-full h-2">
                <div :class="['h-full rounded-full', pm.performance > 90 ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-orange-500 to-amber-500']" :style="{ width: pm.performance + '%' }"></div>
              </div>
              <span class="text-sm font-semibold text-gray-700">{{ pm.performance }}%</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Notifications -->
      <div class="bg-white rounded-2xl shadow-lg p-6 border border-cyan-100 animate__animated animate__fadeInUp">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-900">Cảnh báo & Thông báo</h3>
          <div class="flex gap-2">
            <button class="px-3 py-1 text-xs font-semibold bg-cyan-100 text-cyan-700 rounded-lg">Tất cả</button>
            <button class="px-3 py-1 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg">Vật tư</button>
            <button class="px-3 py-1 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg">Tiến độ</button>
          </div>
        </div>
        <div class="space-y-3">
          <div v-for="notif in notifications" :key="notif.id" :class="['p-4 rounded-md border-l-4 transition-all duration-300 cursor-pointer hover:shadow-lg', notif.type === 'urgent' ? 'bg-red-50 border-red-500 hover:bg-red-100' : 'bg-blue-50 border-blue-500 hover:bg-blue-100']">
            <div class="flex items-start gap-3">
              <div :class="notif.type === 'urgent' ? 'animate-bounce' : ''">
                <svg v-if="notif.icon === 'alert'" class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
                <svg v-else class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="flex-1">
                <div class="font-semibold text-gray-900 mb-1">{{ notif.title }}</div>
                <div class="text-sm text-gray-600 mb-1">Dự án: {{ notif.project }}</div>
                <div class="text-sm text-gray-700">{{ notif.message }}</div>
                <div class="text-xs text-gray-500 mt-2">{{ notif.time }}</div>
              </div>
            </div>
          </div>
        </div>
        <button class="w-full mt-4 py-2 text-center text-sm font-semibold text-cyan-600 hover:bg-cyan-50 rounded-xl transition-all duration-300">
          Xem tất cả thông báo →
        </button>
      </div>
    </div>
    
    <!-- Quick Actions -->
    <div class="flex flex-wrap gap-4 animate__animated animate__fadeInUp">
      <button class="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:shadow-ocean-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 font-semibold">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
        </svg>
        Tạo dự án mới
      </button>
      <button class="px-6 py-3 bg-white border-2 border-cyan-500 text-cyan-600 rounded-xl hover:bg-cyan-50 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 font-semibold">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
        Quản lý nhân sự
      </button>
      <button class="px-6 py-3 bg-white border-2 border-cyan-500 text-cyan-600 rounded-xl hover:bg-cyan-50 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 font-semibold">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
        Báo cáo tổng hợp
      </button>
      <button class="px-6 py-3 bg-white border-2 border-cyan-500 text-cyan-600 rounded-xl hover:bg-cyan-50 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 font-semibold">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        Cài đặt hệ thống
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      topProjects: [
        { id: 1, name: 'Vinhomes Landmark - Căn A1', exceed: 15.5, budget: 150, percent: 10.3 },
        { id: 2, name: 'Masteri Thảo Điền - Căn B3', exceed: 8.2, budget: 120, percent: 6.8 },
        { id: 3, name: 'The Sun Avenue - Căn C2', exceed: 5.5, budget: 100, percent: 5.5 },
      ],
      projectManagers: [
        { id: 1, name: 'Nguyễn Văn A', avatar: 'https://ui-avatars.com/api/?name=Nguyen+Van+A&background=06b6d4&color=fff', projects: 5, performance: 92 },
        { id: 2, name: 'Trần Thị B', avatar: 'https://ui-avatars.com/api/?name=Tran+Thi+B&background=f59e0b&color=fff', projects: 8, performance: 85 },
        { id: 3, name: 'Lê Văn C', avatar: 'https://ui-avatars.com/api/?name=Le+Van+C&background=10b981&color=fff', projects: 3, performance: 95 }
      ],
      notifications: [
        { id: 1, icon: 'alert', type: 'urgent', title: 'Vật tư thiếu', project: 'Vinhomes Landmark A1', message: 'Foreman Nguyễn Văn D yêu cầu 50 ốc vít M6', time: '2 giờ trước' },
        { id: 2, icon: 'alert', type: 'urgent', title: 'Dự án trễ hạn', project: 'Masteri Thảo Điền B3', message: 'Trễ 3 ngày so với deadline', time: '5 giờ trước' },
        { id: 3, icon: 'info', type: 'info', title: 'Tiến độ mới', project: 'The Sun Avenue C2', message: 'Foreman Lê Văn E cập nhật tiến độ 85%', time: '1 ngày trước' }
      ]
    }
  },
  mounted() {
    this.renderChart()
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.revenueChart?.getContext('2d')
      if (!ctx) return
      
      const data = [120, 150, 180, 170, 200, 190, 220, 240, 230, 250, 260, 280]
      const maxVal = Math.max(...data)
      
      data.forEach((val, i) => {
        const barHeight = (val / maxVal) * 200
        const x = i * 50 + 30
        const y = 250 - barHeight
        
        // Revenue bar with gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, 250)
        gradient.addColorStop(0, '#06b6d4')
        gradient.addColorStop(1, '#0284c7')
        ctx.fillStyle = gradient
        ctx.fillRect(x, y, 35, barHeight)
        
        ctx.fillStyle = '#6b7280'
        ctx.font = '12px Arial'
        ctx.fillText((i + 1) + '', x + 10, 270)
      })
    }
  }
}
</script>
