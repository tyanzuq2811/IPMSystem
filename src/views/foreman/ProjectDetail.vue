<template>
  <div class="space-y-6">
    <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
      <div class="flex items-center justify-between mb-6">
        <div>
          <button @click="$router.push('/foreman/dashboard')" class="text-cyan-600 hover:text-cyan-700 mb-2">
            ← Back to My Projects
          </button>
          <h1 class="text-2xl font-bold text-gray-800">{{ project.name }}</h1>
          <div class="flex items-center gap-4 text-sm text-gray-600 mt-2">
            <span>PM: {{ project.pm }}</span>
            <span>Client: {{ project.client }}</span>
            <span :class="['flex items-center gap-1', getStatusColor(project.status)]">
              <span class="w-2 h-2 rounded-full bg-current"></span>
              {{ project.statusText }}
            </span>
          </div>
        </div>
        <div class="flex gap-2">
          <button class="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 text-sm">Chat with PM</button>
          <button class="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-sm">Call PM</button>
          <button class="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-sm">Settings</button>
        </div>
      </div>

      <!-- Tabs -->
      <div class="border-b border-gray-200 mb-6">
        <div class="flex gap-6">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="['pb-3 border-b-2 transition-colors', activeTab === tab.id ? 'border-cyan-600 text-cyan-600 font-medium' : 'border-transparent text-gray-600 hover:text-gray-800']"
          >
            {{ tab.name }}
          </button>
        </div>
      </div>

      <!-- Tab: Overview -->
      <div v-if="activeTab === 'overview'">
        <h2 class="text-lg font-semibold text-gray-800 mb-4">TỔNG QUAN</h2>
        
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p class="text-sm text-gray-600">Address:</p>
            <p class="font-medium text-gray-800">{{ project.address }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">Area:</p>
            <p class="font-medium text-gray-800">{{ project.area }} m²</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">Start date:</p>
            <p class="font-medium text-gray-800">{{ project.startDate }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">Deadline:</p>
            <p class="font-medium text-gray-800">{{ project.deadline }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">Days remaining:</p>
            <p class="font-medium text-gray-800">{{ project.daysRemaining }} days</p>
          </div>
        </div>

        <div class="mb-6">
          <div class="flex items-center justify-between mb-2">
            <p class="font-medium text-gray-700">Overall progress:</p>
            <p class="text-gray-600">{{ project.progress }}%</p>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-3">
            <div class="bg-green-500 h-3 rounded-full" :style="{ width: project.progress + '%' }"></div>
          </div>
        </div>

        <div class="mb-6">
          <p class="font-medium text-gray-700 mb-3">Your categories:</p>
          <div class="space-y-3">
            <div v-for="category in project.yourCategories" :key="category.name">
              <div class="flex items-center justify-between mb-1">
                <span class="text-gray-700">{{ category.name }}:</span>
                <span class="text-gray-600">{{ category.progress }}% (Your responsibility)</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div :class="'bg-' + category.color + '-500 h-2 rounded-full'" :style="{ width: category.progress + '%' }"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex gap-2">
          <button @click="$router.push(`/foreman/projects/${project.id}/update-progress`)" class="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">Update progress</button>
          <button class="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50">View full details</button>
        </div>
      </div>

      <!-- Tab: My Tasks -->
      <div v-if="activeTab === 'tasks'">
        <h2 class="text-lg font-semibold text-gray-800 mb-4">NHIỆM VỤ CỦA TÔI</h2>
        
        <div class="space-y-6">
          <div v-for="category in tasksByCategory" :key="category.name">
            <h3 class="font-semibold text-gray-800 mb-3">{{ category.name }} ({{ category.progress }}%)</h3>
            <div class="space-y-2 ml-4">
              <div v-for="task in category.tasks" :key="task.id" class="flex items-start gap-3 p-3 rounded hover:bg-gray-50">
                <input type="checkbox" :checked="task.completed" :disabled="task.completed" class="mt-1 w-4 h-4">
                <div class="flex-1">
                  <p :class="['font-medium', task.completed ? 'text-gray-500 line-through' : 'text-gray-800']">
                    {{ task.name }}
                  </p>
                  <p class="text-sm text-gray-600">
                    {{ task.completed ? 'Completed ' + task.completedDate : 'Due: ' + task.dueDate }}
                  </p>
                </div>
                <button v-if="!task.completed" class="px-3 py-1 bg-cyan-600 text-white text-sm rounded hover:bg-cyan-700">
                  {{ task.inProgress ? 'Mark complete' : 'Start' }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="flex gap-2 mt-6">
          <button class="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">Add task</button>
          <button class="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50">View calendar</button>
        </div>
      </div>

      <!-- Tab: Progress History -->
      <div v-if="activeTab === 'history'">
        <h2 class="text-lg font-semibold text-gray-800 mb-4">LỊCH SỬ CẬP NHẬT</h2>
        
        <div class="space-y-4">
          <div v-for="update in progressHistory" :key="update.id" class="border-l-4 border-cyan-500 pl-4 py-2">
            <div class="flex items-start justify-between">
              <div>
                <p class="font-medium text-gray-800">{{ update.category }} - {{ update.progress }}%</p>
                <p class="text-sm text-gray-600 mt-1">{{ update.description }}</p>
                <p class="text-xs text-gray-500 mt-2">{{ update.date }} {{ update.time }}</p>
              </div>
              <span :class="['px-3 py-1 rounded text-sm', update.approved ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700']">
                {{ update.approved ? 'Approved' : 'Pending' }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab: Materials -->
      <div v-if="activeTab === 'materials'">
        <h2 class="text-lg font-semibold text-gray-800 mb-4">VẬT TƯ</h2>
        <p class="text-gray-600 mb-4">View and request materials for this project</p>
        <button @click="$router.push('/foreman/materials/request')" class="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">
          Request Materials
        </button>
      </div>

      <!-- Tab: Chat -->
      <div v-if="activeTab === 'chat'">
        <h2 class="text-lg font-semibold text-gray-800 mb-4">CHAT WITH PM</h2>
        <div class="border border-gray-200 rounded-lg p-4 h-96 overflow-y-auto mb-4">
          <div v-for="message in messages" :key="message.id" :class="['mb-4', message.fromMe ? 'text-right' : '']">
            <div :class="['inline-block p-3 rounded-lg max-w-md', message.fromMe ? 'bg-cyan-600 text-white' : 'bg-gray-100 text-gray-800']">
              <p>{{ message.text }}</p>
              <p class="text-xs mt-1 opacity-70">{{ message.time }}</p>
            </div>
          </div>
        </div>
        <div class="flex gap-2">
          <input type="text" placeholder="Type message..." class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500">
          <button class="px-6 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetail',
  data() {
    return {
      activeTab: 'overview',
      tabs: [
        { id: 'overview', name: 'Overview' },
        { id: 'tasks', name: 'My Tasks' },
        { id: 'history', name: 'Progress History' },
        { id: 'materials', name: 'Materials' },
        { id: 'chat', name: 'Chat' }
      ],
      project: {
        id: this.$route.params.id,
        name: 'Vinhomes Landmark A1',
        pm: 'Nguyễn Văn A',
        client: 'Trần Thị X',
        status: 'active',
        statusText: 'Active',
        address: '123 Đường ABC, Q1, HCM',
        area: 120.5,
        startDate: '15/01/2024',
        deadline: '30/03/2024',
        daysRemaining: 5,
        progress: 85,
        yourCategories: [
          { name: 'Điện', progress: 90, color: 'yellow' },
          { name: 'Nước', progress: 95, color: 'blue' }
        ]
      },
      tasksByCategory: [
        {
          name: 'ĐIỆN',
          progress: 90,
          tasks: [
            { id: 1, name: 'Đi dây điện âm tường', completed: true, completedDate: '20/12' },
            { id: 2, name: 'Lắp đặt tủ điện', completed: true, completedDate: '22/12' },
            { id: 3, name: 'Lắp ổ cắm, công tắc', completed: true, completedDate: '26/12' },
            { id: 4, name: 'Lắp đèn chiếu sáng', completed: false, dueDate: '28/12', inProgress: true },
            { id: 5, name: 'Kiểm tra an toàn', completed: false, dueDate: '29/12', inProgress: false }
          ]
        },
        {
          name: 'NƯỚC',
          progress: 95,
          tasks: [
            { id: 6, name: 'Lắp đặt ống nước', completed: true, completedDate: '18/12' },
            { id: 7, name: 'Lắp bồn cầu, lavabo', completed: true, completedDate: '23/12' },
            { id: 8, name: 'Test hệ thống', completed: true, completedDate: '26/12' },
            { id: 9, name: 'Hoàn thiện', completed: false, dueDate: '27/12', inProgress: true }
          ]
        }
      ],
      progressHistory: [
        { id: 1, category: 'Điện', progress: 90, description: 'Hoàn thành lắp ổ cắm và công tắc', date: '26/12/2024', time: '02:30 PM', approved: true },
        { id: 2, category: 'Nước', progress: 95, description: 'Test hệ thống nước thành công', date: '26/12/2024', time: '10:00 AM', approved: true },
        { id: 3, category: 'Điện', progress: 85, description: 'Lắp đặt tủ điện hoàn tất', date: '22/12/2024', time: '04:00 PM', approved: true }
      ],
      messages: [
        { id: 1, text: 'Anh ơi, em đã update tiến độ điện 90% rồi ạ', fromMe: true, time: '10:30 AM' },
        { id: 2, text: 'Ok em, anh xem rồi, làm tốt lắm. Tiếp tục nhé!', fromMe: false, time: '11:00 AM' },
        { id: 3, text: 'Dạ vâng anh, em cảm ơn anh', fromMe: true, time: '11:05 AM' }
      ]
    }
  },
  methods: {
    getStatusColor(status) {
      return status === 'active' ? 'text-green-600' : 'text-yellow-600'
    }
  }
}
</script>
