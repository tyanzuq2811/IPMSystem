<template>
  <div class="space-y-6">
    <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">BÁO CÁO & PHÂN TÍCH</h1>
      
      <div class="space-y-6">
        <!-- Report Type Selection -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-3">Select Report Type:</label>
          <div class="flex gap-4">
            <label class="flex items-center">
              <input type="radio" v-model="reportType" value="budget" class="mr-2">
              <span>Budget Report</span>
            </label>
            <label class="flex items-center">
              <input type="radio" v-model="reportType" value="progress" class="mr-2">
              <span>Progress Report</span>
            </label>
            <label class="flex items-center">
              <input type="radio" v-model="reportType" value="team" class="mr-2">
              <span>Team Performance</span>
            </label>
          </div>
        </div>

        <!-- Filters -->
        <div class="grid grid-cols-3 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Project:</label>
            <select v-model="filters.project" class="w-full px-4 py-2 border border-gray-300 rounded-md">
              <option value="all">All my projects</option>
              <option value="1">Vinhomes Landmark - Căn A1</option>
              <option value="2">Masteri Thảo Điền B3</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Date range:</label>
            <select v-model="filters.dateRange" class="w-full px-4 py-2 border border-gray-300 rounded-md">
              <option value="month">This month</option>
              <option value="quarter">This quarter</option>
              <option value="year">This year</option>
              <option value="custom">Custom range</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Export format:</label>
            <select v-model="exportFormat" class="w-full px-4 py-2 border border-gray-300 rounded-md">
              <option value="pdf">PDF</option>
              <option value="excel">Excel</option>
              <option value="csv">CSV</option>
            </select>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-3">
          <button @click="generateReport" class="px-6 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">
            Generate Report
          </button>
          <button class="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
            Schedule Email
          </button>
        </div>
      </div>
    </div>

    <!-- Report Content -->
    <div v-if="reportGenerated" class="bg-white rounded-lg shadow border border-gray-200 p-8">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-2">
          {{ reportType === 'budget' ? 'Budget Report' : reportType === 'progress' ? 'Progress Report' : 'Team Performance Report' }}
        </h2>
        <p class="text-gray-600">{{ filters.project === 'all' ? 'All Projects' : 'Selected Project' }} - {{ getCurrentDate() }}</p>
      </div>

      <!-- Budget Report -->
      <div v-if="reportType === 'budget'" class="space-y-6">
        <div class="grid grid-cols-3 gap-6">
          <div class="bg-blue-50 rounded-lg p-4">
            <p class="text-sm text-gray-600 mb-1">Total Budget</p>
            <p class="text-2xl font-bold text-gray-800">270M VNĐ</p>
          </div>
          <div class="bg-green-50 rounded-lg p-4">
            <p class="text-sm text-gray-600 mb-1">Total Spent</p>
            <p class="text-2xl font-bold text-green-600">243M VNĐ</p>
          </div>
          <div class="bg-orange-50 rounded-lg p-4">
            <p class="text-sm text-gray-600 mb-1">Variance</p>
            <p class="text-2xl font-bold text-orange-600">-27M VNĐ</p>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Budget by Project</h3>
          <table class="w-full">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Project</th>
                <th class="px-4 py-3 text-right text-sm font-medium text-gray-700">Budget</th>
                <th class="px-4 py-3 text-right text-sm font-medium text-gray-700">Spent</th>
                <th class="px-4 py-3 text-right text-sm font-medium text-gray-700">Variance</th>
                <th class="px-4 py-3 text-right text-sm font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm">Vinhomes Landmark - Căn A1</td>
                <td class="px-4 py-3 text-sm text-right">150M</td>
                <td class="px-4 py-3 text-sm text-right">145M</td>
                <td class="px-4 py-3 text-sm text-right text-green-600">-5M</td>
                <td class="px-4 py-3 text-sm text-right"><span class="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">Good</span></td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm">Masteri Thảo Điền B3</td>
                <td class="px-4 py-3 text-sm text-right">120M</td>
                <td class="px-4 py-3 text-sm text-right">98M</td>
                <td class="px-4 py-3 text-sm text-right text-green-600">-22M</td>
                <td class="px-4 py-3 text-sm text-right"><span class="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">Good</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Progress Report -->
      <div v-if="reportType === 'progress'" class="space-y-6">
        <div class="grid grid-cols-4 gap-6">
          <div class="bg-blue-50 rounded-lg p-4">
            <p class="text-sm text-gray-600 mb-1">Total Projects</p>
            <p class="text-2xl font-bold text-gray-800">8</p>
          </div>
          <div class="bg-green-50 rounded-lg p-4">
            <p class="text-sm text-gray-600 mb-1">Active</p>
            <p class="text-2xl font-bold text-green-600">5</p>
          </div>
          <div class="bg-yellow-50 rounded-lg p-4">
            <p class="text-sm text-gray-600 mb-1">Pending</p>
            <p class="text-2xl font-bold text-yellow-600">2</p>
          </div>
          <div class="bg-red-50 rounded-lg p-4">
            <p class="text-sm text-gray-600 mb-1">Delayed</p>
            <p class="text-2xl font-bold text-red-600">1</p>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Progress by Project</h3>
          <div class="space-y-4">
            <div class="border border-gray-200 rounded-lg p-4">
              <div class="flex justify-between items-center mb-2">
                <span class="font-medium">Vinhomes Landmark - Căn A1</span>
                <span class="text-sm text-gray-600">85%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-green-500 h-2 rounded-full" style="width: 85%"></div>
              </div>
            </div>
            <div class="border border-gray-200 rounded-lg p-4">
              <div class="flex justify-between items-center mb-2">
                <span class="font-medium">Masteri Thảo Điền B3</span>
                <span class="text-sm text-gray-600">65%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-orange-500 h-2 rounded-full" style="width: 65%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Performance Report -->
      <div v-if="reportType === 'team'" class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Team Performance</h3>
          <table class="w-full">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Role</th>
                <th class="px-4 py-3 text-right text-sm font-medium text-gray-700">Projects</th>
                <th class="px-4 py-3 text-right text-sm font-medium text-gray-700">Rating</th>
                <th class="px-4 py-3 text-right text-sm font-medium text-gray-700">On-time Rate</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm">Lê Văn C</td>
                <td class="px-4 py-3 text-sm">Foreman</td>
                <td class="px-4 py-3 text-sm text-right">3</td>
                <td class="px-4 py-3 text-sm text-right">4.8/5</td>
                <td class="px-4 py-3 text-sm text-right">95%</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm">Phạm Văn D</td>
                <td class="px-4 py-3 text-sm">Foreman</td>
                <td class="px-4 py-3 text-sm text-right">5</td>
                <td class="px-4 py-3 text-sm text-right">4.2/5</td>
                <td class="px-4 py-3 text-sm text-right">80%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Export Button -->
      <div class="mt-8 flex gap-3 justify-center">
        <button class="px-6 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">
          📥 Export as {{ exportFormat.toUpperCase() }}
        </button>
        <button class="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
          🖨️ Print Report
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PMReports',
  data() {
    return {
      reportType: 'budget',
      filters: {
        project: 'all',
        dateRange: 'month'
      },
      exportFormat: 'pdf',
      reportGenerated: false
    }
  },
  methods: {
    generateReport() {
      this.reportGenerated = true
    },
    getCurrentDate() {
      return new Date().toLocaleDateString('vi-VN')
    }
  }
}
</script>
