<template>
  <div class="space-y-6 animate__animated animate__fadeIn">
    <div>
      <h1 class="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate__animated animate__fadeInLeft">Cấu Hình Hệ Thống</h1>
      <p class="text-gray-500 mt-1">Quản lý danh mục vật tư, đơn vị tính và hạng mục thi công</p>
    </div>
    
    <!-- Tabs Navigation -->
    <div class="bg-white rounded-lg shadow-lg border border-cyan-100 p-2 flex flex-wrap gap-2 animate__animated animate__fadeInUp">
      <button :class="[
        'px-6 py-3 rounded-md font-semibold transition-all duration-300',
        activeTab === 'materials' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-ocean' : 'text-gray-600 hover:bg-cyan-50'
      ]" @click="activeTab = 'materials'">
        Danh Mục Vật Tư
      </button>
      <button :class="[
        'px-6 py-3 rounded-xl font-semibold transition-all duration-300',
        activeTab === 'units' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-ocean' : 'text-gray-600 hover:bg-cyan-50'
      ]" @click="activeTab = 'units'">
        Đơn Vị Tính
      </button>
      <button :class="[
        'px-6 py-3 rounded-xl font-semibold transition-all duration-300',
        activeTab === 'categories' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-ocean' : 'text-gray-600 hover:bg-cyan-50'
      ]" @click="activeTab = 'categories'">
        Hạng Mục Thi Công
      </button>
      <button :class="[
        'px-6 py-3 rounded-xl font-semibold transition-all duration-300',
        activeTab === 'email' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-ocean' : 'text-gray-600 hover:bg-cyan-50'
      ]" @click="activeTab = 'email'">
        Email & Thông Báo
      </button>
    </div>
    
    <!-- Tab: Materials -->
    <div v-if="activeTab === 'materials'" class="tab-content">
      <div class="tab-header">
        <input type="text" class="input" placeholder="🔍 Tìm kiếm vật tư..." style="max-width: 400px;" />
        <div style="display: flex; gap: 12px;">
          <button class="btn btn-secondary">📥 Import Excel</button>
          <button class="btn btn-secondary">📤 Export Excel</button>
          <button class="btn btn-primary" @click="showMaterialModal = true">+ Thêm vật tư mới</button>
        </div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <!-- Categories Sidebar -->
        <div class="bg-white rounded-lg shadow-lg border border-gray-100 p-6">
          <h4 class="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg class="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            Danh mục
          </h4>
          <div class="space-y-2">
            <div v-for="cat in categories" :key="cat.id" class="border border-gray-100 rounded-xl overflow-hidden hover:border-cyan-300 transition-all">
              <div class="flex justify-between items-center p-3 bg-gradient-to-r from-cyan-50 to-blue-50 cursor-pointer hover:from-cyan-100 hover:to-blue-100 transition-all">
                <span class="font-semibold text-gray-900 flex items-center gap-2">
                  <span class="text-xl">{{ cat.icon }}</span>
                  {{ cat.name }}
                </span>
                <span class="px-2 py-1 bg-cyan-500 text-white rounded-full text-xs font-bold">{{ cat.count }}</span>
              </div>
              <div v-if="cat.children" class="bg-white">
                <div v-for="child in cat.children" :key="child.id" class="flex justify-between items-center px-4 py-2 hover:bg-cyan-50 cursor-pointer transition-colors border-t border-gray-50">
                  <span class="text-sm text-gray-700">{{ child.name }}</span>
                  <span class="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{{ child.count }}</span>
                </div>
              </div>
            </div>
          </div>
          <button class="w-full mt-4 px-4 py-2 border-2 border-cyan-500 text-cyan-600 rounded-xl font-semibold hover:bg-cyan-50 transition-all">
            + Thêm danh mục
          </button>
        </div>
        
        <!-- Materials Content -->
        <div class="lg:col-span-3 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên vật tư</th>
                <th>Danh mục</th>
                <th>Đơn vị</th>
                <th>Giá/đơn vị</th>
                <th>Tồn kho</th>
                <th>Trạng thái</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="material in materials" :key="material.id">
                <td>{{ material.id }}</td>
                <td style="font-weight: 600;">{{ material.name }}</td>
                <td>{{ material.category }}</td>
                <td>{{ material.unit }}</td>
                <td>{{ formatCurrency(material.price) }}</td>
                <td>{{ material.stock }}</td>
                <td>
                  <span :class="['status-dot', material.statusColor]"></span>
                  {{ material.statusLabel }}
                </td>
                <td>
                  <button class="btn-icon">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                    </svg>
                  </button>
                  <button class="btn-icon">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </button>
                  <button class="btn-icon">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    <!-- Tab: Units -->
    <div v-if="activeTab === 'units'" class="tab-content">
      <div class="card">
        <div class="card-header">
          <h3>Đơn Vị Tính</h3>
          <button class="btn btn-primary" @click="showUnitModal = true">+ Thêm đơn vị</button>
        </div>
        
        <table class="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên đơn vị</th>
              <th>Ký hiệu</th>
              <th>Loại</th>
              <th>Ghi chú</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(unit, index) in units" :key="unit.id">
              <td>{{ index + 1 }}</td>
              <td>{{ unit.name }}</td>
              <td><span class="badge badge-primary">{{ unit.symbol }}</span></td>
              <td>{{ unit.type }}</td>
              <td>{{ unit.note || '-' }}</td>
              <td>
                <button class="btn-icon">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                  </svg>
                </button>
                <button class="btn-icon">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- Tab: Work Categories -->
    <div v-if="activeTab === 'categories'" class="tab-content">
      <div class="card">
        <div class="card-header">
          <h3>Hạng Mục Thi Công</h3>
          <div style="display: flex; gap: 12px;">
            <button class="btn btn-secondary">📋 Copy từ template</button>
            <button class="btn btn-primary" @click="showCategoryModal = true">+ Thêm hạng mục</button>
          </div>
        </div>
        
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên hạng mục</th>
              <th>Icon</th>
              <th>Màu sắc</th>
              <th>Mô tả</th>
              <th>Thời gian ước tính</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cat in workCategories" :key="cat.id">
              <td>{{ cat.id }}</td>
              <td style="font-weight: 600;">{{ cat.name }}</td>
              <td><span style="font-size: 24px;">{{ cat.icon }}</span></td>
              <td>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <div :style="{ width: '20px', height: '20px', borderRadius: '4px', background: cat.color }"></div>
                  <span style="font-family: monospace; font-size: 12px;">{{ cat.color }}</span>
                </div>
              </td>
              <td>{{ cat.description }}</td>
              <td>{{ cat.duration }}</td>
              <td><span class="badge badge-success">Đang dùng</span></td>
              <td>
                <button class="btn-icon">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                  </svg>
                </button>
                <button class="btn-icon">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- Tab: Email -->
    <div v-if="activeTab === 'email'" class="tab-content">
      <div class="grid-2">
        <div class="card">
          <h3 class="card-title">Cấu hình Email SMTP</h3>
          
          <div class="form-group">
            <label>SMTP Server</label>
            <input type="text" class="input" placeholder="smtp.gmail.com" />
          </div>
          
          <div class="form-group">
            <label>SMTP Port</label>
            <input type="number" class="input" placeholder="587" />
          </div>
          
          <div class="form-group">
            <label>Email gửi đi</label>
            <input type="email" class="input" placeholder="noreply@company.com" />
          </div>
          
          <div class="form-group">
            <label>Mật khẩu</label>
            <input type="password" class="input" placeholder="••••••••" />
          </div>
          
          <div style="display: flex; gap: 12px;">
            <button class="btn btn-secondary">Test connection</button>
            <button class="btn btn-primary">Lưu cấu hình</button>
          </div>
        </div>
        
        <div class="card">
          <h3 class="card-title">Template Email</h3>
          
          <div class="form-group">
            <label>Chọn template</label>
            <select class="select">
              <option>Thông báo tiến độ mới</option>
              <option>Duyệt vật tư</option>
              <option>Cảnh báo trễ hạn</option>
              <option>Hoàn thành dự án</option>
            </select>
          </div>
          
          <div class="form-group">
            <label>Subject</label>
            <input type="text" class="input" value="Thông báo tiến độ dự án {{project_name}}" />
          </div>
          
          <div class="form-group">
            <label>Body</label>
            <textarea class="input" rows="10">Xin chào {{client_name}},

Dự án {{project_name}} đã có cập nhật tiến độ mới:
- Hạng mục: {{work_category}}
- Tiến độ: {{progress}}%
- Cập nhật bởi: {{foreman_name}}

Vui lòng đăng nhập hệ thống để xem chi tiết.</textarea>
          </div>
          
          <div class="variable-tags">
            <small><strong>Variables:</strong></small>
            <div class="tags">
              <span class="tag">{{client_name}}</span>
              <span class="tag">{{project_name}}</span>
              <span class="tag">{{work_category}}</span>
              <span class="tag">{{progress}}</span>
              <span class="tag">{{foreman_name}}</span>
              <span class="tag">{{pm_name}}</span>
              <span class="tag">{{deadline}}</span>
            </div>
          </div>
          
          <div style="display: flex; gap: 12px;">
            <button class="btn btn-secondary">Preview</button>
            <button class="btn btn-primary">Lưu template</button>
          </div>
        </div>
      </div>
      
      <div class="card" style="margin-top: 24px;">
        <h3 class="card-title">Cài Đặt Thông Báo</h3>
        
        <div class="notification-settings">
          <div class="notification-group">
            <h4>Thông báo tiến độ mới</h4>
            <div class="checkbox-group">
              <label><input type="checkbox" checked /> Client</label>
              <label><input type="checkbox" checked /> PM</label>
              <label><input type="checkbox" /> Admin</label>
            </div>
          </div>
          
          <div class="notification-group">
            <h4>Duyệt vật tư</h4>
            <div class="checkbox-group">
              <label><input type="checkbox" /> Client</label>
              <label><input type="checkbox" checked /> PM</label>
              <label><input type="checkbox" checked /> Foreman (người yêu cầu)</label>
            </div>
          </div>
          
          <div class="notification-group">
            <h4>Cảnh báo ngân sách vượt mức</h4>
            <div class="checkbox-group">
              <label><input type="checkbox" checked /> PM</label>
              <label><input type="checkbox" checked /> Admin</label>
              <label><input type="checkbox" /> Client</label>
            </div>
          </div>
          
          <div class="notification-group">
            <h4>Trễ deadline</h4>
            <div class="checkbox-group">
              <label><input type="checkbox" checked /> PM</label>
              <label><input type="checkbox" checked /> Foreman</label>
              <label><input type="checkbox" checked /> Client</label>
            </div>
          </div>
        </div>
        
        <button class="btn btn-primary">Lưu cài đặt</button>
      </div>
    </div>
    
    <!-- Modal: Add Material -->
    <div v-if="showMaterialModal" class="modal-overlay" @click.self="showMaterialModal = false">
      <div class="modal">
        <div class="modal-header">
          <h3>Thêm Vật Tư Mới</h3>
          <button class="btn-icon" @click="showMaterialModal = false">✕</button>
        </div>
        <div class="modal-body">
          <div class="grid-2">
            <div>
              <div class="form-group">
                <label>Mã vật tư</label>
                <div style="display: flex; gap: 8px;">
                  <input type="text" class="input" value="VT005" readonly style="flex: 1;" />
                  <button class="btn btn-secondary">🔄</button>
                </div>
              </div>
              
              <div class="form-group">
                <label>Tên vật tư *</label>
                <input type="text" class="input" placeholder="VD: Ốc vít M6" />
              </div>
              
              <div class="form-group">
                <label>Danh mục *</label>
                <select class="select">
                  <option>Vật tư phụ</option>
                  <option>Vật tư điện</option>
                  <option>Vật tư nước</option>
                  <option>Vật tư gỗ</option>
                  <option>Sơn & phụ kiện</option>
                </select>
              </div>
              
              <div class="form-group">
                <label>Đơn vị tính *</label>
                <select class="select">
                  <option>Cái</option>
                  <option>Kg</option>
                  <option>Mét</option>
                  <option>M²</option>
                  <option>M³</option>
                  <option>Bộ</option>
                  <option>Thùng</option>
                </select>
              </div>
            </div>
            
            <div>
              <div class="form-group">
                <label>Giá mỗi đơn vị (VNĐ) *</label>
                <input type="number" class="input" placeholder="0" />
              </div>
              
              <div class="form-group">
                <label>Số lượng tồn kho ban đầu</label>
                <input type="number" class="input" placeholder="0" value="0" />
              </div>
              
              <div class="form-group">
                <label>Ngưỡng cảnh báo hết hàng</label>
                <input type="number" class="input" placeholder="10" />
              </div>
              
              <div class="form-group">
                <label>Nhà cung cấp</label>
                <select class="select">
                  <option>-- Chọn nhà cung cấp --</option>
                  <option>Công ty A</option>
                  <option>Công ty B</option>
                </select>
              </div>
            </div>
          </div>
          
          <div class="form-group">
            <label>Mô tả</label>
            <textarea class="input" rows="3" placeholder="Mô tả chi tiết về vật tư..."></textarea>
          </div>
          
          <div class="form-group">
            <label>Ghi chú</label>
            <textarea class="input" rows="2"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" @click="showMaterialModal = false">Hủy</button>
          <button class="btn btn-primary">Lưu</button>
        </div>
      </div>
    </div>
    
    <!-- Modal: Add Unit -->
    <div v-if="showUnitModal" class="modal-overlay" @click.self="showUnitModal = false">
      <div class="modal" style="max-width: 500px;">
        <div class="modal-header">
          <h3>Thêm Đơn Vị Tính</h3>
          <button class="btn-icon" @click="showUnitModal = false">✕</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Tên đơn vị *</label>
            <input type="text" class="input" placeholder="VD: Kilogram" />
          </div>
          
          <div class="form-group">
            <label>Ký hiệu *</label>
            <input type="text" class="input" placeholder="VD: kg" />
          </div>
          
          <div class="form-group">
            <label>Loại *</label>
            <select class="select">
              <option>Số lượng</option>
              <option>Khối lượng</option>
              <option>Diện tích</option>
              <option>Thể tích</option>
              <option>Chiều dài</option>
            </select>
          </div>
          
          <div class="form-group">
            <label>Ghi chú</label>
            <textarea class="input" rows="3"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" @click="showUnitModal = false">Hủy</button>
          <button class="btn btn-primary">Lưu</button>
        </div>
      </div>
    </div>
    
    <!-- Modal: Add Category -->
    <div v-if="showCategoryModal" class="modal-overlay" @click.self="showCategoryModal = false">
      <div class="modal">
        <div class="modal-header">
          <h3>Thêm Hạng Mục Thi Công</h3>
          <button class="btn-icon" @click="showCategoryModal = false">✕</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Tên hạng mục *</label>
            <input type="text" class="input" placeholder="VD: Điện" />
          </div>
          
          <div class="form-group">
            <label>Chọn icon *</label>
            <div class="icon-picker">
              <button class="icon-btn">⚡</button>
              <button class="icon-btn">💧</button>
              <button class="icon-btn">🪵</button>
              <button class="icon-btn">🎨</button>
              <button class="icon-btn">⬜</button>
              <button class="icon-btn">🔨</button>
              <button class="icon-btn">🪛</button>
              <button class="icon-btn">🔧</button>
            </div>
          </div>
          
          <div class="form-group">
            <label>Màu sắc *</label>
            <input type="color" class="input" value="#F59E0B" style="height: 50px;" />
          </div>
          
          <div class="form-group">
            <label>Mô tả</label>
            <textarea class="input" rows="3" placeholder="Lắp đặt hệ thống điện..."></textarea>
          </div>
          
          <div class="grid-2">
            <div class="form-group">
              <label>Thời gian từ (ngày)</label>
              <input type="number" class="input" value="7" />
            </div>
            <div class="form-group">
              <label>Thời gian đến (ngày)</label>
              <input type="number" class="input" value="10" />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" @click="showCategoryModal = false">Hủy</button>
          <button class="btn btn-primary">Lưu</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      activeTab: 'materials',
      showMaterialModal: false,
      showUnitModal: false,
      showCategoryModal: false,
      categories: [
        { id: 1, name: 'Vật liệu xây dựng', icon: 'folder', count: 25, children: [
          { id: 11, name: 'Xi măng', count: 5 },
          { id: 12, name: 'Cát, đá', count: 8 },
          { id: 13, name: 'Gạch, ngói', count: 12 }
        ]},
        { id: 2, name: 'Vật tư điện', icon: 'folder', count: 45, children: [
          { id: 21, name: 'Đèn chiếu sáng', count: 15 },
          { id: 22, name: 'Ổ cắm, công tắc', count: 20 },
          { id: 23, name: 'Dây dẫn', count: 10 }
        ]},
        { id: 3, name: 'Vật tư nước', icon: 'folder', count: 30 },
        { id: 4, name: 'Vật tư gỗ', icon: 'folder', count: 20 },
        { id: 5, name: 'Sơn & phụ kiện', icon: 'folder', count: 35 },
        { id: 6, name: 'Vật tư phụ', icon: 'folder', count: 50 }
      ],
      materials: [
        { id: 'VT001', name: 'Ốc vít M6', category: 'Vật tư phụ', unit: 'Cái', price: 500, stock: 5000, statusLabel: 'Còn hàng', statusColor: 'green' },
        { id: 'VT002', name: 'Keo silicon', category: 'Sơn & phụ kiện', unit: 'Kg', price: 45000, stock: 120, statusLabel: 'Sắp hết', statusColor: 'yellow' },
        { id: 'VT003', name: 'Ống nước PVC D21', category: 'Vật tư nước', unit: 'Mét', price: 8500, stock: 0, statusLabel: 'Hết hàng', statusColor: 'red' }
      ],
      units: [
        { id: 1, name: 'Cái', symbol: 'cái', type: 'Số lượng', note: '' },
        { id: 2, name: 'Kilogram', symbol: 'kg', type: 'Khối lượng', note: '' },
        { id: 3, name: 'Mét vuông', symbol: 'm²', type: 'Diện tích', note: '' },
        { id: 4, name: 'Mét khối', symbol: 'm³', type: 'Thể tích', note: '' }
      ],
      workCategories: [
        { id: 'HM01', name: 'Điện', icon: '⚡', color: '#F59E0B', description: 'Lắp đặt hệ thống điện', duration: '7-10 ngày' },
        { id: 'HM02', name: 'Nước', icon: '💧', color: '#3B82F6', description: 'Lắp đặt hệ thống nước', duration: '5-7 ngày' },
        { id: 'HM03', name: 'Gỗ', icon: '🪵', color: '#92400E', description: 'Thi công đồ gỗ', duration: '10-15 ngày' },
        { id: 'HM04', name: 'Sơn', icon: '🎨', color: '#EC4899', description: 'Sơn tường, bả matit', duration: '5-7 ngày' },
        { id: 'HM05', name: 'Trần thạch cao', icon: '⬜', color: '#6B7280', description: 'Trần thạch cao', duration: '7-10 ngày' }
      ]
    }
  },
  methods: {
    formatCurrency(value) {
      return value.toLocaleString('vi-VN') + 'đ'
    }
  }
}
</script>
