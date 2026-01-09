<template>
  <div class="space-y-6">
    <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800">QUẢN LÝ VẬT TƯ</h1>
        <div class="flex gap-3">
          <input type="text" placeholder="🔍 Search materials..." class="px-4 py-2 border border-gray-300 rounded-md">
          <select class="px-4 py-2 border border-gray-300 rounded-md">
            <option>Filter by status</option>
            <option>All</option>
            <option>In stock</option>
            <option>Low stock</option>
            <option>Out of stock</option>
          </select>
          <button class="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">Export to Excel</button>
          <button class="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">+ Add Material Usage</button>
        </div>
      </div>

      <!-- Quick Stats -->
      <div class="grid grid-cols-4 gap-4 mb-6">
        <div class="bg-blue-50 rounded-lg p-4">
          <p class="text-sm text-gray-600 mb-1">Total Used</p>
          <p class="text-2xl font-bold text-gray-800">150</p>
          <p class="text-xs text-gray-500">items</p>
        </div>
        <div class="bg-yellow-50 rounded-lg p-4">
          <p class="text-sm text-gray-600 mb-1">Pending</p>
          <p class="text-2xl font-bold text-yellow-600">2</p>
          <p class="text-xs text-gray-500">requests ⏳</p>
        </div>
        <div class="bg-red-50 rounded-lg p-4">
          <p class="text-sm text-gray-600 mb-1">Low Stock</p>
          <p class="text-2xl font-bold text-red-600">5</p>
          <p class="text-xs text-gray-500">items</p>
        </div>
        <div class="bg-green-50 rounded-lg p-4">
          <p class="text-sm text-gray-600 mb-1">Total Value</p>
          <p class="text-2xl font-bold text-green-600">12.5M</p>
          <p class="text-xs text-gray-500">VNĐ</p>
        </div>
      </div>

      <!-- Tabs -->
      <div class="border-b border-gray-200 mb-6">
        <div class="flex gap-6">
          <button :class="['pb-3 px-1 border-b-2 font-medium text-sm', activeTab === 'used' ? 'border-cyan-600 text-cyan-600' : 'border-transparent text-gray-600']" @click="activeTab = 'used'">
            Materials Used
          </button>
          <button :class="['pb-3 px-1 border-b-2 font-medium text-sm', activeTab === 'pending' ? 'border-cyan-600 text-cyan-600' : 'border-transparent text-gray-600']" @click="activeTab = 'pending'">
            Pending Requests
          </button>
          <button :class="['pb-3 px-1 border-b-2 font-medium text-sm', activeTab === 'inventory' ? 'border-cyan-600 text-cyan-600' : 'border-transparent text-gray-600']" @click="activeTab = 'inventory'">
            Inventory Status
          </button>
        </div>
      </div>

      <!-- Materials Used Tab -->
      <div v-if="activeTab === 'used'">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Date</th>
                <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Material</th>
                <th class="px-4 py-3 text-right text-sm font-medium text-gray-700">Quantity</th>
                <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Unit</th>
                <th class="px-4 py-3 text-right text-sm font-medium text-gray-700">Price</th>
                <th class="px-4 py-3 text-right text-sm font-medium text-gray-700">Total</th>
                <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">For</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="item in materialsUsed" :key="item.id" class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm">{{ item.date }}</td>
                <td class="px-4 py-3 text-sm">{{ item.material }}</td>
                <td class="px-4 py-3 text-sm text-right">{{ item.quantity }}</td>
                <td class="px-4 py-3 text-sm">{{ item.unit }}</td>
                <td class="px-4 py-3 text-sm text-right">{{ item.price.toLocaleString() }}đ</td>
                <td class="px-4 py-3 text-sm text-right">{{ item.total.toLocaleString() }}đ</td>
                <td class="px-4 py-3 text-sm">{{ item.category }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex justify-between items-center mt-4">
          <div class="text-sm text-gray-600">Showing 1-5 of 150 items</div>
          <div class="flex gap-2">
            <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">< Prev</button>
            <button class="px-3 py-1 bg-cyan-600 text-white rounded">1</button>
            <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">2</button>
            <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">3</button>
            <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">Next ></button>
          </div>
        </div>
      </div>

      <!-- Pending Requests Tab -->
      <div v-if="activeTab === 'pending'" class="space-y-4">
        <div v-for="request in pendingRequests" :key="request.id" class="border border-gray-200 rounded-lg p-6">
          <div class="flex justify-between items-start mb-4">
            <div>
              <div class="flex items-center gap-3 mb-2">
                <h3 class="font-semibold text-gray-800">Request #{{ request.id }}</h3>
                <span class="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded">⏳ Pending</span>
              </div>
              <p class="text-sm text-gray-600">{{ request.date }} {{ request.time }}</p>
              <p class="text-sm text-gray-600">From: {{ request.from }} ({{ request.role }})</p>
              <p class="text-sm text-gray-600">For: {{ request.category }}</p>
            </div>
          </div>

          <div class="mb-4">
            <p class="text-sm font-medium text-gray-700 mb-2">Materials requested:</p>
            <ul class="space-y-1">
              <li v-for="(mat, index) in request.materials" :key="index" class="text-sm text-gray-600 ml-4">
                • {{ mat.name }}
                <span :class="['ml-2 text-xs', mat.inStock ? 'text-green-600' : 'text-red-600']">
                  ({{ mat.inStock ? 'Stock: ' + mat.stock : 'Out of stock' }})
                </span>
              </li>
            </ul>
          </div>

          <div class="mb-4">
            <p class="text-sm text-gray-600">Estimated cost: <span class="font-semibold">{{ request.cost.toLocaleString() }} VNĐ</span></p>
          </div>

          <div class="bg-gray-50 rounded p-3 mb-4">
            <p class="text-sm font-medium text-gray-700 mb-1">Reason:</p>
            <p class="text-sm text-gray-600">{{ request.reason }}</p>
          </div>

          <div class="flex gap-2">
            <button class="px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700">Approve</button>
            <button class="px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700">❌ Reject</button>
            <button class="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">💬 Comment</button>
            <button class="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">View details</button>
          </div>
        </div>
      </div>

      <!-- Inventory Status Tab -->
      <div v-if="activeTab === 'inventory'">
        <div class="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
          <p class="text-sm font-medium text-orange-800">5 items low stock - Need attention</p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Material</th>
                <th class="px-4 py-3 text-right text-sm font-medium text-gray-700">Current</th>
                <th class="px-4 py-3 text-right text-sm font-medium text-gray-700">Required</th>
                <th class="px-4 py-3 text-center text-sm font-medium text-gray-700">Status</th>
                <th class="px-4 py-3 text-center text-sm font-medium text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="item in inventoryItems" :key="item.id" class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm">{{ item.material }}</td>
                <td class="px-4 py-3 text-sm text-right">{{ item.current }}</td>
                <td class="px-4 py-3 text-sm text-right">{{ item.required }}</td>
                <td class="px-4 py-3 text-center">
                  <span :class="['text-xs px-2 py-1 rounded', 
                                 item.status === 'low' ? 'bg-red-100 text-red-600' : 
                                 item.status === 'medium' ? 'bg-yellow-100 text-yellow-600' : 
                                 'bg-green-100 text-green-600']">
                    {{ item.status === 'low' ? 'Low' : item.status === 'medium' ? 'Med' : 'Good' }}
                  </span>
                </td>
                <td class="px-4 py-3 text-center">
                  <button v-if="item.status !== 'good'" class="px-3 py-1 bg-cyan-600 text-white text-xs rounded hover:bg-cyan-700">Order</button>
                  <span v-else class="text-gray-400">-</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-4 flex gap-3">
          <button class="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">Order low stock items</button>
          <button class="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50">View all inventory →</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PMMaterials',
  data() {
    return {
      activeTab: 'used',
      materialsUsed: [
        { id: 1, date: '26/12', material: 'Ốc vít M6', quantity: 50, unit: 'cái', price: 500, total: 25000, category: 'Điện' },
        { id: 2, date: '26/12', material: 'Keo', quantity: 2, unit: 'kg', price: 45000, total: 90000, category: 'Nước' },
        { id: 3, date: '25/12', material: 'Dây điện', quantity: 100, unit: 'm', price: 15000, total: 1500000, category: 'Điện' },
        { id: 4, date: '25/12', material: 'Ống nước', quantity: 20, unit: 'm', price: 8500, total: 170000, category: 'Nước' },
        { id: 5, date: '24/12', material: 'Gỗ công nghiệp', quantity: 5, unit: 'm²', price: 500000, total: 2500000, category: 'Gỗ' }
      ],
      pendingRequests: [
        {
          id: 24,
          date: '26/12/2024',
          time: '11:45 AM',
          from: 'Lê Văn C',
          role: 'Foreman',
          category: 'Hạng mục Điện',
          materials: [
            { name: 'Ốc vít M6 x 50 cái', inStock: true, stock: '100' },
            { name: 'Keo silicon x 2kg', inStock: true, stock: '5kg' }
          ],
          cost: 115000,
          reason: 'Cần bổ sung vật tư để hoàn thành lắp đặt ổ cắm phòng ngủ và phòng bếp.'
        },
        {
          id: 23,
          date: '25/12/2024',
          time: '02:30 PM',
          from: 'Lê Văn C',
          role: 'Foreman',
          category: 'Hạng mục Nước',
          materials: [
            { name: 'Ống PVC D40 x 10m', inStock: true, stock: '50m' },
            { name: 'Van khóa x 5 cái', inStock: false, stock: null }
          ],
          cost: 250000,
          reason: 'Hoàn thiện hệ thống nước phòng tắm.'
        }
      ],
      inventoryItems: [
        { id: 1, material: 'Ốc vít M6', current: '50 cái', required: '200 cái', status: 'low' },
        { id: 2, material: 'Keo', current: '3kg', required: '10kg', status: 'low' },
        { id: 3, material: 'Dây điện', current: '20m', required: '50m', status: 'medium' },
        { id: 4, material: 'Ống nước', current: '150m', required: '50m', status: 'good' },
        { id: 5, material: 'Gỗ công nghiệp', current: '10m²', required: '5m²', status: 'good' }
      ]
    }
  }
}
</script>
