<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-800 mb-2">
          Xin chào, {{ userName }}
        </h1>
        <p class="text-gray-600">Project Manager</p>
      </div>
      <div class="flex items-center gap-3">
        <button class="relative px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm">
          Thông báo
          <span class="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">5</span>
        </button>
        <button class="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm">
          Profile
        </button>
      </div>
    </div>

    <!-- Quick Stats -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white rounded-lg shadow p-6 border border-gray-200">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-cyan-500 rounded-lg"></div>
        </div>
        <div class="text-3xl font-bold text-gray-800 mb-1">8</div>
        <div class="text-sm text-gray-600">Dự án của tôi</div>
        <div class="text-xs text-gray-500 mt-2">projects</div>
      </div>

      <div class="bg-white rounded-lg shadow p-6 border border-gray-200">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-orange-500 rounded-lg"></div>
        </div>
        <div class="text-3xl font-bold text-gray-800 mb-1">5</div>
        <div class="text-sm text-gray-600">Đang thi công</div>
        <div class="text-xs text-gray-500 mt-2">active</div>
      </div>

      <div class="bg-white rounded-lg shadow p-6 border border-gray-200">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-blue-500 rounded-lg"></div>
        </div>
        <div class="text-3xl font-bold text-gray-800 mb-1">3</div>
        <div class="text-sm text-gray-600">Chờ duyệt</div>
        <div class="text-xs text-gray-500 mt-2">pending</div>
      </div>

      <div class="bg-white rounded-lg shadow p-6 border border-gray-200">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-red-500 rounded-lg"></div>
        </div>
        <div class="text-3xl font-bold text-gray-800 mb-1">1</div>
        <div class="text-sm text-gray-600">Trễ hạn</div>
        <div class="text-xs text-gray-500 mt-2">delayed</div>
      </div>
    </div>

    <!-- Alert Section -->
    <div class="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 shadow">
      <h3 class="text-lg font-semibold text-red-800 mb-4">CẢNH BÁO QUAN TRỌNG</h3>
          
          <div class="space-y-3">
            <div class="bg-white rounded-md p-4 border border-red-200">
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-gray-800 mb-2">
                    [!] Dự án "Masteri Thảo Điền B3" trễ deadline 3 ngày
                  </p>
                  <div class="flex gap-2">
                    <button class="text-xs bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Xem chi tiết</button>
                    <button class="text-xs bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-50">Liên hệ Foreman</button>
                    <button class="text-xs text-gray-500 hover:text-gray-700">Dismiss</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-md p-4 border border-orange-200">
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-gray-800 mb-2">
                    [!] 3 yêu cầu duyệt tiến độ đang chờ
                  </p>
                  <div class="flex gap-2">
                    <button class="text-xs bg-cyan-600 text-white px-3 py-1 rounded hover:bg-cyan-700">Duyệt ngay</button>
                    <button class="text-xs text-cyan-600 hover:text-cyan-700 underline">View all</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-md p-4 border border-yellow-200">
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-gray-800 mb-2">
                    [i] Dự án "Vinhomes A1" sắp vượt ngân sách (+8%)
                  </p>
                  <div class="flex gap-2">
                    <button class="text-xs bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-50">Xem báo cáo</button>
                    <button class="text-xs text-gray-500 hover:text-gray-700">Dismiss</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>

    <!-- Main Content: Projects and Approvals -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- My Projects List -->
      <div class="lg:col-span-2 space-y-6">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-bold text-gray-800">My Projects</h2>
          <button class="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 text-sm">
            + Tạo dự án mới
          </button>
        </div>

        <!-- Project Cards -->
        <div v-for="project in projects" :key="project.id" class="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div class="flex items-start justify-between mb-4">
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <span :class="['w-3 h-3 rounded-full', getStatusColor(project.status)]"></span>
                <span class="text-xs text-gray-600">{{ project.status }}</span>
                <span v-if="project.priority === 'High'" class="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">Priority: High</span>
              </div>
              <h3 class="text-lg font-bold text-gray-800 mb-2">{{ project.name }}</h3>
              <div class="space-y-1 text-sm text-gray-600">
                <p>Client: {{ project.client }} | Foreman: {{ project.foreman }}</p>
                <p>{{ project.address }}</p>
              </div>
            </div>
          </div>

          <!-- Progress -->
          <div class="mb-4">
            <div class="flex items-center justify-between text-sm mb-2">
              <span class="text-gray-700 font-medium">Tiến độ tổng thể:</span>
              <span class="text-gray-600">{{ project.progress }}% ({{ project.completedTasks }}/{{ project.totalTasks }} hạng mục)</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div :class="['h-2.5 rounded-full', getProgressColor(project.progress)]" :style="{ width: project.progress + '%' }"></div>
            </div>
          </div>

          <!-- Category Progress -->
          <div class="mb-4 space-y-2">
            <p class="text-sm font-medium text-gray-700 mb-2">Hạng mục đang thi công:</p>
            <div v-for="cat in project.categories" :key="cat.name" class="flex items-center gap-3">
              <span class="text-xs w-20">{{ cat.name }}:</span>
              <div class="flex-1 bg-gray-200 rounded-full h-2">
                <div :class="['h-2 rounded-full', getCategoryColor(cat.name)]" :style="{ width: cat.progress + '%' }"></div>
              </div>
              <span class="text-xs text-gray-600 w-12">{{ cat.progress }}%</span>
              <span v-if="cat.warning" class="text-xs text-orange-600">Cần chú ý</span>
            </div>
          </div>

          <!-- Budget and Deadline -->
          <div class="grid grid-cols-2 gap-4 mb-4 text-sm">
            <div>
              <span class="text-gray-600">Ngân sách:</span>
              <span class="ml-2 font-medium">{{ project.spent }}M / {{ project.budget }}M</span>
              <span class="ml-1 text-gray-500">(còn {{ project.budget - project.spent }}M)</span>
              <span :class="['ml-2 text-xs', project.margin > 0 ? 'text-green-600' : 'text-red-600']">
                Margin: {{ project.margin > 0 ? '+' : '' }}{{ project.margin }}%
              </span>
            </div>
            <div>
              <span class="text-gray-600">Deadline:</span>
              <span class="ml-2">{{ project.deadline }}</span>
              <span class="ml-1 text-gray-500">(còn {{ project.daysLeft }} ngày)</span>
              <span class="ml-2 text-xs text-green-600">On track</span>
            </div>
          </div>

          <!-- Last Update -->
          <p class="text-xs text-gray-500 mb-4">
            Cập nhật gần nhất: {{ project.lastUpdate }} bởi {{ project.foreman }}
          </p>

          <!-- Actions -->
          <div class="flex gap-2">
            <button class="px-4 py-2 bg-cyan-600 text-white text-sm rounded hover:bg-cyan-700">View Details</button>
            <button class="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">Chat with team</button>
            <button class="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">Update</button>
            <button class="px-2 py-2 text-gray-500 hover:text-gray-700">...</button>
          </div>
        </div>
      </div>

      <!-- Approvals Pending Sidebar -->
      <div class="space-y-6">
        <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h2 class="text-lg font-bold text-gray-800 mb-4">CHỜ DUYỆT</h2>

          <!-- Progress Approvals -->
          <div class="mb-6">
            <h3 class="text-sm font-semibold text-gray-700 mb-3">Tiến độ (3)</h3>
            <div class="space-y-3">
              <div v-for="approval in progressApprovals" :key="approval.id" class="border-b border-gray-200 pb-3 last:border-0">
                <p class="text-sm font-medium text-gray-800">{{ approval.project }} - {{ approval.category }} {{ approval.progress }}%</p>
                <p class="text-xs text-gray-500">{{ approval.time }} • {{ approval.photos }} ảnh</p>
                <div class="flex gap-2 mt-2">
                  <button class="text-xs bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700">Approve</button>
                  <button class="text-xs bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">Reject</button>
                  <button class="text-xs text-cyan-600 hover:text-cyan-700">View</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Material Approvals -->
          <div class="mb-4">
            <h3 class="text-sm font-semibold text-gray-700 mb-3">Vật tư (2)</h3>
            <div class="space-y-3">
              <div v-for="material in materialApprovals" :key="material.id" class="border-b border-gray-200 pb-3 last:border-0">
                <p class="text-sm font-medium text-gray-800">{{ material.name }} ({{ material.project }})</p>
                <div class="flex gap-2 mt-2">
                  <button class="text-xs bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700">Approve</button>
                  <button class="text-xs bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">Reject</button>
                  <button class="text-xs text-cyan-600 hover:text-cyan-700">View</button>
                </div>
              </div>
            </div>
          </div>

          <button class="w-full text-sm text-cyan-600 hover:text-cyan-700 font-medium">View all pending →</button>
        </div>
      </div>
    </div>

    <!-- Gantt Chart -->
    <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
      <h2 class="text-lg font-bold text-gray-800 mb-4">Tiến độ tuần này (24/12 - 30/12)</h2>
      
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-gray-200">
              <th class="text-left py-2 px-3 text-gray-700 font-medium">Project</th>
              <th class="text-center py-2 px-3 text-gray-700 font-medium w-20">Mon</th>
              <th class="text-center py-2 px-3 text-gray-700 font-medium w-20">Tue</th>
              <th class="text-center py-2 px-3 text-gray-700 font-medium w-20">Wed</th>
              <th class="text-center py-2 px-3 text-gray-700 font-medium w-20">Thu</th>
              <th class="text-center py-2 px-3 text-gray-700 font-medium w-20">Fri</th>
              <th class="text-center py-2 px-3 text-gray-700 font-medium w-20 bg-gray-50">Sat</th>
              <th class="text-center py-2 px-3 text-gray-700 font-medium w-20 bg-gray-50">Sun</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in ganttData" :key="item.project" class="border-b border-gray-100">
              <td class="py-3 px-3 text-gray-800">{{ item.project }}</td>
              <td v-for="day in 7" :key="day" :class="['text-center py-3 px-3', day >= 6 ? 'bg-gray-50' : '']">
                <div v-if="item.days[day - 1] === 'work'" class="bg-green-500 h-6 rounded"></div>
                <div v-else-if="item.days[day - 1] === 'delay'" class="bg-orange-500 h-6 rounded"></div>
                <div v-else class="bg-gray-200 h-6 rounded"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex items-center gap-6 mt-4 text-xs text-gray-600">
        <div class="flex items-center gap-2">
          <div class="w-4 h-4 bg-green-500 rounded"></div>
          <span>On schedule</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-4 h-4 bg-orange-500 rounded"></div>
          <span>Delayed</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-4 h-4 bg-gray-200 rounded"></div>
          <span>Weekend/Off</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUser } from '@/utils/auth'

export default {
  name: 'PMDashboard',
  data() {
    return {
      userName: 'Nguyễn Văn A',
      projects: [
        {
          id: 1,
          name: 'Vinhomes Landmark - Căn A1',
          client: 'Trần Thị X',
          foreman: 'Lê Văn C',
          address: '123 Đường ABC, Q1, HCM',
          status: 'Đang thi công',
          priority: 'High',
          progress: 85,
          completedTasks: 17,
          totalTasks: 20,
          categories: [
            { name: 'Điện', progress: 90, color: 'yellow' },
            { name: '💧 Nước', progress: 95, color: 'blue' },
            { name: '🎨 Sơn', progress: 45, color: 'purple', warning: true }
          ],
          spent: 145,
          budget: 150,
          margin: 3.3,
          deadline: '30/03/2024',
          daysLeft: 5,
          lastUpdate: '2 giờ trước'
        },
        {
          id: 2,
          name: 'Masteri Thảo Điền B3',
          client: 'Nguyễn Văn Y',
          foreman: 'Phạm Văn D',
          address: '456 Đường XYZ, Q2, HCM',
          status: 'Trễ hạn',
          priority: 'High',
          progress: 65,
          completedTasks: 13,
          totalTasks: 20,
          categories: [
            { name: 'Điện', progress: 70, color: 'yellow' },
            { name: '💧 Nước', progress: 60, color: 'blue' },
            { name: '🪵 Gỗ', progress: 50, color: 'brown' }
          ],
          spent: 98,
          budget: 120,
          margin: -2.5,
          deadline: '20/12/2024',
          daysLeft: -3,
          lastUpdate: '1 ngày trước'
        }
      ],
      progressApprovals: [
        { id: 1, project: 'Vinhomes A1', category: 'Điện', progress: 90, time: '2 giờ trước', photos: 3 },
        { id: 2, project: 'Masteri B3', category: 'Nước', progress: 75, time: '5 giờ trước', photos: 5 },
        { id: 3, project: 'Estella D1', category: 'Gỗ', progress: 60, time: '1 ngày trước', photos: 2 }
      ],
      materialApprovals: [
        { id: 1, name: 'Ốc vít M6 x50', project: 'Vinhomes A1' },
        { id: 2, name: 'Keo silicon x2kg', project: 'Masteri B3' }
      ],
      ganttData: [
        { project: 'Vinhomes A1', days: ['work', 'work', 'work', 'work', 'work', 'off', 'off'] },
        { project: 'Masteri B3', days: ['work', 'work', 'delay', 'delay', 'work', 'off', 'off'] },
        { project: 'Estella D1', days: ['work', 'work', 'work', 'work', 'work', 'work', 'work'] },
        { project: 'The Sun C2', days: ['work', 'work', 'work', 'work', 'work', 'off', 'off'] }
      ]
    }
  },
  methods: {
    getStatusColor(status) {
      const colors = {
        'Đang thi công': 'bg-green-500',
        'Trễ hạn': 'bg-red-500',
        'Hoàn thành': 'bg-blue-500'
      }
      return colors[status] || 'bg-gray-500'
    },
    getProgressColor(progress) {
      if (progress >= 80) return 'bg-green-500'
      if (progress >= 50) return 'bg-blue-500'
      return 'bg-orange-500'
    },
    getCategoryColor(name) {
      if (name.includes('Điện')) return 'bg-yellow-500'
      if (name.includes('Nước')) return 'bg-blue-500'
      if (name.includes('Sơn')) return 'bg-purple-500'
      if (name.includes('Gỗ')) return 'bg-amber-700'
      return 'bg-gray-500'
    }
  },
  mounted() {
    const user = getUser()
    if (user && user.name) {
      this.userName = user.name
    }
  }
}
</script>
