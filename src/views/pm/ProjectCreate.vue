<template>
  <div class="max-w-6xl mx-auto space-y-6">
    <!-- Progress Steps Indicator -->
    <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
      <div class="flex items-center justify-between mb-2">
        <div v-for="(step, index) in steps" :key="index" class="flex items-center" :class="{ 'flex-1': index < steps.length - 1 }">
          <div class="flex flex-col items-center">
            <div :class="['w-10 h-10 rounded-full flex items-center justify-center font-semibold', 
                         currentStep > index ? 'bg-cyan-600 text-white' : 
                         currentStep === index ? 'bg-cyan-600 text-white' : 
                         'bg-gray-200 text-gray-600']">
              {{ index + 1 }}
            </div>
            <span :class="['text-xs mt-2 text-center', currentStep >= index ? 'text-cyan-600 font-medium' : 'text-gray-500']">
              {{ step }}
            </span>
          </div>
          <div v-if="index < steps.length - 1" :class="['flex-1 h-1 mx-4', currentStep > index ? 'bg-cyan-600' : 'bg-gray-200']"></div>
        </div>
      </div>
    </div>

    <!-- Step Content -->
    <div class="bg-white rounded-lg shadow border border-gray-200 p-8">
      <!-- Step 1: Basic Info -->
      <div v-if="currentStep === 0">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">THÔNG TIN CƠ BẢN</h2>
        
        <div class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">* Tên dự án</label>
            <input v-model="formData.projectName" type="text" placeholder="VD: Vinhomes Landmark - Căn A1" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">* Địa chỉ thi công</label>
            <input v-model="formData.address" type="text" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent mb-2">
            <button class="text-sm text-cyan-600 hover:text-cyan-700">Chọn trên bản đồ</button>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Tầng/Căn số</label>
              <input v-model="formData.floor" type="text" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Tòa nhà</label>
              <input v-model="formData.building" type="text" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Quận/Huyện</label>
              <input v-model="formData.district" type="text" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Thành phố</label>
              <input v-model="formData.city" type="text" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">* Diện tích (m²)</label>
            <input v-model="formData.area" type="number" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
            <p class="text-xs text-gray-500 mt-1">Diện tích sàn cần thi công</p>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Loại công trình</label>
            <select v-model="formData.type" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
              <option value="">Chọn loại công trình</option>
              <option>Căn hộ cao cấp</option>
              <option>Văn phòng</option>
              <option>Nhà phố</option>
              <option>Biệt thự</option>
              <option>Khách sạn</option>
              <option>Nhà hàng</option>
              <option>Showroom</option>
            </select>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">* Ngày bắt đầu thi công</label>
              <input v-model="formData.startDate" type="date" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">* Ngày hoàn thành dự kiến</label>
              <input v-model="formData.endDate" type="date" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
              <p v-if="calculateDuration" class="text-xs text-gray-500 mt-1">Thời gian thực hiện: {{ calculateDuration }} ngày</p>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Mô tả dự án (optional)</label>
            <textarea v-model="formData.description" rows="4" placeholder="Mô tả chi tiết về yêu cầu, đặc điểm..." class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"></textarea>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Upload hình ảnh hiện trạng/thiết kế</label>
            <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <span class="text-4xl mb-2 block">📷</span>
              <p class="text-sm text-gray-600 mb-1">Drag & drop hoặc click để chọn file</p>
              <p class="text-xs text-gray-500">Max 10 files (JPG, PNG, PDF)</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 2: Client Info -->
      <div v-if="currentStep === 1">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">THÔNG TIN KHÁCH HÀNG</h2>
        
        <div class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-3">Khách hàng</label>
            <div class="space-y-2">
              <label class="flex items-center">
                <input type="radio" v-model="formData.clientOption" value="existing" class="mr-2">
                <span>Chọn khách hàng có sẵn</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="formData.clientOption" value="new" class="mr-2">
                <span>Tạo khách hàng mới</span>
              </label>
            </div>
          </div>

          <!-- Search Existing Client -->
          <div v-if="formData.clientOption === 'existing'" class="border border-gray-300 rounded-lg p-4">
            <input type="text" placeholder="🔍 Tìm theo tên, email, SĐT..." class="w-full px-4 py-2 border border-gray-300 rounded-md mb-4">
            
            <div class="space-y-3">
              <div v-for="client in existingClients" :key="client.id" class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer" @click="selectClient(client)">
                <div class="flex items-start justify-between">
                  <div>
                    <p class="font-medium text-gray-800">{{ client.name }}</p>
                    <p class="text-sm text-gray-600">{{ client.email }}</p>
                    <p class="text-sm text-gray-600">📞 {{ client.phone }}</p>
                    <p class="text-xs text-gray-500 mt-1">{{ client.projects }} dự án đã hoàn thành</p>
                  </div>
                  <button class="px-4 py-2 bg-cyan-600 text-white text-sm rounded hover:bg-cyan-700">Chọn</button>
                </div>
              </div>
            </div>
          </div>

          <!-- New Client Form -->
          <div v-if="formData.clientOption === 'new'" class="border border-gray-300 rounded-lg p-6 space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">* Họ và tên</label>
              <input v-model="formData.newClient.name" type="text" class="w-full px-4 py-2 border border-gray-300 rounded-md">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">* Email</label>
              <input v-model="formData.newClient.email" type="email" class="w-full px-4 py-2 border border-gray-300 rounded-md">
              <p class="text-xs text-gray-500 mt-1">Validation: format email</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">* Số điện thoại</label>
              <input v-model="formData.newClient.phone" type="tel" class="w-full px-4 py-2 border border-gray-300 rounded-md">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Công ty/Tổ chức (optional)</label>
              <input v-model="formData.newClient.company" type="text" class="w-full px-4 py-2 border border-gray-300 rounded-md">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Địa chỉ liên hệ (optional)</label>
              <textarea v-model="formData.newClient.address" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-md"></textarea>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Ghi chú</label>
              <textarea v-model="formData.newClient.note" rows="2" placeholder="VD: Khách hàng VIP, ưu tiên cao..." class="w-full px-4 py-2 border border-gray-300 rounded-md"></textarea>
            </div>

            <div>
              <label class="flex items-center">
                <input type="checkbox" v-model="formData.newClient.createAccount" class="mr-2">
                <span class="text-sm">Tạo tài khoản cho khách hàng (để xem tiến độ)</span>
              </label>
              <p class="text-xs text-gray-500 ml-6">→ Mật khẩu sẽ được gửi qua email</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 3: Categories -->
      <div v-if="currentStep === 2">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">CÁC HẠNG MỤC THI CÔNG</h2>
        
        <div class="mb-4 flex gap-3">
          <button @click="addCategory" class="px-4 py-2 bg-cyan-600 text-white text-sm rounded hover:bg-cyan-700">+ Thêm hạng mục</button>
          <button class="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">📋 Chọn từ template</button>
        </div>

        <div class="space-y-6">
          <div v-for="(category, index) in formData.categories" :key="index" class="border border-gray-200 rounded-lg p-6">
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">* Chọn loại hạng mục</label>
                <select v-model="category.type" class="w-full px-4 py-2 border border-gray-300 rounded-md">
                  <option value="">Chọn loại</option>
                  <option value="electric">Điện</option>
                  <option value="water">💧 Nước</option>
                  <option value="wood">🪵 Gỗ</option>
                  <option value="paint">🎨 Sơn</option>
                  <option value="ceiling">⬜ Trần thạch cao</option>
                  <option value="other">🔨 Khác</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Mô tả công việc</label>
                <textarea v-model="category.description" rows="2" placeholder="VD: Lắp đặt hệ thống điện âm tường" class="w-full px-4 py-2 border border-gray-300 rounded-md"></textarea>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Ước tính thời gian (ngày)</label>
                  <div class="flex gap-2 items-center">
                    <input v-model="category.durationFrom" type="number" placeholder="Từ" class="w-full px-4 py-2 border border-gray-300 rounded-md">
                    <span>-</span>
                    <input v-model="category.durationTo" type="number" placeholder="Đến" class="w-full px-4 py-2 border border-gray-300 rounded-md">
                  </div>
                </div>
              </div>

              <div>
                <p class="text-sm font-medium text-gray-700 mb-2">Checklist công việc:</p>
                <div class="space-y-2">
                  <label v-for="(task, taskIndex) in category.checklist" :key="taskIndex" class="flex items-center">
                    <input type="checkbox" v-model="task.checked" class="mr-2">
                    <span class="text-sm">{{ task.name }}</span>
                  </label>
                  <button class="text-sm text-cyan-600 hover:text-cyan-700">+ Thêm công việc</button>
                </div>
              </div>

              <div class="flex justify-end gap-2">
                <button @click="removeCategory(index)" class="px-3 py-1 text-red-600 hover:bg-red-50 text-sm rounded">🗑️ Xóa hạng mục</button>
                <button class="px-3 py-1 text-gray-600 hover:bg-gray-50 text-sm">⬆️</button>
                <button class="px-3 py-1 text-gray-600 hover:bg-gray-50 text-sm">⬇️</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 4: Budget -->
      <div v-if="currentStep === 3">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">DỰ TOÁN NGÂN SÁCH</h2>
        
        <div class="space-y-6">
          <div class="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
            <p class="text-sm text-gray-700">Tổng ngân sách dự kiến:</p>
            <p class="text-3xl font-bold text-cyan-600">{{ totalBudget.toLocaleString() }} VNĐ</p>
            <p class="text-xs text-gray-500">(Tự động tính từ các hạng mục bên dưới)</p>
          </div>

          <div class="space-y-4">
            <div v-for="(category, index) in formData.budgetCategories" :key="index" class="border border-gray-200 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">{{ category.name }}</h3>
              
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Chi phí dự toán (VNĐ)</label>
                <input v-model="category.total" type="number" class="w-full px-4 py-2 border border-gray-300 rounded-md">
              </div>

              <p class="text-sm font-medium text-gray-700 mb-3">Phân bổ chi tiết:</p>
              <div class="space-y-3">
                <div class="flex items-center gap-4">
                  <label class="w-32 text-sm text-gray-600">• Vật liệu:</label>
                  <input v-model="category.materials" type="number" class="flex-1 px-4 py-2 border border-gray-300 rounded-md">
                  <span class="text-sm text-gray-500 w-20">{{ calculatePercentage(category.materials, category.total) }}%</span>
                </div>
                <div class="flex items-center gap-4">
                  <label class="w-32 text-sm text-gray-600">• Nhân công:</label>
                  <input v-model="category.labor" type="number" class="flex-1 px-4 py-2 border border-gray-300 rounded-md">
                  <span class="text-sm text-gray-500 w-20">{{ calculatePercentage(category.labor, category.total) }}%</span>
                </div>
                <div class="flex items-center gap-4">
                  <label class="w-32 text-sm text-gray-600">• Thiết bị:</label>
                  <input v-model="category.equipment" type="number" class="flex-1 px-4 py-2 border border-gray-300 rounded-md">
                  <span class="text-sm text-gray-500 w-20">{{ calculatePercentage(category.equipment, category.total) }}%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="border border-gray-200 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Chi phí khác</h3>
            <div class="space-y-3">
              <div class="flex items-center gap-4">
                <label class="w-48 text-sm text-gray-600">Chi phí quản lý (%):</label>
                <input v-model="formData.managementFee" type="number" class="w-32 px-4 py-2 border border-gray-300 rounded-md">
                <span class="text-sm text-gray-500">→ {{ calculateFee(formData.managementFee).toLocaleString() }} VNĐ</span>
              </div>
              <div class="flex items-center gap-4">
                <label class="w-48 text-sm text-gray-600">Chi phí dự phòng (%):</label>
                <input v-model="formData.contingencyFee" type="number" class="w-32 px-4 py-2 border border-gray-300 rounded-md">
                <span class="text-sm text-gray-500">→ {{ calculateFee(formData.contingencyFee).toLocaleString() }} VNĐ</span>
              </div>
              <div class="flex items-center gap-4">
                <label class="w-48 text-sm text-gray-600">Thuế VAT (%):</label>
                <input v-model="formData.vatFee" type="number" class="w-32 px-4 py-2 border border-gray-300 rounded-md">
                <span class="text-sm text-gray-500">→ {{ calculateFee(formData.vatFee).toLocaleString() }} VNĐ</span>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 border border-gray-300 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">TỔNG KẾT</h3>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span>Tổng chi phí hạng mục:</span>
                <span class="font-medium">{{ categoryTotal.toLocaleString() }} VNĐ</span>
              </div>
              <div class="flex justify-between">
                <span>Chi phí quản lý:</span>
                <span class="font-medium">{{ calculateFee(formData.managementFee).toLocaleString() }} VNĐ</span>
              </div>
              <div class="flex justify-between">
                <span>Chi phí dự phòng:</span>
                <span class="font-medium">{{ calculateFee(formData.contingencyFee).toLocaleString() }} VNĐ</span>
              </div>
              <div class="flex justify-between">
                <span>Thuế VAT:</span>
                <span class="font-medium">{{ calculateFee(formData.vatFee).toLocaleString() }} VNĐ</span>
              </div>
              <div class="border-t border-gray-300 pt-2 mt-2 flex justify-between text-lg font-bold">
                <span>TỔNG CỘNG:</span>
                <span class="text-cyan-600">{{ totalBudget.toLocaleString() }} VNĐ</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 5: Team & Confirm -->
      <div v-if="currentStep === 4">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">PHÂN CÔNG TEAM & XÁC NHẬN</h2>
        
        <div class="space-y-6">
          <!-- Foreman Selection -->
          <div class="border border-gray-200 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">* Foreman phụ trách</h3>
            
            <div class="space-y-3">
              <div v-for="foreman in availableForemen" :key="foreman.id" 
                   class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                   :class="{ 'border-cyan-500 bg-cyan-50': formData.selectedForeman === foreman.id }"
                   @click="formData.selectedForeman = foreman.id">
                <div class="flex items-start justify-between">
                  <div>
                    <p class="font-medium text-gray-800">{{ foreman.name }}</p>
                    <p class="text-sm text-gray-600">Chuyên môn: {{ foreman.expertise }}</p>
                    <p class="text-sm text-gray-600">Đang có: {{ foreman.projects }} dự án {{ foreman.overloaded ? '(Quá tải)' : '' }}</p>
                    <p class="text-sm text-gray-600">Rating: {{ foreman.rating }}</p>
                  </div>
                  <button class="px-4 py-2 bg-cyan-600 text-white text-sm rounded hover:bg-cyan-700">Chọn</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Schedule -->
          <div class="border border-gray-200 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Lịch làm việc mặc định</h3>
            <div class="space-y-2">
              <label class="flex items-center">
                <input type="checkbox" v-model="formData.schedule.weekdays" class="mr-2">
                <span class="text-sm">Thứ 2 - Thứ 6 (8:00 - 17:00)</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" v-model="formData.schedule.saturday" class="mr-2">
                <span class="text-sm">Thứ 7 (8:00 - 12:00)</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" v-model="formData.schedule.sunday" class="mr-2">
                <span class="text-sm">Chủ nhật</span>
              </label>
            </div>
          </div>

          <!-- Summary -->
          <div class="bg-gray-50 border border-gray-300 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">📋 Tóm tắt dự án</h3>
            
            <div class="space-y-3 text-sm">
              <div>
                <span class="font-medium">Tên dự án:</span>
                <span class="ml-2">{{ formData.projectName }}</span>
              </div>
              <div>
                <span class="font-medium">Địa chỉ:</span>
                <span class="ml-2">{{ formData.address }}</span>
              </div>
              <div>
                <span class="font-medium">Diện tích:</span>
                <span class="ml-2">{{ formData.area }} m²</span>
              </div>
              <div>
                <span class="font-medium">Thời gian:</span>
                <span class="ml-2">{{ formData.startDate }} - {{ formData.endDate }} ({{ calculateDuration }} ngày)</span>
              </div>
              <div>
                <span class="font-medium">👨‍💼 Client:</span>
                <span class="ml-2">{{ selectedClientName }}</span>
              </div>
              <div>
                <span class="font-medium">⚒️ Foreman:</span>
                <span class="ml-2">{{ selectedForemanName }}</span>
              </div>
              <div>
                <span class="font-medium">📊 Hạng mục:</span>
                <span class="ml-2">{{ formData.categories.length }} hạng mục</span>
              </div>
              <div>
                <span class="font-medium">💰 Ngân sách:</span>
                <span class="ml-2 text-cyan-600 font-bold">{{ totalBudget.toLocaleString() }} VNĐ</span>
              </div>
            </div>
          </div>

          <!-- Notifications -->
          <div class="border border-gray-200 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Gửi email thông báo cho:</h3>
            <div class="space-y-2">
              <label class="flex items-center">
                <input type="checkbox" v-model="formData.notifyClient" class="mr-2">
                <span class="text-sm">Khách hàng</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" v-model="formData.notifyForeman" class="mr-2">
                <span class="text-sm">Foreman</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" v-model="formData.notifyAdmin" class="mr-2">
                <span class="text-sm">Admin</span>
              </label>
            </div>
          </div>

          <div>
            <label class="flex items-center">
              <input type="checkbox" v-model="formData.createClientAccount" class="mr-2">
              <span class="text-sm">Tạo tài khoản cho khách hàng (nếu chưa có)</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <div class="flex justify-between">
      <button v-if="currentStep > 0" @click="prevStep" class="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
        ← Quay lại
      </button>
      <div class="ml-auto flex gap-3">
        <button class="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
          💾 Lưu nháp
        </button>
        <button v-if="currentStep < 4" @click="nextStep" class="px-6 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">
          Tiếp theo →
        </button>
        <button v-else @click="createProject" class="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Tạo dự án mới
        </button>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-xl p-8 max-w-md">
        <div class="text-center">
          <div class="text-6xl mb-4 text-green-600">✓</div>
          <h2 class="text-2xl font-bold text-gray-800 mb-2">Tạo dự án thành công!</h2>
          <p class="text-gray-600 mb-4">Dự án "{{ formData.projectName }}" đã được tạo thành công.</p>
          <p class="text-sm text-gray-600 mb-2">Mã dự án: <span class="font-semibold">#PRJ2024001</span></p>
          
          <div class="text-left bg-gray-50 rounded p-4 mb-6">
            <p class="text-sm font-semibold text-gray-700 mb-2">Email thông báo đã được gửi đến:</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li v-if="formData.notifyClient">• {{ selectedClientName }} (Client)</li>
              <li v-if="formData.notifyForeman">• {{ selectedForemanName }} (Foreman)</li>
              <li v-if="formData.notifyAdmin">• Admin</li>
            </ul>
          </div>

          <p class="text-sm font-medium text-gray-700 mb-4">Bạn muốn làm gì tiếp theo?</p>
          
          <div class="space-y-2">
            <button class="w-full px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">📋 Xem chi tiết dự án</button>
            <button class="w-full px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50">💬 Chat với Foreman</button>
            <button @click="resetForm" class="w-full px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50">Tạo dự án mới</button>
            <button @click="goToDashboard" class="w-full px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50">🏠 Về Dashboard</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCreate',
  data() {
    return {
      currentStep: 0,
      showSuccessModal: false,
      steps: [
        'Thông tin cơ bản',
        'Khách hàng',
        'Hạng mục',
        'Ngân sách',
        'Team & Hoàn tất'
      ],
      formData: {
        projectName: '',
        address: '',
        floor: '',
        building: '',
        district: '',
        city: '',
        area: '',
        type: '',
        startDate: '',
        endDate: '',
        description: '',
        clientOption: 'existing',
        selectedClient: null,
        newClient: {
          name: '',
          email: '',
          phone: '',
          company: '',
          address: '',
          note: '',
          createAccount: false
        },
        categories: [
          {
            type: 'electric',
            description: '',
            durationFrom: 7,
            durationTo: 10,
            checklist: [
              { name: 'Đi dây điện âm tường', checked: true },
              { name: 'Lắp đặt tủ điện', checked: true },
              { name: 'Lắp ổ cắm, công tắc', checked: true },
              { name: 'Kiểm tra an toàn', checked: false }
            ]
          }
        ],
        budgetCategories: [
          { name: 'Điện', total: 15000000, materials: 10000000, labor: 4000000, equipment: 1000000 },
          { name: '💧 Nước', total: 12000000, materials: 8000000, labor: 3500000, equipment: 500000 }
        ],
        managementFee: 5,
        contingencyFee: 10,
        vatFee: 10,
        selectedForeman: null,
        schedule: {
          weekdays: true,
          saturday: true,
          sunday: false
        },
        notifyClient: true,
        notifyForeman: true,
        notifyAdmin: true,
        createClientAccount: false
      },
      existingClients: [
        { id: 1, name: 'Trần Thị X', email: 'tranthix@email.com', phone: '0909876543', projects: 3 },
        { id: 2, name: 'Nguyễn Văn Y', email: 'nguyenvany@email.com', phone: '0901112222', projects: 1 }
      ],
      availableForemen: [
        { id: 1, name: 'Lê Văn C', expertise: 'Điện, Nước', projects: 3, rating: '(4.8/5)', overloaded: false },
        { id: 2, name: 'Phạm Văn D', expertise: 'Gỗ, Sơn', projects: 5, rating: '(4.2/5)', overloaded: true }
      ]
    }
  },
  computed: {
    calculateDuration() {
      if (this.formData.startDate && this.formData.endDate) {
        const start = new Date(this.formData.startDate)
        const end = new Date(this.formData.endDate)
        const diffTime = Math.abs(end - start)
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        return diffDays
      }
      return null
    },
    categoryTotal() {
      return this.formData.budgetCategories.reduce((sum, cat) => sum + Number(cat.total || 0), 0)
    },
    totalBudget() {
      const base = this.categoryTotal
      const management = this.calculateFee(this.formData.managementFee)
      const contingency = this.calculateFee(this.formData.contingencyFee)
      const vat = this.calculateFee(this.formData.vatFee)
      return base + management + contingency + vat
    },
    selectedClientName() {
      if (this.formData.clientOption === 'new') {
        return this.formData.newClient.name || 'N/A'
      }
      const client = this.existingClients.find(c => c.id === this.formData.selectedClient)
      return client ? client.name : 'N/A'
    },
    selectedForemanName() {
      const foreman = this.availableForemen.find(f => f.id === this.formData.selectedForeman)
      return foreman ? foreman.name : 'N/A'
    }
  },
  methods: {
    nextStep() {
      if (this.currentStep < 4) {
        this.currentStep++
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--
      }
    },
    addCategory() {
      this.formData.categories.push({
        type: '',
        description: '',
        durationFrom: '',
        durationTo: '',
        checklist: []
      })
    },
    removeCategory(index) {
      this.formData.categories.splice(index, 1)
    },
    selectClient(client) {
      this.formData.selectedClient = client.id
    },
    calculatePercentage(value, total) {
      if (!total || total === 0) return 0
      return ((value / total) * 100).toFixed(1)
    },
    calculateFee(percentage) {
      return (this.categoryTotal * (percentage / 100))
    },
    createProject() {
      this.showSuccessModal = true
    },
    resetForm() {
      this.showSuccessModal = false
      this.currentStep = 0
      // Reset form data here
    },
    goToDashboard() {
      this.$router.push('/pm/dashboard')
    }
  }
}
</script>
