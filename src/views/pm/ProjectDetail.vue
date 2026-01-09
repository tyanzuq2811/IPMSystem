<template>
  <div class="space-y-6">
    <!-- Header -->
    <div>
      <button @click="$router.push('/pm/dashboard')" class="text-cyan-600 hover:text-cyan-700 text-sm mb-3">← Back to My Projects</button>
      
      <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h1 class="text-2xl font-bold text-gray-800 mb-2">Vinhomes Landmark - Căn A1</h1>
            <p class="text-sm text-gray-600">123 Đường ABC, Quận 1, TP.HCM</p>
            <p class="text-sm text-gray-600 mt-1">
              Status: <span class="text-green-600">  Đang thi công</span> | 
              Created: <span>15/01/2024</span> | 
              ID: <span class="font-semibold">#PRJ2024001</span>
            </p>
          </div>
          <div class="flex gap-2">
            <button class="px-4 py-2 bg-cyan-600 text-white text-sm rounded hover:bg-cyan-700">💬 Chat with team</button>
            <button class="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">Export Report</button>
            <button class="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">Settings</button>
          </div>
        </div>

        <!-- Quick Overview Cards -->
        <div class="grid grid-cols-4 gap-4">
          <div class="bg-blue-50 rounded-lg p-4">
            <p class="text-xs text-gray-600 mb-1">Tiến độ</p>
            <p class="text-2xl font-bold text-gray-800 mb-1">85%</p>
            <div class="w-full bg-gray-200 rounded-full h-1.5 mb-1">
              <div class="bg-green-500 h-1.5 rounded-full" style="width: 85%"></div>
            </div>
            <p class="text-xs text-gray-500">17/20 tasks</p>
          </div>
          <div class="bg-green-50 rounded-lg p-4">
            <p class="text-xs text-gray-600 mb-1">Ngân sách</p>
            <p class="text-2xl font-bold text-gray-800 mb-1">145M/150M</p>
            <p class="text-xs text-green-600">↗️ +5M (-3.3%)</p>
          </div>
          <div class="bg-yellow-50 rounded-lg p-4">
            <p class="text-xs text-gray-600 mb-1">Thời gian</p>
            <p class="text-2xl font-bold text-gray-800 mb-1">5 ngày</p>
            <p class="text-xs text-green-600">On track</p>
          </div>
          <div class="bg-purple-50 rounded-lg p-4">
            <p class="text-xs text-gray-600 mb-1">Team</p>
            <p class="text-2xl font-bold text-gray-800 mb-1">5</p>
            <p class="text-xs text-gray-500">members</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabs Navigation -->
    <div class="bg-white rounded-lg shadow border border-gray-200">
      <div class="border-b border-gray-200">
        <div class="flex overflow-x-auto">
          <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id"
                  :class="['px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors',
                           activeTab === tab.id ? 'border-cyan-600 text-cyan-600' : 'border-transparent text-gray-600 hover:text-gray-800']">
            {{ tab.name }}
          </button>
        </div>
      </div>

      <div class="p-6">
        <!-- Tab: Overview -->
        <div v-if="activeTab === 'overview'" class="space-y-6">
          <div class="grid grid-cols-2 gap-6">
            <!-- Project Info -->
            <div class="border border-gray-200 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">THÔNG TIN DỰ ÁN</h3>
              <div class="space-y-2 text-sm">
                <div><span class="font-medium">Tên dự án:</span> Vinhomes Landmark - Căn A1</div>
                <div><span class="font-medium">Địa chỉ:</span> 123 Đường ABC, Q1, HCM</div>
                <div><span class="font-medium">Diện tích:</span> 120.5 m²</div>
                <div><span class="font-medium">Loại:</span> Căn hộ cao cấp</div>
                <div><span class="font-medium">Ngày bắt đầu:</span> 15/01/2024</div>
                <div><span class="font-medium">Deadline:</span> 30/03/2024</div>
                <div><span class="font-medium">Thời gian:</span> 75 ngày (còn lại: 5 ngày)</div>
                <div><span class="font-medium">Trạng thái:</span> <span class="text-green-600">Đang thi công</span></div>
              </div>
              <button class="mt-4 px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">Edit Info</button>
            </div>

            <!-- Team Members -->
            <div class="border border-gray-200 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">TEAM MEMBERS</h3>
              <div class="space-y-4">
                <div class="pb-3 border-b">
                  <p class="text-xs text-gray-500 mb-1">👔 Project Manager</p>
                  <p class="font-medium">Nguyễn Văn A (You)</p>
                  <p class="text-sm text-gray-600">nguyenvana@email.com</p>
                  <p class="text-sm text-gray-600">📞 0901234567</p>
                </div>
                <div class="pb-3 border-b">
                  <p class="text-xs text-gray-500 mb-1">⚒️ Foreman</p>
                  <p class="font-medium">Lê Văn C</p>
                  <p class="text-sm text-gray-600">levanc@email.com</p>
                  <p class="text-sm text-gray-600">📞 0907654321</p>
                  <button class="mt-2 text-xs text-cyan-600 hover:text-cyan-700">Send message</button>
                </div>
                <div>
                  <p class="text-xs text-gray-500 mb-1">👨‍💼 Client</p>
                  <p class="font-medium">Trần Thị X</p>
                  <p class="text-sm text-gray-600">tranthix@email.com</p>
                  <p class="text-sm text-gray-600">📞 0909876543</p>
                  <button class="mt-2 text-xs text-cyan-600 hover:text-cyan-700">Send message</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Recent Activities -->
          <div class="border border-gray-200 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">HOẠT ĐỘNG GẦN ĐÂY</h3>
            <div class="space-y-4">
              <div class="border-b border-gray-100 pb-4">
                <p class="text-xs text-gray-500 mb-1">🕐 2 giờ trước</p>
                <p class="font-medium text-gray-800">Lê Văn C cập nhật tiến độ: Lắp đặt điện - 90%</p>
                <p class="text-sm text-gray-600">"Đã hoàn thành lắp đặt ổ cắm và công tắc phòng khách"</p>
                <p class="text-sm text-gray-600">📷 3 ảnh | 👁️ Viewed | Status: ⏳ Chờ duyệt</p>
                <div class="flex gap-2 mt-2">
                  <button class="px-3 py-1 bg-green-600 text-white text-xs rounded">✅ Approve</button>
                  <button class="px-3 py-1 bg-red-600 text-white text-xs rounded">❌ Reject</button>
                  <button class="px-3 py-1 text-cyan-600 text-xs">💬 Comment</button>
                </div>
              </div>
              <div class="border-b border-gray-100 pb-4">
                <p class="text-xs text-gray-500 mb-1">🕐 5 giờ trước</p>
                <p class="font-medium text-gray-800">📦 You approved: Yêu cầu vật tư</p>
                <p class="text-sm text-gray-600">• Ốc vít M6 x50 • Keo silicon x2kg</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab: Progress -->
        <div v-if="activeTab === 'progress'" class="space-y-6">
          <div class="flex gap-4 mb-4">
            <select class="px-4 py-2 border border-gray-300 rounded-md text-sm">
              <option>All</option>
              <option>Pending approval</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
            <select class="px-4 py-2 border border-gray-300 rounded-md text-sm">
              <option>Latest first</option>
              <option>Oldest first</option>
            </select>
          </div>

          <!-- Progress Overview -->
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 class="font-semibold text-gray-800 mb-3">TỔNG QUAN TIẾN ĐỘ</h3>
            <div class="mb-3">
              <div class="flex justify-between text-sm mb-2">
                <span>Tiến độ tổng thể:</span>
                <span>85% (17/20 tasks)</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3">
                <div class="bg-green-500 h-3 rounded-full" style="width: 85%"></div>
              </div>
            </div>
            <p class="text-sm">On track: 15 tasks | Behind: 1 task | Ahead: 4 tasks</p>
            <p class="text-sm text-orange-600 mt-2">Chờ duyệt: 3 cập nhật</p>
          </div>

          <!-- Category Progress -->
          <div class="border border-gray-200 rounded-lg p-6">
            <h3 class="font-semibold text-gray-800 mb-4">ĐIỆN (90% - On track)</h3>
            <div class="bg-gray-50 rounded-lg p-4 mb-4">
              <div class="flex justify-between text-sm mb-2">
                <span class="font-medium">Cập nhật #15 - 26/12/2024 10:30 AM</span>
                <span class="bg-yellow-100 text-yellow-600 px-2 py-1 rounded text-xs">⏳ Chờ duyệt</span>
              </div>
              <p class="text-sm text-gray-600 mb-2">By: Lê Văn C (Foreman)</p>
              <div class="mb-2">
                <p class="text-sm mb-1">Progress: 85% → 90% (+5%)</p>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-yellow-500 h-2 rounded-full" style="width: 90%"></div>
                </div>
              </div>
              <p class="text-sm text-gray-700 mb-2">📝 Notes: "Đã hoàn thành lắp đặt ổ cắm và công tắc phòng khách..."</p>
              <p class="text-sm text-gray-600 mb-2">📷 Images (3)</p>
              <div class="flex gap-2 mt-3">
                <button class="px-4 py-2 bg-green-600 text-white text-sm rounded">Approve</button>
                <button class="px-4 py-2 bg-red-600 text-white text-sm rounded">❌ Reject</button>
                <button class="px-4 py-2 bg-white border border-gray-300 text-sm rounded">💬 Comment</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab: Budget -->
        <div v-if="activeTab === 'budget'" class="space-y-6">
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 rounded-lg p-4">
              <p class="text-sm text-gray-600 mb-1">Planned Budget</p>
              <p class="text-2xl font-bold">150M đ</p>
              <p class="text-xs text-gray-500">100%</p>
            </div>
            <div class="bg-green-50 rounded-lg p-4">
              <p class="text-sm text-gray-600 mb-1">Actual Spent</p>
              <p class="text-2xl font-bold text-green-600">145M đ</p>
              <p class="text-xs text-gray-500">96.7%</p>
            </div>
            <div class="bg-orange-50 rounded-lg p-4">
              <p class="text-sm text-gray-600 mb-1">Variance</p>
              <p class="text-2xl font-bold text-orange-600">-5M đ</p>
              <p class="text-xs text-orange-600">-3.3% Watch</p>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-4 py-3 text-left text-sm font-medium">Hạng mục</th>
                  <th class="px-4 py-3 text-right text-sm font-medium">Dự toán</th>
                  <th class="px-4 py-3 text-right text-sm font-medium">Thực tế</th>
                  <th class="px-4 py-3 text-right text-sm font-medium">Chênh lệch</th>
                  <th class="px-4 py-3 text-center text-sm font-medium">Status</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-4 py-3 text-sm">⚡ Điện</td>
                  <td class="px-4 py-3 text-sm text-right">15.0M</td>
                  <td class="px-4 py-3 text-sm text-right">16.5M</td>
                  <td class="px-4 py-3 text-sm text-right text-red-600">+1.5M</td>
                  <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">🔴 Over</span></td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm">💧 Nước</td>
                  <td class="px-4 py-3 text-sm text-right">12.0M</td>
                  <td class="px-4 py-3 text-sm text-right">11.5M</td>
                  <td class="px-4 py-3 text-sm text-right text-green-600">-0.5M</td>
                  <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">🟢 Good</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Tab: Materials -->
        <div v-if="activeTab === 'materials'">
          <p class="text-gray-600 mb-4">Quản lý vật tư cho dự án này. Xem danh sách vật tư đã sử dụng, yêu cầu chờ duyệt và tình trạng kho.</p>
          <button @click="$router.push('/pm/materials')" class="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">
            Xem chi tiết Vật tư →
          </button>
        </div>

        <!-- Tab: Team -->
        <div v-if="activeTab === 'team'" class="space-y-4">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-semibold text-gray-800">TEAM MEMBERS</h3>
            <button class="px-4 py-2 bg-cyan-600 text-white text-sm rounded">+ Add member</button>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="border border-gray-200 rounded-lg p-6">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">👤</div>
                <div>
                  <p class="font-semibold">Nguyễn Văn A (You)</p>
                  <p class="text-sm text-gray-600">Project Manager</p>
                </div>
              </div>
              <p class="text-sm text-gray-600">📧 nguyenvana@email.com</p>
              <p class="text-sm text-gray-600">📞 0901234567</p>
              <p class="text-sm text-gray-600 mt-2">Current projects: 8 | Completed: 15</p>
            </div>

            <div class="border border-gray-200 rounded-lg p-6">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">⚒️</div>
                <div>
                  <p class="font-semibold">Lê Văn C</p>
                  <p class="text-sm text-gray-600">Foreman</p>
                </div>
              </div>
              <p class="text-sm text-gray-600">📧 levanc@email.com</p>
              <p class="text-sm text-gray-600">📞 0907654321</p>
              <p class="text-sm text-gray-600 mt-2">Rating: ⭐⭐⭐⭐⭐ (4.8/5)</p>
              <button class="mt-2 text-sm text-cyan-600 hover:text-cyan-700">Send message</button>
            </div>
          </div>
        </div>

        <!-- Tab: Documents -->
        <div v-if="activeTab === 'documents'" class="space-y-6">
          <div class="flex gap-3 mb-4">
            <button class="px-4 py-2 bg-cyan-600 text-white text-sm rounded">📤 Upload</button>
            <button class="px-4 py-2 bg-white border border-gray-300 text-sm rounded">📁 New folder</button>
            <input type="text" placeholder="🔍 Search..." class="flex-1 px-4 py-2 border border-gray-300 rounded-md">
          </div>

          <div class="space-y-2">
            <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
              <p class="font-medium">📁 Thiết kế (8 files - 15.2 MB)</p>
            </div>
            <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
              <p class="font-medium">📁 Hợp đồng (5 files - 8.5 MB)</p>
            </div>
            <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
              <p class="font-medium">📁 Ảnh tiến độ (150 files - 250 MB)</p>
            </div>
          </div>

          <p class="text-sm text-gray-600 mt-4">Storage: 295.5 MB / 500 MB (59%)</p>
        </div>

        <!-- Tab: Chat -->
        <div v-if="activeTab === 'chat'" class="space-y-4">
          <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 h-96 overflow-y-auto">
            <div class="space-y-4">
              <div class="flex gap-3">
                <div class="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div class="flex-1">
                  <p class="text-sm font-medium">Lê Văn C <span class="text-xs text-gray-500">2 giờ trước</span></p>
                  <p class="text-sm text-gray-700 bg-white rounded-lg p-3 mt-1">Anh ơi, em đã cập nhật tiến độ lắp điện lên 90%. Anh xem và duyệt giúp em nhé.</p>
                </div>
              </div>
              <div class="flex gap-3 flex-row-reverse">
                <div class="w-8 h-8 bg-cyan-500 rounded-full flex-shrink-0"></div>
                <div class="flex-1 text-right">
                  <p class="text-sm font-medium">You <span class="text-xs text-gray-500">2 giờ trước</span></p>
                  <p class="text-sm text-gray-700 bg-cyan-100 rounded-lg p-3 mt-1 inline-block">Ok em, anh xem rồi, làm tốt lắm! 👍</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-2">
            <input type="text" placeholder="Type your message..." class="flex-1 px-4 py-2 border border-gray-300 rounded-md">
            <button class="px-6 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">Send 🚀</button>
          </div>
        </div>

        <!-- Tab: Timeline -->
        <div v-if="activeTab === 'timeline'" class="space-y-6">
          <div class="space-y-6">
            <div>
              <h3 class="font-semibold text-gray-700 mb-3">📅 26/12/2024</h3>
              <div class="ml-4 border-l-2 border-gray-200 pl-4 space-y-3">
                <div>
                  <p class="text-sm font-medium">10:30 AM - Progress Update</p>
                  <p class="text-sm text-gray-600">⚡ Lê Văn C updated: Điện 85% → 90%</p>
                </div>
                <div>
                  <p class="text-sm font-medium">09:00 AM - Material Approved</p>
                  <p class="text-sm text-gray-600">📦 You approved: Ốc vít x50, Keo x2kg</p>
                </div>
              </div>
            </div>

            <div>
              <h3 class="font-semibold text-gray-700 mb-3">📅 25/12/2024</h3>
              <div class="ml-4 border-l-2 border-gray-200 pl-4 space-y-3">
                <div>
                  <p class="text-sm font-medium">04:00 PM - Progress Approved</p>
                  <p class="text-sm text-gray-600">✅ You approved: Điện 80% → 85%</p>
                </div>
              </div>
            </div>
          </div>
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
        { id: 'progress', name: 'Progress' },
        { id: 'budget', name: 'Budget' },
        { id: 'materials', name: 'Materials' },
        { id: 'team', name: 'Team' },
        { id: 'documents', name: 'Documents' },
        { id: 'chat', name: 'Chat' },
        { id: 'timeline', name: 'Timeline' }
      ]
    }
  }
}
</script>
