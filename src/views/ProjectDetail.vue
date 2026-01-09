<template>
  <div class="space-y-6 animate__animated animate__fadeIn">
    <!-- Header -->
    <div class="space-y-4">
      <button class="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold transition-colors group" @click="goBack">
        <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        Quay lại Dự án
      </button>
      
      <div class="flex items-start justify-between">
        <div class="flex-1">
          <h1 class="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2 animate__animated animate__fadeInLeft">{{ project.name }}</h1>
          <p class="text-gray-600 mb-3 flex items-center gap-2">
            <svg class="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            {{ project.address }}
          </p>
          <span :class="[
            'inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold',
            project.statusClass === 'warning' ? 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700' : '',
            project.statusClass === 'success' ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700' : '',
            project.statusClass === 'danger' ? 'bg-gradient-to-r from-red-100 to-pink-100 text-red-700' : ''
          ]">{{ project.statusLabel }}</span>
        </div>
        
        <div class="flex gap-3 animate__animated animate__fadeInRight">
          <button class="px-4 py-2 bg-white border-2 border-cyan-500 text-cyan-600 rounded-xl hover:bg-cyan-50 transition-all duration-300 font-semibold flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            Cài đặt
          </button>
          <button class="px-4 py-2 bg-white border-2 border-cyan-500 text-cyan-600 rounded-xl hover:bg-cyan-50 transition-all duration-300 font-semibold flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            Báo cáo
          </button>
          <button class="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:shadow-ocean-lg transform hover:scale-105 transition-all duration-300 font-semibold flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            Nhắn tin
          </button>
        </div>
      </div>
    </div>
    
    <!-- Quick Stats -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white rounded-lg shadow-lg hover:shadow-ocean-lg transition-all duration-300 p-6 border border-green-100 transform hover:-translate-y-2 animate__animated animate__fadeInUp" style="animation-delay: 0.1s">
        <div class="text-sm text-gray-500 mb-2">Tiến độ</div>
        <div class="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">{{ project.progress }}%</div>
        <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden mb-2">
          <div class="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" :style="{ width: project.progress + '%' }"></div>
        </div>
        <div class="text-xs text-green-600 font-semibold flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Đúng tiến độ
        </div>
      </div>
      
      <div class="bg-white rounded-2xl shadow-lg hover:shadow-ocean-lg transition-all duration-300 p-6 border border-cyan-100 transform hover:-translate-y-2 animate__animated animate__fadeInUp" style="animation-delay: 0.2s">
        <div class="text-sm text-gray-500 mb-2">Ngân sách</div>
        <div class="text-2xl font-bold text-gray-900 mb-3">{{ project.actualBudget }}M/{{ project.budget }}M</div>
        <div :class="[
          'text-sm font-semibold flex items-center gap-1',
          project.actualBudget > project.budget ? 'text-red-600' : 'text-green-600'
        ]">
          <svg v-if="project.actualBudget > project.budget" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"/></svg>
          <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
          {{ project.actualBudget > project.budget ? '+' : '-' }}{{ Math.abs(project.budget - project.actualBudget) }}M
        </div>
      </div>
      
      <div class="bg-white rounded-2xl shadow-lg hover:shadow-ocean-lg transition-all duration-300 p-6 border border-blue-100 transform hover:-translate-y-2 animate__animated animate__fadeInUp" style="animation-delay: 0.3s">
        <div class="text-sm text-gray-500 mb-2">Thời gian</div>
        <div class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">{{ project.daysLeft }}</div>
        <div class="text-sm text-gray-600">ngày còn lại</div>
      </div>
      
      <div class="bg-white rounded-2xl shadow-lg hover:shadow-ocean-lg transition-all duration-300 p-6 border border-purple-100 transform hover:-translate-y-2 animate__animated animate__fadeInUp" style="animation-delay: 0.4s">
        <div class="text-sm text-gray-500 mb-2">Nhóm</div>
        <div class="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">5</div>
        <div class="text-sm text-purple-600 font-semibold flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
          Thành viên tham gia
        </div>
      </div>
    </div>
    
    <!-- Tabs -->
    <div class="bg-white rounded-lg shadow-lg border border-cyan-100 p-2 flex flex-wrap gap-2 animate__animated animate__fadeInUp">
      <button :class="[
        'px-6 py-3 rounded-xl font-semibold transition-all duration-300',
        activeTab === 'overview' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-ocean' : 'text-gray-600 hover:bg-cyan-50'
      ]" @click="activeTab = 'overview'">
        Tổng quan
      </button>
      <button :class="[
        'px-6 py-3 rounded-xl font-semibold transition-all duration-300',
        activeTab === 'progress' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-ocean' : 'text-gray-600 hover:bg-cyan-50'
      ]" @click="activeTab = 'progress'">
        Tiến độ
      </button>
      <button :class="[
        'px-6 py-3 rounded-xl font-semibold transition-all duration-300',
        activeTab === 'budget' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-ocean' : 'text-gray-600 hover:bg-cyan-50'
      ]" @click="activeTab = 'budget'">
        Ngân sách
      </button>
      <button :class="[
        'px-6 py-3 rounded-xl font-semibold transition-all duration-300',
        activeTab === 'materials' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-ocean' : 'text-gray-600 hover:bg-cyan-50'
      ]" @click="activeTab = 'materials'">
        Vật tư
      </button>
      <button :class="[
        'px-6 py-3 rounded-xl font-semibold transition-all duration-300',
        activeTab === 'team' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-ocean' : 'text-gray-600 hover:bg-cyan-50'
      ]" @click="activeTab = 'team'">
        Nhóm
      </button>
      <button :class="[
        'px-6 py-3 rounded-xl font-semibold transition-all duration-300',
        activeTab === 'documents' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-ocean' : 'text-gray-600 hover:bg-cyan-50'
      ]" @click="activeTab = 'documents'">
        Tài liệu
      </button>
      <button :class="[
        'px-6 py-3 rounded-xl font-semibold transition-all duration-300',
        activeTab === 'timeline' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-ocean' : 'text-gray-600 hover:bg-cyan-50'
      ]" @click="activeTab = 'timeline'">
        Dòng thời gian
      </button>
    </div>
    
    <!-- Tab: Overview -->
    <div v-if="activeTab === 'overview'" class="tab-content">
      <!-- Project Information -->
      <div class="card">
        <h3 class="card-title">Thông tin dự án</h3>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Tên dự án:</div>
            <div class="info-value">{{ project.name }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Địa chỉ:</div>
            <div class="info-value">{{ project.address }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Diện tích:</div>
            <div class="info-value">120.5 m²</div>
          </div>
          <div class="info-item">
            <div class="info-label">Loại công trình:</div>
            <div class="info-value">Căn hộ cao cấp</div>
          </div>
          <div class="info-item">
            <div class="info-label">Ngày bắt đầu:</div>
            <div class="info-value">15/01/2024</div>
          </div>
          <div class="info-item">
            <div class="info-label">Ngày kết thúc dự kiến:</div>
            <div class="info-value">{{ project.deadline }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Thời gian thực hiện:</div>
            <div class="info-value">75 ngày</div>
          </div>
          <div class="info-item">
            <div class="info-label">Thời gian còn lại:</div>
            <div class="info-value">{{ project.daysLeft }} ngày</div>
          </div>
        </div>
      </div>
      
      <!-- Team Members -->
      <div class="team-cards">
        <div class="team-card card">
          <div class="team-icon">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <div class="team-role">Quản lý dự án</div>
          <div class="team-name">{{ project.pm }}</div>
          <div class="team-contact">nguyenvana@email.com</div>
          <div class="team-contact flex items-center gap-2">
            <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            0901234567
          </div>
          <div class="team-stats">5 dự án đang quản lý</div>
          <div class="team-actions">
            <button class="btn btn-secondary btn-sm">Nhắn tin</button>
            <button class="btn btn-secondary btn-sm">Xem</button>
          </div>
        </div>
        
        <div class="team-card card">
          <div class="team-icon">
            <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
            </svg>
          </div>
          <div class="team-role">Trưởng công trình</div>
          <div class="team-name">{{ project.foreman }}</div>
          <div class="team-contact">levanc@email.com</div>
          <div class="team-contact flex items-center gap-2">
            <svg class="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            0907654321
          </div>
          <div class="team-stats">3 dự án đang thi công</div>
          <div class="team-actions">
            <button class="btn btn-secondary btn-sm">Nhắn tin</button>
            <button class="btn btn-secondary btn-sm">Xem</button>
          </div>
        </div>
        
        <div class="team-card card">
          <div class="team-icon">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <div class="team-role">Khách hàng</div>
          <div class="team-name">{{ project.client }}</div>
          <div class="team-contact">tranthix@email.com</div>
          <div class="team-contact flex items-center gap-2">
            <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            0909876543
          </div>
          <div class="team-stats"></div>
          <div class="team-actions">
            <button class="btn btn-secondary btn-sm">Nhắn tin</button>
            <button class="btn btn-secondary btn-sm">Xem</button>
          </div>
        </div>
      </div>
      
      <!-- Recent Activities -->
      <div class="card">
        <div class="card-header">
          <h3>Hoạt động gần đây</h3>
          <button class="btn btn-secondary btn-sm">Xem tất cả →</button>
        </div>
        
        <div class="activity-timeline">
          <div class="activity-item">
            <div class="activity-time">🕐 2 giờ trước</div>
            <div class="activity-content">
              <div class="activity-title">Foreman {{ project.foreman }} cập nhật tiến độ: Lắp đặt điện - 90%</div>
              <div class="activity-images">
                <img src="https://via.placeholder.com/100" alt="" />
                <img src="https://via.placeholder.com/100" alt="" />
                <img src="https://via.placeholder.com/100" alt="" />
              </div>
              <button class="btn btn-secondary btn-sm">Xem chi tiết</button>
            </div>
          </div>
          
          <div class="activity-item">
            <div class="activity-time">🕐 5 giờ trước</div>
            <div class="activity-content">
              <div class="activity-title">PM {{ project.pm }} duyệt yêu cầu vật tư: Ốc vít M6 x50</div>
              <button class="btn btn-secondary btn-sm">Xem vật tư</button>
            </div>
          </div>
          
          <div class="activity-item">
            <div class="activity-time">🕐 1 ngày trước</div>
            <div class="activity-content">
              <div class="activity-title">Client {{ project.client }} nhận xét: "Rất hài lòng với tiến độ"</div>
              <div class="activity-rating">⭐⭐⭐⭐⭐</div>
              <button class="btn btn-secondary btn-sm">Xem đánh giá</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Tab: Progress -->
    <div v-if="activeTab === 'progress'" class="tab-content">
      <div class="card">
        <h3 class="card-title">Tiến Độ Thi Công Theo Hạng Mục</h3>
        
        <div class="progress-categories">
          <div class="progress-category" v-for="cat in workCategories" :key="cat.id">
            <div class="category-header">
              <div class="category-info">
                <span class="category-icon" :style="{ background: cat.color + '22', color: cat.color }">{{ cat.icon }}</span>
                <div>
                  <div class="category-name">{{ cat.name }}</div>
                  <div class="category-foreman">Foreman: {{ cat.foreman }}</div>
                </div>
              </div>
              <div class="category-progress-value">{{ cat.progress }}%</div>
            </div>
            
            <div class="progress-bar large">
              <div :class="['progress-fill', cat.progress >= 80 ? 'success' : cat.progress >= 50 ? '' : 'warning']" :style="{ width: cat.progress + '%' }"></div>
            </div>
            
            <div class="category-footer">
              <div class="category-date">
                <span>Bắt đầu: {{ cat.startDate }}</span>
                <span>Kết thúc: {{ cat.endDate }}</span>
              </div>
              <div class="category-status">
                <span :class="['badge', cat.statusClass]">{{ cat.status }}</span>
              </div>
            </div>
            
            <div class="category-actions">
              <button class="btn btn-secondary btn-sm flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Xem ảnh
              </button>
              <button class="btn btn-secondary btn-sm flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Chi tiết
              </button>
              <button class="btn btn-primary btn-sm flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Duyệt tiến độ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Tab: Budget -->
    <div v-if="activeTab === 'budget'" class="tab-content">
      <div class="grid-2">
        <div class="card">
          <h3 class="card-title">Tổng Quan Ngân Sách</h3>
          
          <div class="budget-summary">
            <div class="budget-row">
              <span class="budget-label">Ngân sách dự toán:</span>
              <span class="budget-amount">{{ project.budget }}M VNĐ</span>
            </div>
            <div class="budget-row">
              <span class="budget-label">Chi phí thực tế:</span>
              <span class="budget-amount actual">{{ project.actualBudget }}M VNĐ</span>
            </div>
            <div class="budget-row total">
              <span class="budget-label">Chênh lệch:</span>
              <span :class="['budget-amount', project.actualBudget > project.budget ? 'exceed' : 'save']">
                {{ project.actualBudget > project.budget ? '+' : '-' }}{{ Math.abs(project.budget - project.actualBudget) }}M VNĐ
              </span>
            </div>
          </div>
          
          <div class="budget-chart-placeholder">
            <canvas ref="budgetChart"></canvas>
          </div>
        </div>
        
        <div class="card">
          <h3 class="card-title">Chi Tiết Chi Phí</h3>
          
          <div class="expense-list">
            <div class="expense-item" v-for="expense in expenses" :key="expense.id">
              <div class="expense-header">
                <span class="expense-category">{{ expense.category }}</span>
                <span class="expense-amount">{{ expense.amount }}M</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: (expense.amount / project.budget * 100) + '%' }"></div>
              </div>
              <div class="expense-details">
                <span class="expense-percent">{{ ((expense.amount / project.budget) * 100).toFixed(1) }}%</span>
                <button class="btn-text">Xem chi tiết →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Tab: Materials -->
    <div v-if="activeTab === 'materials'" class="tab-content">
      <div class="card">
        <div class="card-header">
          <h3>Quản Lý Vật Tư</h3>
          <div style="display: flex; gap: 12px;">
            <button class="btn btn-secondary flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
              Thống kê
            </button>
            <button class="btn btn-primary">+ Yêu cầu vật tư</button>
          </div>
        </div>
        
        <table class="table">
          <thead>
            <tr>
              <th>Tên vật tư</th>
              <th>Số lượng yêu cầu</th>
              <th>Đã sử dụng</th>
              <th>Còn lại</th>
              <th>Đơn vị</th>
              <th>Ngày yêu cầu</th>
              <th>Người yêu cầu</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="material in materials" :key="material.id">
              <td style="font-weight: 600;">{{ material.name }}</td>
              <td>{{ material.requested }}</td>
              <td>{{ material.used }}</td>
              <td>{{ material.remaining }}</td>
              <td>{{ material.unit }}</td>
              <td>{{ material.requestDate }}</td>
              <td>{{ material.requester }}</td>
              <td>
                <span :class="['badge', material.statusClass]">{{ material.status }}</span>
              </td>
              <td>
                <button class="btn-icon">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                  </svg>
                </button>
                <button class="btn-icon">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- Other tabs can be similarly implemented -->
    <div v-if="activeTab === 'team'" class="tab-content">
      <div class="card">
        <h3 class="card-title">Đội Ngũ Thi Công</h3>
        <p style="color: var(--gray-600); padding: 40px; text-align: center;">Team management interface coming soon...</p>
      </div>
    </div>
    
    <div v-if="activeTab === 'documents'" class="tab-content">
      <div class="card">
        <h3 class="card-title">Tài Liệu Dự Án</h3>
        <p style="color: var(--gray-600); padding: 40px; text-align: center;">Document management interface coming soon...</p>
      </div>
    </div>
    
    <div v-if="activeTab === 'timeline'" class="tab-content">
      <div class="card">
        <h3 class="card-title">Timeline Dự Án</h3>
        <p style="color: var(--gray-600); padding: 40px; text-align: center;">Project timeline interface coming soon...</p>
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
      project: {
        id: 1,
        name: 'Vinhomes Landmark - Căn A1',
        address: '123 Đường ABC, Quận 1, TP.HCM',
        pm: 'Nguyễn Văn A',
        foreman: 'Lê Văn C',
        client: 'Trần Thị X',
        progress: 85,
        budget: 150,
        actualBudget: 145,
        deadline: '30/03/2024',
        daysLeft: 5,
        statusLabel: 'Đang thi công',
        statusClass: 'warning'
      },
      workCategories: [
        { id: 1, icon: '⚡', name: 'Điện', color: '#F59E0B', progress: 90, foreman: 'Lê Văn C', startDate: '15/01/2024', endDate: '25/01/2024', status: 'Gần hoàn thành', statusClass: 'badge-success' },
        { id: 2, icon: '💧', name: 'Nước', color: '#3B82F6', progress: 85, foreman: 'Phạm Văn D', startDate: '16/01/2024', endDate: '23/01/2024', status: 'Đang thi công', statusClass: 'badge-primary' },
        { id: 3, icon: '🪵', name: 'Gỗ', color: '#92400E', progress: 75, foreman: 'Hoàng Văn E', startDate: '20/01/2024', endDate: '05/02/2024', status: 'Đang thi công', statusClass: 'badge-primary' },
        { id: 4, icon: '🎨', name: 'Sơn', color: '#EC4899', progress: 60, foreman: 'Trần Văn F', startDate: '25/01/2024', endDate: '02/02/2024', status: 'Đang thi công', statusClass: 'badge-primary' },
        { id: 5, icon: '⬜', name: 'Trần thạch cao', color: '#6B7280', progress: 100, foreman: 'Nguyễn Văn G', startDate: '10/01/2024', endDate: '18/01/2024', status: 'Hoàn thành', statusClass: 'badge-success' }
      ],
      expenses: [
        { id: 1, category: 'Vật liệu xây dựng', amount: 65 },
        { id: 2, category: 'Vật tư điện', amount: 30 },
        { id: 3, category: 'Vật tư nước', amount: 20 },
        { id: 4, category: 'Vật tư gỗ', amount: 25 },
        { id: 5, category: 'Sơn & phụ kiện', amount: 5 }
      ],
      materials: [
        { id: 1, name: 'Ốc vít M6', requested: 100, used: 80, remaining: 20, unit: 'Cái', requestDate: '20/01/2024', requester: 'Lê Văn C', status: 'Đã duyệt', statusClass: 'badge-success' },
        { id: 2, name: 'Keo silicon', requested: 5, used: 3, remaining: 2, unit: 'Kg', requestDate: '21/01/2024', requester: 'Phạm Văn D', status: 'Đã duyệt', statusClass: 'badge-success' },
        { id: 3, name: 'Ống nước PVC', requested: 50, used: 0, remaining: 0, unit: 'Mét', requestDate: '22/01/2024', requester: 'Hoàng Văn E', status: 'Chờ duyệt', statusClass: 'badge-warning' }
      ]
    }
  },
  mounted() {
    this.renderBudgetChart()
  },
  methods: {
    goBack() {
      this.$router.push('/admin/projects')
    },
    renderBudgetChart() {
      const ctx = this.$refs.budgetChart?.getContext('2d')
      if (!ctx) return
      
      const budget = this.project.budget
      const actual = this.project.actualBudget
      
      const width = ctx.canvas.width
      const height = ctx.canvas.height
      const barWidth = 60
      const spacing = 100
      
      // Budget bar
      ctx.fillStyle = '#3B82F6'
      ctx.fillRect(spacing, height - (budget / budget * 200), barWidth, budget / budget * 200)
      ctx.fillStyle = '#666'
      ctx.font = '12px Arial'
      ctx.textAlign = 'center'
      ctx.fillText('Dự toán', spacing + barWidth/2, height - 10)
      ctx.fillText(budget + 'M', spacing + barWidth/2, height - (budget / budget * 200) - 10)
      
      // Actual bar
      ctx.fillStyle = actual > budget ? '#EF4444' : '#10B981'
      ctx.fillRect(spacing + barWidth + 40, height - (actual / budget * 200), barWidth, actual / budget * 200)
      ctx.fillText('Thực tế', spacing + barWidth + 40 + barWidth/2, height - 10)
      ctx.fillText(actual + 'M', spacing + barWidth + 40 + barWidth/2, height - (actual / budget * 200) - 10)
    }
  }
}
</script>

<style scoped>
/* Card Styling - Professional & Clean */
.card {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  border: 1px solid rgb(229 231 235);
  padding: 2rem;
  transition: box-shadow 0.2s;
}

.card:hover {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: rgb(17 24 39);
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgb(6 182 212);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

/* Info Grid - Professional Overview */
.info-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.info-item {
  background: rgb(249 250 251);
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid rgb(229 231 235);
  transition: border-color 0.2s;
}

.info-item:hover {
  border-color: rgb(209 213 219);
}

.info-label {
  font-size: 0.813rem;
  font-weight: 500;
  color: rgb(107 114 128);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.info-value {
  font-size: 1rem;
  font-weight: 600;
  color: rgb(17 24 39);
}

/* Team Cards - Clean Professional */
.team-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .team-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

.team-card {
  text-align: center;
  transition: transform 0.2s;
}

.team-card:hover {
  transform: translateY(-4px);
}

.team-icon {
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1rem;
  background: rgb(243 244 246);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgb(229 231 235);
}

.team-role {
  font-size: 0.813rem;
  font-weight: 500;
  color: rgb(6 182 212);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.team-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: rgb(17 24 39);
  margin-bottom: 0.75rem;
}

.team-contact {
  font-size: 0.875rem;
  color: rgb(107 114 128);
  margin-bottom: 0.25rem;
}

.team-stats {
  font-size: 0.75rem;
  color: rgb(156 163 175);
  margin-bottom: 1rem;
}

.team-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

/* Activity Timeline - Minimal */
.activity-timeline {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  background: white;
  border-radius: 0.375rem;
  padding: 1.25rem;
  border-left: 3px solid rgb(6 182 212);
  border: 1px solid rgb(229 231 235);
  border-left: 3px solid rgb(6 182 212);
  transition: border-color 0.2s;
}

.activity-item:hover {
  border-left-color: rgb(8 145 178);
}

.activity-time {
  font-size: 0.75rem;
  font-weight: 500;
  color: rgb(107 114 128);
  margin-bottom: 0.5rem;
}

.activity-title {
  font-weight: 500;
  color: rgb(17 24 39);
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.activity-images {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.activity-images img {
  width: 4rem;
  height: 4rem;
  border-radius: 0.375rem;
  object-fit: cover;
  border: 1px solid rgb(229 231 235);
}

.activity-rating {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

/* Progress Categories - Professional */
.progress-categories {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.progress-category {
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  border: 1px solid rgb(229 231 235);
  transition: box-shadow 0.2s;
}

.progress-category:hover {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
}

.category-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.category-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.category-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 600;
  border: 2px solid rgb(229 231 235);
  background: white;
}

.category-name {
  font-size: 1rem;
  font-weight: 600;
  color: rgb(17 24 39);
}

.category-foreman {
  font-size: 0.875rem;
  color: rgb(107 114 128);
}

.category-progress-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(6 182 212);
}

.category-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
}

.category-date {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: rgb(107 114 128);
}

.category-status {
  font-size: 0.875rem;
}

.category-actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgb(243 244 246);
}

/* Budget Section - Clean Corporate */
.grid-2 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

.budget-summary {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.budget-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  background: rgb(249 250 251);
  border-radius: 0.375rem;
  border: 1px solid rgb(229 231 235);
}

.budget-row.total {
  background: rgb(243 244 246);
  border-color: rgb(209 213 219);
  font-weight: 600;
}

.budget-label {
  color: rgb(75 85 99);
  font-weight: 500;
  font-size: 0.875rem;
}

.budget-amount {
  font-size: 1.125rem;
  font-weight: 600;
  color: rgb(17 24 39);
}

.budget-amount.actual {
  color: rgb(37 99 235);
}

.budget-amount.exceed {
  color: rgb(220 38 38);
}

.budget-amount.save {
  color: rgb(22 163 74);
}

.budget-chart-placeholder {
  background: rgb(249 250 251);
  border-radius: 0.375rem;
  padding: 1.5rem;
  border: 1px solid rgb(229 231 235);
}

.budget-chart-placeholder canvas {
  width: 100%;
  height: 16rem;
}

/* Expense List - Minimalist */
.expense-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.expense-item {
  background: white;
  border-radius: 0.375rem;
  padding: 1rem 1.25rem;
  border: 1px solid rgb(229 231 235);
  transition: border-color 0.2s;
}

.expense-item:hover {
  border-color: rgb(209 213 219);
}

.expense-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.expense-category {
  font-weight: 500;
  color: rgb(17 24 39);
  font-size: 0.875rem;
}

.expense-amount {
  font-size: 1rem;
  font-weight: 600;
  color: rgb(6 182 212);
}

.expense-details {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 0.813rem;
}

.expense-percent {
  color: rgb(107 114 128);
  font-weight: 500;
}

/* Progress Bar - Solid Colors */
.progress-bar {
  width: 100%;
  background: rgb(243 244 246);
  border-radius: 0.25rem;
  height: 0.5rem;
  overflow: hidden;
}

.progress-bar.large {
  height: 0.625rem;
}

.progress-fill {
  height: 100%;
  background: rgb(6 182 212);
  border-radius: 0.25rem;
  transition: width 0.3s ease;
}

.progress-fill.success {
  background: rgb(34 197 94);
}

.progress-fill.warning {
  background: rgb(245 158 11);
}

/* Buttons - Corporate Style */
.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.btn-primary {
  background: rgb(6 182 212);
  color: white;
  border: 1px solid rgb(6 182 212);
}

.btn-primary:hover {
  background: rgb(8 145 178);
  border-color: rgb(8 145 178);
}

.btn-secondary {
  background: white;
  border: 1px solid rgb(209 213 219);
  color: rgb(55 65 81);
}

.btn-secondary:hover {
  background: rgb(249 250 251);
  border-color: rgb(156 163 175);
}

.btn-sm {
  padding: 0.375rem 0.75rem;
  font-size: 0.813rem;
}

.btn-text {
  color: rgb(6 182 212);
  font-weight: 500;
  background: none;
  border: none;
  padding: 0;
  font-size: 0.875rem;
}

.btn-text:hover {
  color: rgb(8 145 178);
  text-decoration: underline;
}

.btn-icon {
  padding: 0.5rem;
  border-radius: 0.375rem;
  color: rgb(107 114 128);
  transition: background 0.2s;
  background: none;
  border: none;
  cursor: pointer;
}

.btn-icon:hover {
  background: rgb(243 244 246);
}

/* Badges - Subtle */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.625rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.badge-primary {
  background: rgb(219 234 254);
  color: rgb(29 78 216);
}

.badge-success {
  background: rgb(220 252 231);
  color: rgb(21 128 61);
}

.badge-warning {
  background: rgb(254 243 199);
  color: rgb(161 98 7);
}

.badge-danger {
  background: rgb(254 226 226);
  color: rgb(185 28 28);
}

/* Table - Clean */
.table {
  width: 100%;
  font-size: 0.875rem;
  border-collapse: separate;
  border-spacing: 0;
}

.table thead {
  background: rgb(249 250 251);
}

.table th {
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 500;
  color: rgb(75 85 99);
  font-size: 0.813rem;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  border-bottom: 1px solid rgb(229 231 235);
}

.table td {
  padding: 0.875rem 1rem;
  border-bottom: 1px solid rgb(243 244 246);
  color: rgb(55 65 81);
}

.table tbody tr:hover {
  background: rgb(249 250 251);
}

/* Tab Content */
.tab-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
