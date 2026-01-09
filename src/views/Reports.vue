<template>
  <div class="space-y-6 animate__animated animate__fadeIn">
    <!-- Header -->
    <div class="flex items-center justify-between animate__animated animate__fadeInDown">
      <div>
        <h1 class="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Báo Cáo Tổng Hợp
        </h1>
        <p class="text-gray-500 mt-2">Phân tích và báo cáo chi tiết về tình hình dự án</p>
      </div>
    </div>
    
    <!-- Filter Section -->
    <div class="bg-white rounded-lg shadow-lg border border-gray-100 p-6 animate__animated animate__fadeInUp" style="animation-delay: 0.1s">
      <div class="flex flex-wrap gap-3 items-center">
        <div class="flex gap-3 items-center bg-gradient-to-r from-cyan-50 to-blue-50 px-4 py-2 rounded-md">
          <label class="font-semibold text-sm text-gray-700">Từ:</label>
          <input type="date" class="px-4 py-2 border border-cyan-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" value="2024-01-15" />
          <label class="font-semibold text-sm text-gray-700 ml-2">Đến:</label>
          <input type="date" class="px-4 py-2 border border-cyan-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" value="2024-02-15" />
        </div>
        
        <select class="px-4 py-2 border border-cyan-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white">
          <option>Loại: Tổng quan</option>
          <option>Loại: Doanh thu</option>
          <option>Loại: Chi phí</option>
          <option>Loại: Tiến độ</option>
          <option>Loại: Nhân sự</option>
        </select>
        
        <select class="px-4 py-2 border border-cyan-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white">
          <option>Tất cả dự án</option>
          <option>Vinhomes A1</option>
          <option>Masteri B3</option>
        </select>
        
        <select class="px-4 py-2 border border-cyan-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white">
          <option>Tất cả PM</option>
          <option>Nguyễn Văn A</option>
          <option>Trần Thị B</option>
        </select>
        
        <button class="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-ocean-lg transform hover:-translate-y-0.5 transition-all">
          Lọc
        </button>
        <button class="px-6 py-2 border-2 border-cyan-500 text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 transition-all">
          Reset
        </button>
        <button class="px-6 py-2 border-2 border-blue-500 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
          </svg>
          Export PDF
        </button>
        <button class="px-6 py-2 border-2 border-green-500 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          Export Excel
        </button>
      </div>
    </div>
    
    <!-- Report Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white rounded-lg shadow-lg border border-blue-100 p-6 hover:shadow-ocean-lg transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp" style="animation-delay: 0.2s">
        <div class="flex justify-between items-center mb-4">
          <div class="text-sm font-semibold text-gray-600">Tổng Doanh Thu</div>
          <div class="text-sm font-semibold text-green-500 bg-green-50 px-3 py-1 rounded-full">↗️ +15%</div>
        </div>
        <div class="text-3xl font-bold text-gray-900 mb-1">850,000,000 VNĐ</div>
        <div class="text-sm text-gray-500">so với tháng trước</div>
      </div>
      
      <div class="bg-white rounded-2xl shadow-lg border border-orange-100 p-6 hover:shadow-ocean-lg transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp" style="animation-delay: 0.3s">
        <div class="flex justify-between items-center mb-4">
          <div class="text-sm font-semibold text-gray-600">Tổng Chi Phí</div>
          <div class="text-sm font-semibold text-orange-500 bg-orange-50 px-3 py-1 rounded-full">↗️ +8%</div>
        </div>
        <div class="text-3xl font-bold text-gray-900 mb-1">720,000,000 VNĐ</div>
        <div class="text-sm text-gray-500">so với tháng trước</div>
      </div>
      
      <div class="bg-white rounded-2xl shadow-lg border border-green-100 p-6 hover:shadow-ocean-lg transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp" style="animation-delay: 0.4s">
        <div class="flex justify-between items-center mb-4">
          <div class="text-sm font-semibold text-gray-600">Lợi Nhuận</div>
          <div class="text-xs font-semibold bg-green-500 text-white px-3 py-1 rounded-full">Margin: 15.3%</div>
        </div>
        <div class="text-3xl font-bold text-gray-900 mb-1">130,000,000 VNĐ</div>
        <div class="text-sm text-gray-500">Tháng này</div>
      </div>
      
      <div class="bg-white rounded-2xl shadow-lg border border-purple-100 p-6 hover:shadow-ocean-lg transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp" style="animation-delay: 0.5s">
        <div class="flex justify-between items-center mb-4">
          <div class="text-sm font-semibold text-gray-600">Dự Án Hoàn Thành</div>
          <div class="text-sm font-semibold text-green-500 bg-green-50 px-3 py-1 rounded-full">↗️ +2</div>
        </div>
        <div class="text-3xl font-bold text-gray-900 mb-1">5 dự án</div>
        <div class="text-sm text-gray-500">so với tháng trước</div>
      </div>
    </div>
    
    <!-- Charts Section -->
    <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 animate__animated animate__fadeInUp" style="animation-delay: 0.6s">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-xl font-bold text-gray-900">Doanh Thu vs Chi Phí</h3>
        <div class="flex gap-6">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-blue-500"></span>
            <span class="text-sm text-gray-700">Doanh thu</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-orange-500"></span>
            <span class="text-sm text-gray-700">Chi phí</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-green-500"></span>
            <span class="text-sm text-gray-700">Lợi nhuận</span>
          </div>
        </div>
      </div>
      <div class="h-[350px]">
        <canvas ref="revenueChart" class="w-full h-full"></canvas>
      </div>
    </div>
    
    <!-- Two Column Charts -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 animate__animated animate__fadeInUp" style="animation-delay: 0.7s">
        <h3 class="text-xl font-bold text-gray-900 mb-6">Top Dự Án Theo Doanh Thu</h3>
        <div class="space-y-5">
          <div v-for="project in topProjects" :key="project.id" class="space-y-2">
            <div class="text-sm font-semibold text-gray-900">{{ project.name }}</div>
            <div class="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
              <div class="h-full flex items-center justify-end pr-3 transition-all duration-300" :style="{ width: project.percent + '%', background: project.color }">
                <span class="font-bold text-sm text-white drop-shadow-md">{{ project.revenue }}M</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 animate__animated animate__fadeInUp" style="animation-delay: 0.8s">
        <h3 class="text-xl font-bold text-gray-900 mb-6">Phân Bố Chi Phí</h3>
        <div class="h-[280px] flex items-center justify-center my-5">
          <canvas ref="pieChart" class="max-w-[280px] max-h-[280px]"></canvas>
        </div>
        <div class="space-y-3">
          <div class="flex items-center gap-3">
            <span class="w-4 h-4 rounded bg-blue-500 flex-shrink-0"></span>
            <span class="text-sm text-gray-700">Vật liệu: 45%</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="w-4 h-4 rounded bg-green-500 flex-shrink-0"></span>
            <span class="text-sm text-gray-700">Nhân công: 30%</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="w-4 h-4 rounded bg-orange-500 flex-shrink-0"></span>
            <span class="text-sm text-gray-700">Thiết bị: 15%</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="w-4 h-4 rounded bg-gray-500 flex-shrink-0"></span>
            <span class="text-sm text-gray-700">Khác: 10%</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Detailed Table -->
    <div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate__animated animate__fadeInUp" style="animation-delay: 0.9s">
      <div class="flex justify-between items-center p-6 border-b border-gray-100">
        <h3 class="text-xl font-bold text-gray-900">Chi Tiết Dự Án</h3>
        <div class="flex gap-3">
          <button class="px-4 py-2 text-sm border-2 border-blue-500 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all">
            📤 Export selected
          </button>
          <button class="px-4 py-2 text-sm border-2 border-purple-500 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all">
            🖨️ Print
          </button>
        </div>
      </div>
      
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gradient-to-r from-cyan-50 to-blue-50">
            <tr>
              <th class="px-6 py-4 text-left">
                <input type="checkbox" class="w-4 h-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500" />
              </th>
              <th class="px-6 py-4 text-left text-sm font-bold text-gray-700">Dự án</th>
              <th class="px-6 py-4 text-left text-sm font-bold text-gray-700">PM</th>
              <th class="px-6 py-4 text-left text-sm font-bold text-gray-700">Doanh thu</th>
              <th class="px-6 py-4 text-left text-sm font-bold text-gray-700">Chi phí</th>
              <th class="px-6 py-4 text-left text-sm font-bold text-gray-700">Lợi nhuận</th>
              <th class="px-6 py-4 text-left text-sm font-bold text-gray-700">Margin</th>
              <th class="px-6 py-4 text-left text-sm font-bold text-gray-700">Tiến độ</th>
              <th class="px-6 py-4 text-left text-sm font-bold text-gray-700">Trạng thái</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="project in detailedProjects" :key="project.id" class="hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-200">
              <td class="px-6 py-4">
                <input type="checkbox" class="w-4 h-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500" />
              </td>
              <td class="px-6 py-4 font-semibold text-gray-900">{{ project.name }}</td>
              <td class="px-6 py-4 text-gray-700">{{ project.pm }}</td>
              <td class="px-6 py-4 text-gray-900">{{ formatMoney(project.revenue) }}</td>
              <td class="px-6 py-4 text-gray-900">{{ formatMoney(project.cost) }}</td>
              <td class="px-6 py-4 font-semibold" :class="project.profit > 0 ? 'text-green-600' : 'text-red-600'">
                {{ formatMoney(project.profit) }}
              </td>
              <td class="px-6 py-4">
                <span :class="['px-3 py-1 rounded-full text-xs font-semibold', 
                  project.marginClass === 'badge-success' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700']
                ">
                  {{ project.margin }}%
                </span>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2">
                  <div class="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" :style="{ width: project.progress + '%' }"></div>
                  </div>
                  <span class="text-sm text-gray-700">{{ project.progress }}%</span>
                </div>
              </td>
              <td class="px-6 py-4">
                <span :class="['px-3 py-1 rounded-full text-xs font-semibold',
                  project.statusClass === 'badge-success' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                ]">
                  {{ project.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reports',
  data() {
    return {
      topProjects: [
        { id: 1, name: 'Vinhomes Landmark A1', revenue: 250, percent: 100, color: '#3B82F6' },
        { id: 2, name: 'Masteri Thảo Điền B3', revenue: 180, percent: 72, color: '#10B981' },
        { id: 3, name: 'The Sun Avenue C2', revenue: 150, percent: 60, color: '#F59E0B' },
        { id: 4, name: 'Estella Heights D1', revenue: 120, percent: 48, color: '#8B5CF6' },
        { id: 5, name: 'Saigon Pearl E4', revenue: 80, percent: 32, color: '#EC4899' }
      ],
      detailedProjects: [
        { id: 1, name: 'Vinhomes A1', pm: 'Nguyễn Văn A', revenue: 250, cost: 220, profit: 30, margin: 12, marginClass: 'badge-success', progress: 95, status: 'Hoàn thành', statusClass: 'badge-success' },
        { id: 2, name: 'Masteri B3', pm: 'Trần Thị B', revenue: 180, cost: 165, profit: 15, margin: 8.3, marginClass: 'badge-warning', progress: 78, status: 'Đang thi công', statusClass: 'badge-primary' },
        { id: 3, name: 'The Sun C2', pm: 'Lê Văn C', revenue: 150, cost: 135, profit: 15, margin: 10, marginClass: 'badge-success', progress: 85, status: 'Đang thi công', statusClass: 'badge-primary' },
        { id: 4, name: 'Estella D1', pm: 'Nguyễn Văn A', revenue: 120, cost: 108, profit: 12, margin: 10, marginClass: 'badge-success', progress: 92, status: 'Đang thi công', statusClass: 'badge-primary' },
        { id: 5, name: 'Saigon E4', pm: 'Trần Thị B', revenue: 80, cost: 75, profit: 5, margin: 6.3, marginClass: 'badge-warning', progress: 100, status: 'Hoàn thành', statusClass: 'badge-success' }
      ]
    }
  },
  mounted() {
    this.renderCharts()
  },
  methods: {
    formatMoney(value) {
      return value + 'M'
    },
    renderCharts() {
      // Revenue Chart
      const revenueCtx = this.$refs.revenueChart?.getContext('2d')
      if (revenueCtx) {
        const months = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12']
        const revenue = [120, 150, 180, 170, 200, 190, 220, 240, 230, 250, 260, 280]
        const cost = [100, 130, 150, 145, 170, 165, 190, 200, 195, 210, 220, 235]
        
        const maxVal = Math.max(...revenue)
        const width = revenueCtx.canvas.width
        const height = revenueCtx.canvas.height
        const barWidth = width / months.length
        
        // Draw bars
        revenue.forEach((val, i) => {
          const x = i * barWidth + barWidth * 0.2
          const barH = (val / maxVal) * (height - 40)
          const y = height - barH - 30
          
          revenueCtx.fillStyle = '#3B82F6'
          revenueCtx.fillRect(x, y, barWidth * 0.3, barH)
          
          const costBarH = (cost[i] / maxVal) * (height - 40)
          const costY = height - costBarH - 30
          revenueCtx.fillStyle = '#F59E0B'
          revenueCtx.fillRect(x + barWidth * 0.35, costY, barWidth * 0.3, costBarH)
          
          revenueCtx.fillStyle = '#666'
          revenueCtx.font = '11px Arial'
          revenueCtx.textAlign = 'center'
          revenueCtx.fillText(months[i], x + barWidth * 0.3, height - 10)
        })
      }
      
      // Pie Chart
      const pieCtx = this.$refs.pieChart?.getContext('2d')
      if (pieCtx) {
        const data = [45, 30, 15, 10]
        const colors = ['#3B82F6', '#10B981', '#F59E0B', '#6B7280']
        const centerX = pieCtx.canvas.width / 2
        const centerY = pieCtx.canvas.height / 2
        const radius = Math.min(centerX, centerY) - 20
        
        let currentAngle = -Math.PI / 2
        
        data.forEach((value, index) => {
          const sliceAngle = (value / 100) * 2 * Math.PI
          
          pieCtx.beginPath()
          pieCtx.moveTo(centerX, centerY)
          pieCtx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle)
          pieCtx.closePath()
          pieCtx.fillStyle = colors[index]
          pieCtx.fill()
          
          currentAngle += sliceAngle
        })
      }
    }
  }
}
</script>
