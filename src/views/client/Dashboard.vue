<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold text-gray-800">Xin chào, {{ clientName }} 👋</h1>
    </div>

    <!-- Project Overview -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">DỰ ÁN CỦA BẠN</h2>
      
      <div class="space-y-4">
        <div>
          <h3 class="text-2xl font-bold text-gray-900">{{ project.name }}</h3>
          <p class="text-gray-600 mt-1">{{ project.address }}</p>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-sm font-medium">Status:</span>
          <span class="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
            🟢 {{ project.status }}
          </span>
        </div>

        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-medium text-gray-700">Tiến độ tổng thể:</span>
            <span class="text-lg font-bold text-cyan-600">{{ project.progress }}%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div 
              class="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all"
              :style="{ width: project.progress + '%' }"
            ></div>
          </div>
          <p class="text-sm text-gray-600 mt-1">{{ project.completedTasks }}/{{ project.totalTasks }} tasks completed</p>
        </div>

        <div class="grid grid-cols-2 gap-4 pt-4">
          <div>
            <p class="text-sm text-gray-600">PM phụ trách:</p>
            <p class="font-semibold text-gray-800">{{ project.pm }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">Foreman:</p>
            <p class="font-semibold text-gray-800">{{ project.foreman }}</p>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
          <div class="text-center">
            <p class="text-xs text-gray-600 mb-1">Ngày bắt đầu</p>
            <p class="font-semibold text-gray-800">{{ project.startDate }}</p>
          </div>
          <div class="text-center">
            <p class="text-xs text-gray-600 mb-1">Deadline</p>
            <p class="font-semibold text-gray-800">{{ project.deadline }}</p>
          </div>
          <div class="text-center">
            <p class="text-xs text-gray-600 mb-1">Còn lại</p>
            <p class="font-semibold text-gray-800">{{ project.daysLeft }} ngày</p>
            <p class="text-xs text-green-600">✅ On track</p>
          </div>
        </div>

        <div class="flex flex-wrap gap-3 pt-4">
          <router-link 
            :to="`/client/project/${project.id}/progress`"
            class="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
          >
            View progress
          </router-link>
          <router-link 
            :to="`/client/project/${project.id}/budget`"
            class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            View budget
          </router-link>
          <router-link 
            to="/client/messages"
            class="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
          >
            Send message
          </router-link>
          <button class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors">
            Feedback
          </button>
        </div>
      </div>
    </div>

    <!-- Recent Updates -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">CẬP NHẬT GẦN ĐÂY</h2>
      
      <div class="space-y-4">
        <div 
          v-for="update in recentUpdates" 
          :key="update.id"
          class="border-b border-gray-200 pb-4 last:border-0 last:pb-0"
        >
          <div class="flex items-center gap-2 text-sm text-gray-600 mb-2">
            🕐 {{ update.time }}
          </div>
          <div class="flex items-start gap-3">
            <span class="text-2xl">{{ update.icon }}</span>
            <div class="flex-1">
              <p class="font-semibold text-gray-800">{{ update.title }}</p>
              <div class="flex gap-2 mt-2">
                <span class="text-sm text-cyan-600">[{{ update.photoCount }} ảnh mới]</span>
                <router-link 
                  :to="`/client/project/${project.id}/progress`"
                  class="text-sm text-blue-600 hover:underline"
                >
                  [Xem chi tiết]
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <router-link 
        :to="`/client/project/${project.id}/progress`"
        class="block text-center mt-4 text-cyan-600 hover:text-cyan-700 font-medium"
      >
        Xem tất cả cập nhật →
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const clientName = ref('Trần Thị X')

const project = ref({
  id: 1,
  name: 'Vinhomes Landmark - Căn A1',
  address: '123 Đường ABC, Quận 1, TP.HCM',
  status: 'Đang thi công',
  progress: 85,
  completedTasks: 17,
  totalTasks: 20,
  pm: 'Nguyễn Văn A',
  foreman: 'Lê Văn C',
  startDate: '15/01/2024',
  deadline: '30/03/2024',
  daysLeft: 5
})

const recentUpdates = ref([
  {
    id: 1,
    time: '2 giờ trước',
    icon: '⚡',
    title: 'Tiến độ mới: Lắp đặt điện - 90%',
    photoCount: 3
  },
  {
    id: 2,
    time: '1 ngày trước',
    icon: '💧',
    title: 'Tiến độ mới: Lắp đặt nước - 95%',
    photoCount: 5
  }
])
</script>
