<template>
  <div class="space-y-6">
    <!-- Budget Overview -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">NGÂN SÁCH DỰ ÁN</h2>
      
      <h3 class="text-lg font-semibold text-gray-700 mb-6">{{ project.name }}</h3>
      
      <div class="grid grid-cols-3 gap-6 mb-4">
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <p class="text-sm text-gray-600 mb-2">Tổng ngân sách</p>
          <p class="text-2xl font-bold text-gray-900">{{ formatCurrency(budget.total) }}</p>
        </div>
        <div class="text-center p-4 bg-cyan-50 rounded-lg">
          <p class="text-sm text-gray-600 mb-2">Đã chi</p>
          <p class="text-2xl font-bold text-cyan-600">{{ formatCurrency(budget.spent) }}</p>
          <p class="text-sm text-gray-600">({{ ((budget.spent / budget.total) * 100).toFixed(1) }}%)</p>
        </div>
        <div class="text-center p-4 bg-green-50 rounded-lg">
          <p class="text-sm text-gray-600 mb-2">Còn lại</p>
          <p class="text-2xl font-bold text-green-600">{{ formatCurrency(budget.remaining) }}</p>
          <p class="text-sm text-gray-600">({{ ((budget.remaining / budget.total) * 100).toFixed(1) }}%)</p>
        </div>
      </div>

      <div class="flex items-center gap-2 mt-4">
        <span class="text-sm font-medium">Status:</span>
        <span class="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-700">
          🟡 Theo dõi (Gần đạt ngân sách)
        </span>
      </div>
    </div>

    <!-- Budget Breakdown -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-6">CHI PHÍ THEO HẠNG MỤC</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <p class="text-sm font-medium text-gray-700 mb-4">📊 Biểu đồ tròn:</p>
          <div class="relative">
            <div class="w-64 h-64 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
              <div class="text-center">
                <p class="text-4xl font-bold text-gray-800">{{ ((budget.spent / budget.total) * 100).toFixed(1) }}%</p>
                <p class="text-sm text-gray-600">Đã chi</p>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-3">
          <div 
            v-for="category in categories" 
            :key="category.id"
            class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div class="flex items-center gap-2">
              <span class="text-lg">{{ category.icon }}</span>
              <span class="font-medium text-gray-800">{{ category.name }}:</span>
            </div>
            <div class="text-right">
              <p class="font-semibold text-gray-900">{{ formatCurrency(category.spent) }}</p>
              <p class="text-xs text-gray-600">({{ category.percentage }}%)</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p class="text-sm text-blue-800">
          <strong>Note:</strong> Một số hạng mục có phát sinh chi phí bổ sung theo yêu cầu của bạn. Vui lòng xem chi tiết bên dưới.
        </p>
      </div>
    </div>

    <!-- Detailed Breakdown -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-6">CHI TIẾT THEO HẠNG MỤC</h2>
      
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-gray-200">
              <th class="text-left py-3 px-4 text-sm font-semibold text-gray-700">Hạng mục</th>
              <th class="text-right py-3 px-4 text-sm font-semibold text-gray-700">Dự toán</th>
              <th class="text-right py-3 px-4 text-sm font-semibold text-gray-700">Đã chi</th>
              <th class="text-right py-3 px-4 text-sm font-semibold text-gray-700">Còn lại</th>
              <th class="text-center py-3 px-4 text-sm font-semibold text-gray-700">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="category in detailedCategories" 
              :key="category.id"
              class="border-b border-gray-100 hover:bg-gray-50"
            >
              <td class="py-3 px-4">
                <div class="flex items-center gap-2">
                  <span>{{ category.icon }}</span>
                  <span class="font-medium text-gray-800">{{ category.name }}</span>
                </div>
              </td>
              <td class="py-3 px-4 text-right text-gray-700">{{ formatCurrency(category.estimated) }}</td>
              <td class="py-3 px-4 text-right font-semibold text-gray-900">{{ formatCurrency(category.spent) }}</td>
              <td class="py-3 px-4 text-right" :class="category.remaining >= 0 ? 'text-green-600' : 'text-red-600'">
                {{ category.remaining >= 0 ? '+' : '' }}{{ formatCurrency(category.remaining) }}
              </td>
              <td class="py-3 px-4 text-center">
                <span 
                  class="px-3 py-1 rounded-full text-xs font-medium"
                  :class="getStatusClass(category.status)"
                >
                  {{ category.statusIcon }} {{ category.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p class="text-sm text-yellow-800">
          <strong>Note:</strong> Hạng mục "Điện" vượt dự toán do bổ sung thêm ổ cắm và đèn LED cao cấp theo yêu cầu của bạn.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const project = ref({
  name: 'Vinhomes Landmark - Căn A1'
})

const budget = ref({
  total: 150000000,
  spent: 145000000,
  remaining: 5000000
})

const categories = ref([
  { id: 1, name: 'Điện', icon: '⚡', spent: 16500000, percentage: 11.0 },
  { id: 2, name: 'Nước', icon: '💧', spent: 11500000, percentage: 7.7 },
  { id: 3, name: 'Gỗ', icon: '🪵', spent: 42000000, percentage: 28.0 },
  { id: 4, name: 'Sơn', icon: '🎨', spent: 18000000, percentage: 12.0 },
  { id: 5, name: 'Trần', icon: '⬜', spent: 22000000, percentage: 14.7 },
  { id: 6, name: 'Khác', icon: '🔧', spent: 34500000, percentage: 23.0 }
])

const detailedCategories = ref([
  { id: 1, name: 'Điện', icon: '⚡', estimated: 15000000, spent: 16500000, remaining: -1500000, status: 'Vượt', statusIcon: '🔴' },
  { id: 2, name: 'Nước', icon: '💧', estimated: 12000000, spent: 11500000, remaining: 500000, status: 'Tốt', statusIcon: '🟢' },
  { id: 3, name: 'Gỗ', icon: '🪵', estimated: 45000000, spent: 42000000, remaining: 3000000, status: 'Tốt', statusIcon: '🟢' },
  { id: 4, name: 'Sơn', icon: '🎨', estimated: 20000000, spent: 18000000, remaining: 2000000, status: 'Tốt', statusIcon: '🟢' },
  { id: 5, name: 'Trần', icon: '⬜', estimated: 25000000, spent: 22000000, remaining: 3000000, status: 'Tốt', statusIcon: '🟢' },
  { id: 6, name: 'Khác', icon: '🔧', estimated: 33000000, spent: 34500000, remaining: -1500000, status: 'OK', statusIcon: '🟡' }
])

const formatCurrency = (amount) => {
  return (amount / 1000000).toFixed(1) + 'M'
}

const getStatusClass = (status) => {
  if (status === 'Vượt') return 'bg-red-100 text-red-700'
  if (status === 'Tốt') return 'bg-green-100 text-green-700'
  return 'bg-yellow-100 text-yellow-700'
}
</script>
