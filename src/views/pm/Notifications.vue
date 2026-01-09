<template>
  <div class="space-y-6">
    <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800">THÔNG BÁO</h1>
        <div class="flex gap-3">
          <button class="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50">Mark all as read</button>
          <button class="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50">Settings</button>
        </div>
      </div>

      <!-- Filters -->
      <div class="flex gap-2 mb-6">
        <button :class="['px-4 py-2 text-sm rounded', filter === 'all' ? 'bg-cyan-600 text-white' : 'bg-gray-100 text-gray-700']" @click="filter = 'all'">
          All
        </button>
        <button :class="['px-4 py-2 text-sm rounded', filter === 'unread' ? 'bg-cyan-600 text-white' : 'bg-gray-100 text-gray-700']" @click="filter = 'unread'">
          Unread (5)
        </button>
        <button :class="['px-4 py-2 text-sm rounded', filter === 'progress' ? 'bg-cyan-600 text-white' : 'bg-gray-100 text-gray-700']" @click="filter = 'progress'">
          Progress
        </button>
        <button :class="['px-4 py-2 text-sm rounded', filter === 'materials' ? 'bg-cyan-600 text-white' : 'bg-gray-100 text-gray-700']" @click="filter = 'materials'">
          Materials
        </button>
        <button :class="['px-4 py-2 text-sm rounded', filter === 'budget' ? 'bg-cyan-600 text-white' : 'bg-gray-100 text-gray-700']" @click="filter = 'budget'">
          Budget
        </button>
      </div>

      <!-- Notifications List -->
      <div class="space-y-4">
        <!-- Today -->
        <div>
          <h3 class="text-sm font-semibold text-gray-500 mb-3">Today</h3>
          <div class="space-y-3">
            <div class="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
              <div class="flex items-start justify-between mb-2">
                <div class="flex items-start gap-3 flex-1">
                  <span class="text-2xl">⏰</span>
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="bg-red-500 text-white text-xs px-2 py-0.5 rounded">NEW</span>
                      <span class="text-xs text-gray-500">2h ago</span>
                    </div>
                    <p class="font-medium text-gray-800 mb-1">Progress update pending approval</p>
                    <p class="text-sm text-gray-600">Lê Văn C updated: Điện 90% (Vinhomes A1)</p>
                  </div>
                </div>
                <button class="text-gray-400 hover:text-gray-600">...</button>
              </div>
              <div class="flex gap-2 mt-3">
                <button class="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700">Approve now</button>
                <button class="px-3 py-1 bg-white border border-gray-300 text-gray-700 text-xs rounded hover:bg-gray-50">View</button>
              </div>
            </div>

            <div class="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div class="flex items-start justify-between mb-2">
                <div class="flex items-start gap-3 flex-1">
                  <span class="text-2xl">📦</span>
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="bg-red-500 text-white text-xs px-2 py-0.5 rounded">NEW</span>
                      <span class="text-xs text-gray-500">5h ago</span>
                    </div>
                    <p class="font-medium text-gray-800 mb-1">Material request pending</p>
                    <p class="text-sm text-gray-600">Foreman requested: Ốc vít x50, Keo x2kg</p>
                  </div>
                </div>
                <button class="text-gray-400 hover:text-gray-600">...</button>
              </div>
              <div class="flex gap-2 mt-3">
                <button class="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700">Approve</button>
                <button class="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700">Reject</button>
                <button class="px-3 py-1 bg-white border border-gray-300 text-gray-700 text-xs rounded hover:bg-gray-50">View</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Yesterday -->
        <div>
          <h3 class="text-sm font-semibold text-gray-500 mb-3">Yesterday</h3>
          <div class="space-y-3">
            <div class="border border-gray-200 rounded-lg p-4 bg-white">
              <div class="flex items-start justify-between mb-2">
                <div class="flex items-start gap-3 flex-1">
                  <span class="text-2xl">⭐</span>
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="bg-gray-300 text-gray-700 text-xs px-2 py-0.5 rounded">READ</span>
                      <span class="text-xs text-gray-500">1 day ago</span>
                    </div>
                    <p class="font-medium text-gray-800 mb-1">Client feedback received</p>
                    <p class="text-sm text-gray-600">Trần Thị X: ⭐⭐⭐⭐⭐ "Rất hài lòng..."</p>
                  </div>
                </div>
                <button class="text-gray-400 hover:text-gray-600">...</button>
              </div>
              <button class="text-xs text-cyan-600 hover:text-cyan-700">View feedback</button>
            </div>

            <div class="border border-gray-200 rounded-lg p-4 bg-white">
              <div class="flex items-start justify-between mb-2">
                <div class="flex items-start gap-3 flex-1">
                  <span class="text-2xl">✅</span>
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="bg-gray-300 text-gray-700 text-xs px-2 py-0.5 rounded">READ</span>
                      <span class="text-xs text-gray-500">1 day ago</span>
                    </div>
                    <p class="font-medium text-gray-800 mb-1">Progress approved</p>
                    <p class="text-sm text-gray-600">Lê Văn C cập nhật tiến độ: Lắp đặt nước - 95%</p>
                  </div>
                </div>
                <button class="text-gray-400 hover:text-gray-600">...</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 2 Days Ago -->
        <div>
          <h3 class="text-sm font-semibold text-gray-500 mb-3">2 days ago</h3>
          <div class="space-y-3">
            <div class="border border-gray-200 rounded-lg p-4 bg-white">
              <div class="flex items-start justify-between mb-2">
                <div class="flex items-start gap-3 flex-1">
                  <span class="text-2xl">💰</span>
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="bg-gray-300 text-gray-700 text-xs px-2 py-0.5 rounded">READ</span>
                      <span class="text-xs text-gray-500">2 days ago</span>
                    </div>
                    <p class="font-medium text-gray-800 mb-1">Budget updated</p>
                    <p class="text-sm text-gray-600">You updated budget: Hạng mục Gỗ - Changed: 45M → 47M (+2M)</p>
                  </div>
                </div>
                <button class="text-gray-400 hover:text-gray-600">...</button>
              </div>
            </div>

            <div class="border border-gray-200 rounded-lg p-4 bg-white">
              <div class="flex items-start justify-between mb-2">
                <div class="flex items-start gap-3 flex-1">
                  <span class="text-2xl">💬</span>
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="bg-gray-300 text-gray-700 text-xs px-2 py-0.5 rounded">READ</span>
                      <span class="text-xs text-gray-500">2 days ago</span>
                    </div>
                    <p class="font-medium text-gray-800 mb-1">New message from client</p>
                    <p class="text-sm text-gray-600">Trần Thị X sent you a message</p>
                  </div>
                </div>
                <button class="text-gray-400 hover:text-gray-600">...</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button class="w-full mt-6 text-sm text-cyan-600 hover:text-cyan-700 font-medium">
        Load more notifications...
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PMNotifications',
  data() {
    return {
      filter: 'all'
    }
  }
}
</script>
