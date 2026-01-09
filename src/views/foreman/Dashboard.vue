<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-800 mb-2">
          Xin chào, {{ foremanName }}
        </h1>
        <p class="text-gray-600">Foreman</p>
      </div>
      <div class="flex items-center gap-3">
        <button class="relative px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm">
          Thông báo
          <span class="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
        </button>
        <button class="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm">
          Profile
        </button>
      </div>
    </div>

    <!-- Quick Stats -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white rounded-lg shadow p-6 border border-gray-200">
        <div class="w-12 h-12 bg-cyan-500 rounded-lg mb-4"></div>
        <div class="text-3xl font-bold text-gray-800 mb-1">3</div>
        <div class="text-sm text-gray-600">My Projects</div>
        <div class="text-xs text-gray-500 mt-2">projects</div>
      </div>

      <div class="bg-white rounded-lg shadow p-6 border border-gray-200">
        <div class="w-12 h-12 bg-orange-500 rounded-lg mb-4"></div>
        <div class="text-3xl font-bold text-gray-800 mb-1">12</div>
        <div class="text-sm text-gray-600">Tasks Today</div>
        <div class="text-xs text-gray-500 mt-2">tasks</div>
      </div>

      <div class="bg-white rounded-lg shadow p-6 border border-gray-200">
        <div class="w-12 h-12 bg-blue-500 rounded-lg mb-4"></div>
        <div class="text-3xl font-bold text-gray-800 mb-1">5</div>
        <div class="text-sm text-gray-600">Pending</div>
        <div class="text-xs text-gray-500 mt-2">approvals</div>
      </div>

      <div class="bg-white rounded-lg shadow p-6 border border-gray-200">
        <div class="w-12 h-12 bg-green-500 rounded-lg mb-4"></div>
        <div class="text-3xl font-bold text-gray-800 mb-1">45</div>
        <div class="text-sm text-gray-600">Completed</div>
        <div class="text-xs text-gray-500 mt-2">tasks</div>
      </div>
    </div>

    <!-- Today's Checklist -->
    <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">CÔNG VIỆC HÔM NAY</h2>
      
      <div class="space-y-4">
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Vinhomes Landmark A1:</h3>
          <div class="space-y-2 ml-4">
            <div class="flex items-center gap-2">
              <input type="checkbox" checked disabled class="w-4 h-4">
              <span class="text-gray-600">Lắp đặt ổ cắm phòng bếp</span>
              <span class="text-xs text-green-600 ml-auto">(Completed 9:30 AM)</span>
            </div>
            <div class="flex items-center gap-2">
              <input type="checkbox" checked disabled class="w-4 h-4">
              <span class="text-gray-600">Kiểm tra hệ thống điện</span>
              <span class="text-xs text-green-600 ml-auto">(Completed 11:00 AM)</span>
            </div>
            <div class="flex items-center gap-2">
              <input type="checkbox" class="w-4 h-4">
              <span class="text-gray-700 font-medium">Lắp đèn chiếu sáng phòng khách</span>
            </div>
            <div class="flex items-center gap-2">
              <input type="checkbox" class="w-4 h-4">
              <span class="text-gray-700 font-medium">Chụp ảnh tiến độ và cập nhật</span>
            </div>
          </div>
        </div>

        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Masteri Thảo Điền B3:</h3>
          <div class="space-y-2 ml-4">
            <div class="flex items-center gap-2">
              <input type="checkbox" checked disabled class="w-4 h-4">
              <span class="text-gray-600">Test hệ thống nước</span>
              <span class="text-xs text-green-600 ml-auto">(Completed 10:00 AM)</span>
            </div>
            <div class="flex items-center gap-2">
              <input type="checkbox" class="w-4 h-4">
              <span class="text-gray-700 font-medium">Lắp vòi sen phòng tắm</span>
            </div>
            <div class="flex items-center gap-2">
              <input type="checkbox" class="w-4 h-4">
              <span class="text-gray-700 font-medium">Cập nhật tiến độ</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex gap-2 mt-4">
        <button class="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 text-sm">Add task</button>
        <button class="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm">View all</button>
      </div>
    </div>

    <!-- My Projects -->
    <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">DỰ ÁN CỦA TÔI</h2>
      
      <div class="space-y-4">
        <div v-for="project in projects" :key="project.id" class="border border-gray-200 rounded-lg p-4">
          <div class="flex items-start justify-between mb-3">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span :class="['w-3 h-3 rounded-full', getStatusColor(project.status)]"></span>
                <span class="text-xs text-gray-600">{{ project.statusText }}</span>
                <span class="text-gray-400">•</span>
                <span class="text-sm text-gray-600">PM: {{ project.pm }}</span>
              </div>
              <h3 class="text-lg font-bold text-gray-800">{{ project.name }}</h3>
            </div>
          </div>

          <div class="mb-3">
            <div class="flex items-center justify-between text-sm mb-2">
              <span class="text-gray-700 font-medium">Overall progress:</span>
              <span class="text-gray-600">{{ project.progress }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div :class="['h-2.5 rounded-full', getProgressColor(project.progress)]" :style="{ width: project.progress + '%' }"></div>
            </div>
          </div>

          <div class="text-sm text-gray-600 mb-3">
            <p>Your tasks: {{ project.completedTasks }}/{{ project.totalTasks }} completed</p>
            <p>Last update: {{ project.lastUpdate }}</p>
            <p :class="project.onTrack ? 'text-green-600' : 'text-orange-600'">
              Status: {{ project.onTrack ? 'On track' : project.delayDays + ' days behind' }}
            </p>
          </div>

          <div class="flex gap-2">
            <button @click="$router.push(`/foreman/projects/${project.id}/update-progress`)" class="px-4 py-2 bg-cyan-600 text-white text-sm rounded hover:bg-cyan-700">Update progress</button>
            <button class="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">Request materials</button>
            <button @click="$router.push(`/foreman/projects/${project.id}`)" class="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">View details</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Notifications -->
    <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">THÔNG BÁO MỚI</h2>
      
      <div class="space-y-3">
        <div v-for="notification in notifications" :key="notification.id" class="border-b border-gray-200 pb-3 last:border-0">
          <p class="font-medium text-gray-800">{{ notification.title }}</p>
          <p class="text-sm text-gray-600 mt-1">{{ notification.message }}</p>
          <div class="flex items-center gap-2 text-xs text-gray-500 mt-2">
            <span>{{ notification.from }}</span>
            <span>•</span>
            <span>{{ notification.time }}</span>
            <button v-if="notification.hasReply" class="text-cyan-600 hover:text-cyan-700 ml-auto">Reply</button>
          </div>
        </div>
      </div>

      <button class="text-sm text-cyan-600 hover:text-cyan-700 font-medium mt-4">View all notifications</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForemanDashboard',
  data() {
    return {
      foremanName: 'Lê Văn C',
      projects: [
        {
          id: 1,
          name: 'Vinhomes Landmark A1',
          status: 'active',
          statusText: 'Active',
          pm: 'Nguyễn Văn A',
          progress: 85,
          completedTasks: 8,
          totalTasks: 10,
          lastUpdate: '2 hours ago',
          onTrack: true
        },
        {
          id: 2,
          name: 'Masteri Thảo Điền B3',
          status: 'behind',
          statusText: 'Behind',
          pm: 'Trần Thị B',
          progress: 78,
          completedTasks: 12,
          totalTasks: 16,
          lastUpdate: '5 hours ago',
          onTrack: false,
          delayDays: 2
        },
        {
          id: 3,
          name: 'Estella Heights D1',
          status: 'active',
          statusText: 'Active',
          pm: 'Nguyễn Văn A',
          progress: 65,
          completedTasks: 6,
          totalTasks: 10,
          lastUpdate: '1 day ago',
          onTrack: true
        }
      ],
      notifications: [
        {
          id: 1,
          title: 'Your progress update was approved',
          message: 'Vinhomes A1 - Điện 90%',
          from: 'Approved by: Nguyễn Văn A',
          time: '1h ago',
          hasReply: false
        },
        {
          id: 2,
          title: 'Material request approved',
          message: 'Ốc vít x50, Keo x2kg',
          from: 'Pick up at warehouse',
          time: '3h ago',
          hasReply: false
        },
        {
          id: 3,
          title: 'New message from PM',
          message: '"Good job! Keep up the progress."',
          from: 'Nguyễn Văn A',
          time: '5h ago',
          hasReply: true
        }
      ]
    }
  },
  methods: {
    getStatusColor(status) {
      return status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
    },
    getProgressColor(progress) {
      if (progress >= 80) return 'bg-green-500'
      if (progress >= 50) return 'bg-blue-500'
      return 'bg-orange-500'
    }
  }
}
</script>
