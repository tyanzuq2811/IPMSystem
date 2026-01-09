<template>
  <div class="space-y-6 animate__animated animate__fadeIn">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate__animated animate__fadeInLeft">Tất Cả Dự Án</h1>
        <p class="text-gray-500 mt-1">Quản lý và theo dõi tất cả các dự án nội thất</p>
      </div>
      <button class="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:shadow-ocean-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 animate__animated animate__fadeInRight">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
        </svg>
        Tạo dự án mới
      </button>
    </div>
    
    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white rounded-lg shadow-lg hover:shadow-ocean-lg transition-all duration-300 p-6 border border-cyan-100 transform hover:-translate-y-2 animate__animated animate__fadeInUp" style="animation-delay: 0.1s">
        <div class="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">24</div>
        <div class="text-sm text-gray-500">Tổng số</div>
      </div>
      <div class="bg-white rounded-lg shadow-lg hover:shadow-ocean-lg transition-all duration-300 p-6 border-l-4 border-orange-500 transform hover:-translate-y-2 animate__animated animate__fadeInUp" style="animation-delay: 0.2s">
        <div class="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2">15</div>
        <div class="text-sm text-gray-500">Đang thi công</div>
      </div>
      <div class="bg-white rounded-lg shadow-lg hover:shadow-ocean-lg transition-all duration-300 p-6 border-l-4 border-green-500 transform hover:-translate-y-2 animate__animated animate__fadeInUp" style="animation-delay: 0.3s">
        <div class="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">7</div>
        <div class="text-sm text-gray-500">Hoàn thành</div>
      </div>
      <div class="bg-white rounded-lg shadow-lg hover:shadow-ocean-lg transition-all duration-300 p-6 border-l-4 border-red-500 transform hover:-translate-y-2 animate__animated animate__fadeInUp" style="animation-delay: 0.4s">
        <div class="text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-2">2</div>
        <div class="text-sm text-gray-500">Tạm dừng</div>
      </div>
    </div>
    
    <!-- Filters -->
    <div class="bg-white rounded-lg shadow-lg p-6 border border-cyan-100 animate__animated animate__fadeInUp">
      <div class="flex flex-wrap gap-4">
        <input type="text" class="flex-1 min-w-[300px] px-4 py-3 bg-gradient-to-r from-gray-50 to-cyan-50 border border-cyan-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="🔍 Tìm kiếm theo tên, địa chỉ, khách hàng..." v-model="searchQuery" />
        
        <select class="px-4 py-3 bg-gradient-to-r from-gray-50 to-cyan-50 border border-cyan-200 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500" v-model="filterStatus">
          <option value="">Tất cả trạng thái</option>
          <option value="in-progress">Đang thi công</option>
          <option value="completed">Hoàn thành</option>
          <option value="paused">Tạm dừng</option>
        </select>
        
        <select class="px-4 py-3 bg-gradient-to-r from-gray-50 to-cyan-50 border border-cyan-200 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500" v-model="filterPM">
          <option value="">Tất cả PM</option>
          <option value="pm1">Nguyễn Văn A</option>
          <option value="pm2">Trần Thị B</option>
        </select>
        
        <select class="px-4 py-3 bg-gradient-to-r from-gray-50 to-cyan-50 border border-cyan-200 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500">
          <option>Thời gian: Tháng này</option>
          <option>Thời gian: Tháng trước</option>
          <option>Thời gian: 3 tháng</option>
        </select>
        
        <button class="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:shadow-ocean-lg transform hover:scale-105 transition-all duration-300 font-semibold">Lọc</button>
        <button class="px-6 py-3 bg-white border-2 border-cyan-500 text-cyan-600 rounded-xl hover:bg-cyan-50 transition-all duration-300 font-semibold">Reset</button>
      </div>
    </div>
    
    <!-- View Toggle -->
    <div class="flex gap-2">
      <button :class="['px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2', viewMode === 'grid' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-ocean-lg' : 'bg-white border-2 border-cyan-200 text-gray-700 hover:bg-cyan-50']" @click="viewMode = 'grid'">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
        Grid
      </button>
      <button :class="['px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2', viewMode === 'list' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-ocean-lg' : 'bg-white border-2 border-cyan-200 text-gray-700 hover:bg-cyan-50']" @click="viewMode = 'list'">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        List
      </button>
    </div>
    
    <!-- Grid View -->
    <div v-if="viewMode === 'grid'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="project in filteredProjects" :key="project.id" @click="goToDetail(project.id)" 
           class="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-ocean-lg transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
        <!-- Project Image -->
        <div class="relative h-48 overflow-hidden">
          <img :src="project.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
          <span :class="['absolute top-4 right-4 px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm',
            project.statusClass === 'success' ? 'bg-green-500/90 text-white' :
            project.statusClass === 'primary' ? 'bg-blue-500/90 text-white' :
            project.statusClass === 'warning' ? 'bg-orange-500/90 text-white' : 'bg-gray-500/90 text-white'
          ]">
            {{ project.statusLabel }}
          </span>
        </div>
        
        <!-- Project Body -->
        <div class="p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">{{ project.name }}</h3>
          <p class="text-gray-500 text-sm mb-4 flex items-center gap-2">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>
            {{ project.address }}
          </p>
          
          <!-- Team Info -->
          <div class="space-y-2 mb-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-md p-4">
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-600 flex items-center gap-2">
                <span class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </span>
                PM:
              </span>
              <span class="font-semibold text-gray-900">{{ project.pm }}</span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-600 flex items-center gap-2">
                <span class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                  </svg>
                </span>
                Foreman:
              </span>
              <span class="font-semibold text-gray-900">{{ project.foreman }}</span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-600 flex items-center gap-2">
                <span class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </span>
                Client:
              </span>
              <span class="font-semibold text-gray-900">{{ project.client }}</span>
            </div>
          </div>
          
          <!-- Progress -->
          <div class="mb-4">
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm text-gray-600 font-medium">Progress</span>
              <span class="text-sm font-bold" :class="project.progress >= 80 ? 'text-green-600' : project.progress >= 50 ? 'text-blue-600' : 'text-orange-600'">{{ project.progress }}%</span>
            </div>
            <div class="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div class="h-full transition-all duration-300 rounded-full" 
                   :class="project.progress >= 80 ? 'bg-gradient-to-r from-green-400 to-green-600' : project.progress >= 50 ? 'bg-gradient-to-r from-cyan-400 to-blue-600' : 'bg-gradient-to-r from-orange-400 to-orange-600'"
                   :style="{ width: project.progress + '%' }"></div>
            </div>
          </div>
          
          <!-- Budget -->
          <div class="mb-4 bg-gray-50 rounded-md p-4">
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-600 flex items-center gap-2">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Budget:
              </span>
              <span :class="['text-sm font-bold', project.actualBudget > project.budget ? 'text-red-600' : 'text-green-600']">
                {{ project.actualBudget }}M / {{ project.budget }}M
              </span>
            </div>
            <div v-if="project.actualBudget > project.budget" class="mt-2">
              <span class="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
                Vượt {{ project.actualBudget - project.budget }}M
              </span>
            </div>
          </div>
          
          <!-- Deadline -->
          <div class="mb-4 flex justify-between items-center text-sm">
            <span class="text-gray-600 flex items-center gap-2">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Deadline:
            </span>
            <span :class="['font-semibold', project.daysLeft <= 5 ? 'text-red-600' : 'text-gray-900']">
              {{ project.deadline }} <span class="text-xs">({{ project.daysLeft }} ngày)</span>
            </span>
          </div>
          
          <!-- Actions -->
          <div class="flex gap-2 pt-4 border-t border-gray-100">
            <button class="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all text-sm" @click.stop="goToDetail(project.id)">
              View Details
            </button>
            <button class="px-4 py-2 border-2 border-cyan-500 text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 transition-all text-sm" @click.stop>
              💬
            </button>
            <button class="px-3 py-2 border-2 border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-all" @click.stop>
              ⋮
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- List View -->
    <div v-if="viewMode === 'list'" class="card">
      <table class="table">
        <thead>
          <tr>
            <th width="60">Ảnh</th>
            <th>Tên dự án</th>
            <th>Client</th>
            <th>PM</th>
            <th>Tiến độ</th>
            <th>Ngân sách</th>
            <th>Deadline</th>
            <th>Trạng thái</th>
            <th width="100">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in filteredProjects" :key="project.id" @click="goToDetail(project.id)" style="cursor: pointer;">
            <td>
              <img :src="project.image" alt="" style="width: 50px; height: 50px; object-fit: cover; border-radius: var(--radius-sm);" />
            </td>
            <td style="font-weight: 600;">{{ project.name }}</td>
            <td>{{ project.client }}</td>
            <td>{{ project.pm }}</td>
            <td>
              <div style="display: flex; align-items: center; gap: 8px;">
                <div class="progress-bar" style="width: 80px;">
                  <div :class="['progress-fill', project.progress >= 80 ? 'success' : '']" :style="{ width: project.progress + '%' }"></div>
                </div>
                <span>{{ project.progress }}%</span>
              </div>
            </td>
            <td>
              <div>{{ project.actualBudget }}M / {{ project.budget }}M</div>
              <div v-if="project.actualBudget > project.budget">
                <span class="badge badge-danger" style="font-size: 11px;">Vượt {{ project.actualBudget - project.budget }}M</span>
              </div>
            </td>
            <td>
              <div>{{ project.deadline }}</div>
              <div :class="{ 'text-danger': project.daysLeft <= 5 }" style="font-size: 12px;">{{ project.daysLeft }} ngày</div>
            </td>
            <td>
              <span :class="['badge', 'badge-' + project.statusClass]">{{ project.statusLabel }}</span>
            </td>
            <td>
              <button class="btn-icon" @click.stop>⋮</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      viewMode: 'grid',
      searchQuery: '',
      filterStatus: '',
      filterPM: '',
      projects: [
        {
          id: 1,
          name: 'Vinhomes Landmark - Căn A1',
          address: '123 Đường ABC, Q1, HCM',
          image: 'https://via.placeholder.com/400x250/3B82F6/fff?text=Vinhomes+A1',
          pm: 'Nguyễn Văn A',
          foreman: 'Lê Văn C',
          client: 'Trần Thị X',
          progress: 85,
          budget: 150,
          actualBudget: 145,
          deadline: '30/03/2024',
          daysLeft: 5,
          status: 'in-progress',
          statusLabel: 'Đang thi công',
          statusClass: 'warning'
        },
        {
          id: 2,
          name: 'Masteri Thảo Điền - Căn B3',
          address: '456 Đường XYZ, Q2, HCM',
          image: 'https://via.placeholder.com/400x250/10B981/fff?text=Masteri+B3',
          pm: 'Trần Thị B',
          foreman: 'Phạm Văn D',
          client: 'Nguyễn Văn Y',
          progress: 78,
          budget: 120,
          actualBudget: 128,
          deadline: '15/04/2024',
          daysLeft: 20,
          status: 'in-progress',
          statusLabel: 'Đang thi công',
          statusClass: 'warning'
        },
        {
          id: 3,
          name: 'The Sun Avenue - Căn C2',
          address: '789 Đường DEF, Q7, HCM',
          image: 'https://via.placeholder.com/400x250/F59E0B/fff?text=Sun+Avenue',
          pm: 'Nguyễn Văn A',
          foreman: 'Lê Văn E',
          client: 'Trần Thị Z',
          progress: 95,
          budget: 100,
          actualBudget: 98,
          deadline: '01/03/2024',
          daysLeft: 2,
          status: 'in-progress',
          statusLabel: 'Đang thi công',
          statusClass: 'warning'
        },
        {
          id: 4,
          name: 'Estella Heights - Căn D1',
          address: '321 Đường GHI, Q2, HCM',
          image: 'https://via.placeholder.com/400x250/8B5CF6/fff?text=Estella',
          pm: 'Lê Văn C',
          foreman: 'Hoàng Văn F',
          client: 'Phạm Thị W',
          progress: 100,
          budget: 90,
          actualBudget: 88,
          deadline: '20/02/2024',
          daysLeft: -5,
          status: 'completed',
          statusLabel: 'Hoàn thành',
          statusClass: 'success'
        },
        {
          id: 5,
          name: 'Saigon Pearl - Căn E4',
          address: '654 Đường JKL, Bình Thạnh, HCM',
          image: 'https://via.placeholder.com/400x250/EC4899/fff?text=Saigon+Pearl',
          pm: 'Trần Thị B',
          foreman: 'Nguyễn Văn G',
          client: 'Lê Văn V',
          progress: 45,
          budget: 80,
          actualBudget: 40,
          deadline: '30/05/2024',
          daysLeft: 65,
          status: 'paused',
          statusLabel: 'Tạm dừng',
          statusClass: 'danger'
        },
        {
          id: 6,
          name: 'Vinhomes Central Park - Căn F5',
          address: '987 Đường MNO, Bình Thạnh, HCM',
          image: 'https://via.placeholder.com/400x250/6366F1/fff?text=Central+Park',
          pm: 'Nguyễn Văn A',
          foreman: 'Trần Văn H',
          client: 'Hoàng Thị U',
          progress: 62,
          budget: 200,
          actualBudget: 150,
          deadline: '10/06/2024',
          daysLeft: 75,
          status: 'in-progress',
          statusLabel: 'Đang thi công',
          statusClass: 'warning'
        }
      ]
    }
  },
  computed: {
    filteredProjects() {
      let result = this.projects
      
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        result = result.filter(p =>
          p.name.toLowerCase().includes(query) ||
          p.address.toLowerCase().includes(query) ||
          p.client.toLowerCase().includes(query)
        )
      }
      
      if (this.filterStatus) {
        result = result.filter(p => p.status === this.filterStatus)
      }
      
      return result
    }
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/admin/projects/${id}`)
    }
  }
}
</script>
