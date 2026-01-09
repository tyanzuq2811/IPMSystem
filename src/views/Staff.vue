<template>
  <div class="space-y-6 animate__animated animate__fadeIn">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate__animated animate__fadeInLeft">Quản Lý Nhân Sự</h1>
        <p class="text-gray-500 mt-1">Quản lý thông tin và quyền hạn của nhân viên</p>
      </div>
      <button class="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:shadow-ocean-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 animate__animated animate__fadeInRight" @click="showAddModal = true">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
        </svg>
        Thêm nhân viên mới
      </button>
    </div>
    
    <!-- Search and Filters -->
    <div class="bg-white rounded-lg shadow-lg p-6 border border-cyan-100 animate__animated animate__fadeInUp">
      <div class="flex flex-wrap gap-4">
        <div class="flex-1 min-w-[300px]">
          <input type="text" class="w-full px-4 py-3 bg-gradient-to-r from-gray-50 to-cyan-50 border border-cyan-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="🔍 Tìm kiếm theo tên, email, số điện thoại..." v-model="searchQuery" />
        </div>
        
        <select class="px-4 py-3 bg-gradient-to-r from-gray-50 to-cyan-50 border border-cyan-200 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500" v-model="filterRole">
          <option value="">Tất cả vai trò</option>
          <option value="admin">Admin</option>
          <option value="pm">PM</option>
          <option value="foreman">Foreman</option>
          <option value="client">Client</option>
        </select>
        
        <select class="px-4 py-3 bg-gradient-to-r from-gray-50 to-cyan-50 border border-cyan-200 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500" v-model="filterStatus">
          <option value="">Tất cả trạng thái</option>
          <option value="active">Hoạt động</option>
          <option value="locked">Bị khóa</option>
        </select>
        
        <select class="px-4 py-3 bg-gradient-to-r from-gray-50 to-cyan-50 border border-cyan-200 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500" v-model="sortBy">
          <option value="name">Tên A-Z</option>
          <option value="created">Ngày tạo</option>
          <option value="role">Vai trò</option>
        </select>
      </div>
    </div>
    
    <!-- Stats Mini Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white rounded-lg shadow-lg hover:shadow-ocean-lg transition-all duration-300 p-6 border border-cyan-100 transform hover:-translate-y-2 animate__animated animate__fadeInUp" style="animation-delay: 0.1s">
        <div class="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">45</div>
        <div class="text-sm text-gray-500">Tổng nhân viên</div>
      </div>
      <div class="bg-white rounded-2xl shadow-lg hover:shadow-ocean-lg transition-all duration-300 p-6 border border-blue-100 transform hover:-translate-y-2 animate__animated animate__fadeInUp" style="animation-delay: 0.2s">
        <div class="mb-2">
          <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </div>
        <div class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">8</div>
        <div class="text-sm text-gray-500">Project Managers</div>
      </div>
      <div class="bg-white rounded-2xl shadow-lg hover:shadow-ocean-lg transition-all duration-300 p-6 border border-orange-100 transform hover:-translate-y-2 animate__animated animate__fadeInUp" style="animation-delay: 0.3s">
        <div class="mb-2">
          <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
          </svg>
        </div>
        <div class="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2">15</div>
        <div class="text-sm text-gray-500">Foremen</div>
      </div>
      <div class="bg-white rounded-2xl shadow-lg hover:shadow-ocean-lg transition-all duration-300 p-6 border border-green-100 transform hover:-translate-y-2 animate__animated animate__fadeInUp" style="animation-delay: 0.4s">
        <div class="mb-2">
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
        </div>
        <div class="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">20</div>
        <div class="text-sm text-gray-500">Clients</div>
      </div>
    </div>
    
    <!-- Staff Table -->
    <div class="bg-white rounded-lg shadow-lg border border-cyan-100 overflow-hidden animate__animated animate__fadeInUp">
      <div v-if="selectedStaff.length > 0" class="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-50 to-blue-50 border-b border-cyan-200">
        <span class="font-semibold text-cyan-700">{{ selectedStaff.length }} nhân viên được chọn</span>
        <div class="flex gap-3">
          <button class="px-3 py-1 text-xs font-semibold bg-white border border-cyan-300 text-cyan-700 rounded-lg hover:bg-cyan-50 transition-all">Khóa hàng loạt</button>
          <button class="px-3 py-1 text-xs font-semibold bg-white border border-cyan-300 text-cyan-700 rounded-lg hover:bg-cyan-50 transition-all">📤 Xuất Excel</button>
          <button class="px-3 py-1 text-xs font-semibold bg-white border border-cyan-300 text-cyan-700 rounded-lg hover:bg-cyan-50 transition-all">📧 Gửi email</button>
          <button class="px-3 py-1 text-xs font-semibold bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-all" @click="selectedStaff = []">Hủy chọn</button>
        </div>
      </div>
      
      <div class="overflow-x-auto">
      <table class="w-full">
        <thead class="bg-gradient-to-r from-cyan-50 to-blue-50 border-b-2 border-cyan-200">
          <tr>
            <th class="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider" width="40"><input type="checkbox" class="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500" @change="toggleSelectAll" /></th>
            <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Họ tên</th>
            <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Email</th>
            <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Số điện thoại</th>
            <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Vai trò</th>
            <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Trạng thái</th>
            <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Dự án</th>
            <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Ngày tạo</th>
            <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider" width="100">Thao tác</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="staff in filteredStaff" :key="staff.id" class="hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-colors duration-200">
            <td class="px-4 py-4"><input type="checkbox" class="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500" :value="staff.id" v-model="selectedStaff" /></td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center gap-3">
                <img :src="staff.avatar" alt="" class="w-10 h-10 rounded-full ring-2 ring-cyan-400 ring-offset-2" />
                <span class="font-semibold text-gray-900">{{ staff.name }}</span>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{{ staff.email }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{{ staff.phone }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span :class="[
                'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold',
                staff.roleColor === 'primary' ? 'bg-cyan-100 text-cyan-700' : '',
                staff.roleColor === 'orange' ? 'bg-orange-100 text-orange-700' : '',
                staff.roleColor === 'success' ? 'bg-green-100 text-green-700' : ''
              ]">{{ staff.roleLabel }}</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center gap-2">
                <span :class="[
                  'w-2 h-2 rounded-full',
                  staff.statusColor === 'green' ? 'bg-green-500 animate-pulse' : '',
                  staff.statusColor === 'red' ? 'bg-red-500' : ''
                ]"></span>
                <span class="text-sm text-gray-700">{{ staff.statusLabel }}</span>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{{ staff.projects }} dự án</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{{ staff.created }}</td>
            <td class="px-6 py-4 whitespace-nowrap relative">
              <button class="p-2 hover:bg-cyan-100 rounded-lg transition-all" @click="toggleMenu(staff.id)">
                <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </button>
              <div v-if="activeMenu === staff.id" class="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-ocean-lg border border-cyan-100 py-2 z-10 animate__animated animate__fadeIn animate__faster">
                <button class="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-cyan-50 transition-colors flex items-center gap-2" @click="viewDetail(staff)">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  Xem chi tiết
                </button>
                <button class="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-cyan-50 transition-colors flex items-center gap-2" @click="editStaff(staff)">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                  Chỉnh sửa
                </button>
                <button class="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-cyan-50 transition-colors flex items-center gap-2" @click="toggleLock(staff)">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                  {{ staff.status === 'active' ? 'Khóa tài khoản' : 'Mở khóa' }}
                </button>
                <button class="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-cyan-50 transition-colors flex items-center gap-2" @click="viewHistory(staff)">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Lịch sử hoạt động
                </button>
                <div class="border-t border-gray-200 my-1"></div>
                <button class="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2" @click="deleteStaff(staff)">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                  Xóa tài khoản
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      
      <!-- Pagination -->
      <div class="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50">
        <div class="text-sm text-gray-600">Showing 1-10 of {{ staffList.length }} results</div>
        <div class="flex items-center gap-3">
          <select class="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500">
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          <button class="px-3 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 text-sm font-medium transition-all">‹ Prev</button>
          <button class="px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg text-sm font-medium">1</button>
          <button class="px-3 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 text-sm font-medium transition-all">2</button>
          <button class="px-3 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 text-sm font-medium transition-all">3</button>
          <button class="px-3 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 text-sm font-medium transition-all">Next ›</button>
        </div>
      </div>
    </div>
    
    <!-- Add/Edit Modal -->
    <div v-if="showAddModal" class="modal-overlay" @click.self="showAddModal = false">
      <div class="modal">
        <div class="modal-header">
          <h3>{{ editingStaff ? 'Chỉnh Sửa Thông Tin' : 'Thêm Nhân Viên Mới' }}</h3>
          <button class="btn-icon" @click="showAddModal = false">✕</button>
        </div>
        <div class="modal-body">
          <div class="grid-2">
            <div>
              <h4 style="margin-bottom: 16px;">Thông tin cá nhân</h4>
              
              <div class="form-group">
                <div class="avatar-upload">
                  <div class="avatar-preview">
                    <img src="https://ui-avatars.com/api/?name=User&background=ccc&color=fff" alt="" />
                  </div>
                  <button class="btn btn-secondary btn-sm">📤 Tải ảnh lên</button>
                </div>
              </div>
              
              <div class="form-group">
                <label>Họ và tên đầy đủ *</label>
                <input type="text" class="input" placeholder="Nhập họ tên" />
              </div>
              
              <div class="form-group">
                <label>Email *</label>
                <input type="email" class="input" placeholder="example@email.com" />
              </div>
              
              <div class="form-group">
                <label>Số điện thoại *</label>
                <input type="tel" class="input" placeholder="0901234567" />
              </div>
              
              <div class="form-group">
                <label>Vai trò *</label>
                <select class="select">
                  <option>Admin</option>
                  <option>Project Manager</option>
                  <option>Foreman</option>
                  <option>Client</option>
                </select>
              </div>
            </div>
            
            <div>
              <h4 style="margin-bottom: 16px;">Thông tin tài khoản</h4>
              
              <div class="form-group">
                <label>Mật khẩu *</label>
                <input type="password" class="input" placeholder="Nhập mật khẩu" />
                <div class="password-strength">
                  <div class="strength-bar">
                    <div class="strength-fill" style="width: 60%; background: var(--warning-color);"></div>
                  </div>
                  <small>Mật khẩu trung bình</small>
                </div>
              </div>
              
              <div class="form-group">
                <label>Xác nhận mật khẩu *</label>
                <input type="password" class="input" placeholder="Nhập lại mật khẩu" />
              </div>
              
              <div class="form-group">
                <label>Trạng thái tài khoản</label>
                <div class="toggle-switch">
                  <input type="checkbox" id="status" checked />
                  <label for="status">
                    <span class="toggle-slider"></span>
                    <span class="toggle-text">Hoạt động</span>
                  </label>
                </div>
              </div>
              
              <div class="form-group">
                <label>Quyền truy cập</label>
                <div class="checkbox-group">
                  <label><input type="checkbox" checked /> Tạo dự án</label>
                  <label><input type="checkbox" checked /> Duyệt ngân sách</label>
                  <label><input type="checkbox" /> Xóa dự án</label>
                  <label><input type="checkbox" checked /> Quản lý vật tư</label>
                </div>
              </div>
              
              <div class="form-group">
                <label>Thông tin bổ sung</label>
                <textarea class="input" rows="4" placeholder="Ghi chú thêm..."></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" @click="showAddModal = false">Hủy</button>
          <button class="btn btn-primary">{{ editingStaff ? 'Lưu' : 'Tạo mới' }}</button>
        </div>
      </div>
    </div>
    
    <!-- History Modal -->
    <div v-if="showHistoryModal" class="modal-overlay" @click.self="showHistoryModal = false">
      <div class="modal">
        <div class="modal-header">
          <div>
            <h3>Lịch Sử Hoạt Động - {{ selectedStaffHistory?.name }}</h3>
            <p style="color: var(--gray-600); font-size: 14px; margin-top: 4px;">
              {{ selectedStaffHistory?.roleLabel }} | {{ selectedStaffHistory?.email }}
            </p>
          </div>
          <button class="btn-icon" @click="showHistoryModal = false">✕</button>
        </div>
        <div class="modal-body">
          <div class="history-filter">
            <input type="date" class="input" style="width: auto;" />
            <span>-</span>
            <input type="date" class="input" style="width: auto;" />
            <select class="select" style="width: auto;">
              <option>Tất cả hành động</option>
              <option>Đăng nhập</option>
              <option>Tạo dự án</option>
              <option>Duyệt tiến độ</option>
            </select>
            <button class="btn btn-primary btn-sm">Lọc</button>
          </div>
          
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-icon">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div class="timeline-content">
                <div class="timeline-title">Đăng nhập hệ thống</div>
                <div class="timeline-meta">
                  26/12/2024 - 10:30 AM<br />
                  IP: 192.168.1.1 | Device: Chrome on Windows
                </div>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-icon">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <div class="timeline-content">
                <div class="timeline-title">Duyệt tiến độ dự án "Vinhomes Landmark A1"</div>
                <div class="timeline-meta">
                  26/12/2024 - 09:15 AM<br />
                  Hạng mục: Lắp đặt điện - 85%
                </div>
                <button class="btn btn-secondary btn-sm" style="margin-top: 8px;">View details</button>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-icon">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <div class="timeline-content">
                <div class="timeline-title">Tạo dự án mới "Masteri Thảo Điền C5"</div>
                <div class="timeline-meta">
                  25/12/2024 - 04:20 PM<br />
                  Khách hàng: Nguyễn Thị X
                </div>
                <button class="btn btn-secondary btn-sm" style="margin-top: 8px;">View project</button>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-icon">📦</div>
              <div class="timeline-content">
                <div class="timeline-title">Duyệt yêu cầu vật tư</div>
                <div class="timeline-meta">
                  25/12/2024 - 02:10 PM<br />
                  Dự án: Vinhomes Landmark A1<br />
                  Vật tư: Ốc vít M6 x50, Keo silicon x2kg
                </div>
              </div>
            </div>
          </div>
          
          <button class="btn btn-secondary" style="width: 100%; margin-top: 16px;">Load more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Staff',
  data() {
    return {
      searchQuery: '',
      filterRole: '',
      filterStatus: '',
      sortBy: 'name',
      selectedStaff: [],
      showAddModal: false,
      showHistoryModal: false,
      editingStaff: null,
      selectedStaffHistory: null,
      activeMenu: null,
      staffList: [
        { id: 1, name: 'Nguyễn Văn A', email: 'nguyenvana@email.com', phone: '0901234567', role: 'pm', roleLabel: 'PM', roleColor: 'primary', status: 'active', statusLabel: 'Hoạt động', statusColor: 'green', projects: 5, created: '15/01/2024', avatar: 'https://ui-avatars.com/api/?name=Nguyen+Van+A&background=3B82F6&color=fff' },
        { id: 2, name: 'Trần Thị B', email: 'tranthib@email.com', phone: '0902345678', role: 'pm', roleLabel: 'PM', roleColor: 'primary', status: 'active', statusLabel: 'Hoạt động', statusColor: 'green', projects: 8, created: '20/01/2024', avatar: 'https://ui-avatars.com/api/?name=Tran+Thi+B&background=EC4899&color=fff' },
        { id: 3, name: 'Lê Văn C', email: 'levanc@email.com', phone: '0903456789', role: 'foreman', roleLabel: 'Foreman', roleColor: 'orange', status: 'active', statusLabel: 'Hoạt động', statusColor: 'green', projects: 3, created: '25/01/2024', avatar: 'https://ui-avatars.com/api/?name=Le+Van+C&background=F59E0B&color=fff' },
        { id: 4, name: 'Phạm Thị D', email: 'phamthid@email.com', phone: '0904567890', role: 'foreman', roleLabel: 'Foreman', roleColor: 'orange', status: 'locked', statusLabel: 'Bị khóa', statusColor: 'red', projects: 2, created: '01/02/2024', avatar: 'https://ui-avatars.com/api/?name=Pham+Thi+D&background=DC2626&color=fff' },
        { id: 5, name: 'Hoàng Văn E', email: 'hoangvane@email.com', phone: '0905678901', role: 'client', roleLabel: 'Client', roleColor: 'success', status: 'active', statusLabel: 'Hoạt động', statusColor: 'green', projects: 1, created: '10/02/2024', avatar: 'https://ui-avatars.com/api/?name=Hoang+Van+E&background=10B981&color=fff' },
      ]
    }
  },
  computed: {
    filteredStaff() {
      let result = this.staffList
      
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        result = result.filter(s => 
          s.name.toLowerCase().includes(query) ||
          s.email.toLowerCase().includes(query) ||
          s.phone.includes(query)
        )
      }
      
      if (this.filterRole) {
        result = result.filter(s => s.role === this.filterRole)
      }
      
      if (this.filterStatus) {
        result = result.filter(s => s.status === this.filterStatus)
      }
      
      return result
    }
  },
  methods: {
    toggleSelectAll(e) {
      if (e.target.checked) {
        this.selectedStaff = this.filteredStaff.map(s => s.id)
      } else {
        this.selectedStaff = []
      }
    },
    toggleMenu(id) {
      this.activeMenu = this.activeMenu === id ? null : id
    },
    viewDetail(staff) {
      alert('Xem chi tiết: ' + staff.name)
      this.activeMenu = null
    },
    editStaff(staff) {
      this.editingStaff = staff
      this.showAddModal = true
      this.activeMenu = null
    },
    toggleLock(staff) {
      alert((staff.status === 'active' ? 'Khóa' : 'Mở khóa') + ' tài khoản: ' + staff.name)
      this.activeMenu = null
    },
    viewHistory(staff) {
      this.selectedStaffHistory = staff
      this.showHistoryModal = true
      this.activeMenu = null
    },
    deleteStaff(staff) {
      if (confirm('Xác nhận xóa tài khoản: ' + staff.name + '?')) {
        alert('Đã xóa: ' + staff.name)
      }
      this.activeMenu = null
    }
  }
}
</script>
