<template>
  <div class="space-y-6">
    <!-- Request Form -->
    <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">YÊU CẦU VẬT TƯ</h1>

      <form @submit.prevent="submitRequest" class="space-y-6">
        <!-- Project Selection -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            For project: <span class="text-red-500">*</span>
          </label>
          <select v-model="formData.project" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500">
            <option value="">-- Select project --</option>
            <option value="1">Vinhomes Landmark A1</option>
            <option value="2">Masteri Thảo Điền B3</option>
            <option value="3">Estella Heights D1</option>
          </select>
        </div>

        <!-- Category Selection -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Category: <span class="text-red-500">*</span>
          </label>
          <select v-model="formData.category" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500">
            <option value="">-- Select category --</option>
            <option value="electric">Điện</option>
            <option value="water">Nước</option>
            <option value="wood">Gỗ</option>
            <option value="paint">Sơn</option>
          </select>
        </div>

        <!-- Materials List -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-3">Materials needed:</label>
          
          <div v-for="(material, index) in materials" :key="index" class="border border-gray-200 rounded-lg p-4 mb-4">
            <div class="flex items-start justify-between mb-4">
              <h3 class="font-medium text-gray-800">Material #{{ index + 1 }}</h3>
              <button v-if="materials.length > 1" type="button" @click="removeMaterial(index)" class="text-red-600 hover:text-red-700 text-sm">
                Remove
              </button>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="col-span-2">
                <label class="block text-sm text-gray-700 mb-1">
                  Material name: <span class="text-red-500">*</span>
                </label>
                <input 
                  v-model="material.name"
                  type="text"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="Search/Select material"
                >
              </div>

              <div>
                <label class="block text-sm text-gray-700 mb-1">
                  Quantity needed: <span class="text-red-500">*</span>
                </label>
                <input 
                  v-model="material.quantity"
                  type="number"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                >
              </div>

              <div>
                <label class="block text-sm text-gray-700 mb-1">Unit:</label>
                <input 
                  v-model="material.unit"
                  type="text"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="cái, kg, m..."
                >
              </div>

              <div class="col-span-2">
                <p class="text-sm text-gray-600">Current stock: {{ material.stock }} {{ material.unit }} 
                  <span class="text-green-600">Available</span>
                </p>
                <p class="text-sm text-gray-600">Estimated cost: {{ material.cost.toLocaleString() }} VNĐ</p>
              </div>

              <div class="col-span-2">
                <label class="block text-sm text-gray-700 mb-1">
                  Reason: <span class="text-red-500">*</span>
                </label>
                <input 
                  v-model="material.reason"
                  type="text"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="Why do you need this material?"
                >
              </div>
            </div>
          </div>

          <button type="button" @click="addMaterial" class="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-sm">
            + Add another material
          </button>
        </div>

        <!-- Total Cost -->
        <div class="bg-gray-50 rounded p-4">
          <p class="text-lg font-semibold text-gray-800">
            Total estimated cost: {{ totalCost.toLocaleString() }} VNĐ
          </p>
        </div>

        <!-- Additional Notes -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Additional notes (optional):
          </label>
          <textarea 
            v-model="formData.notes"
            rows="3"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
          ></textarea>
        </div>

        <!-- Priority -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Priority:</label>
          <div class="space-y-2">
            <label class="flex items-center gap-2">
              <input type="radio" v-model="formData.priority" value="low" class="w-4 h-4">
              <span class="text-gray-700">Low (can wait)</span>
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" v-model="formData.priority" value="medium" class="w-4 h-4">
              <span class="text-gray-700">Medium (needed soon)</span>
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" v-model="formData.priority" value="high" class="w-4 h-4">
              <span class="text-gray-700">High (urgent - blocking work)</span>
            </label>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex justify-end gap-3 pt-4 border-t border-gray-200">
          <button type="button" class="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
            Cancel
          </button>
          <button type="submit" class="px-6 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">
            Submit Request
          </button>
        </div>
      </form>
    </div>

    <!-- Material Request History -->
    <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">LỊCH SỬ YÊU CẦU VẬT TƯ</h2>
      
      <div class="flex gap-2 mb-4">
        <button class="px-3 py-1 bg-cyan-50 text-cyan-700 rounded text-sm">All</button>
        <button class="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50">Pending</button>
        <button class="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50">Approved</button>
        <button class="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50">Rejected</button>
      </div>

      <div class="space-y-4">
        <div v-for="request in requests" :key="request.id" class="border border-gray-200 rounded-lg p-4">
          <div class="flex items-start justify-between mb-2">
            <div>
              <p class="text-sm text-gray-600">{{ request.date }} - {{ request.time }}</p>
              <p class="font-medium text-gray-800">For: {{ request.project }} - {{ request.category }}</p>
            </div>
            <span :class="['px-3 py-1 rounded text-sm', getStatusClass(request.status)]">
              {{ request.statusText }}
            </span>
          </div>
          
          <div class="mt-3">
            <p class="text-sm font-medium text-gray-700 mb-1">Materials:</p>
            <ul class="text-sm text-gray-600 space-y-1 ml-4">
              <li v-for="material in request.materials" :key="material">• {{ material }}</li>
            </ul>
            <p class="text-sm text-gray-600 mt-2">Total: {{ request.total.toLocaleString() }} VNĐ</p>
          </div>

          <div v-if="request.note" class="mt-2 p-2 bg-gray-50 rounded text-sm text-gray-700">
            <span class="font-medium">Note from PM:</span> {{ request.note }}
          </div>

          <div class="flex gap-2 mt-3">
            <button class="px-3 py-1 bg-white border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">View details</button>
            <button v-if="request.status === 'pending'" class="px-3 py-1 text-red-600 text-sm hover:text-red-700">Cancel request</button>
            <button v-if="request.status === 'approved'" class="px-3 py-1 text-green-600 text-sm hover:text-green-700">Mark as received</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MaterialRequest',
  data() {
    return {
      formData: {
        project: '',
        category: '',
        notes: '',
        priority: 'medium'
      },
      materials: [
        { name: 'Ốc vít M6', quantity: 50, unit: 'cái', stock: 100, cost: 25000, reason: 'Cần bổ sung cho lắp đặt ổ cắm phòng bếp' }
      ],
      requests: [
        {
          id: 24,
          date: '26/12/2024',
          time: '11:45 AM',
          project: 'Vinhomes A1',
          category: 'Điện',
          materials: ['Ốc vít M6 x 50', 'Keo silicon x 2kg'],
          total: 115000,
          status: 'pending',
          statusText: 'Pending PM approval'
        },
        {
          id: 23,
          date: '25/12/2024',
          time: '09:00 AM',
          project: 'Vinhomes A1',
          category: 'Điện',
          materials: ['Dây điện x100m', 'Ổ cắm x20'],
          total: 850000,
          status: 'approved',
          statusText: 'Approved',
          note: 'Đã duyệt. Nhận tại kho trước 5PM.'
        },
        {
          id: 22,
          date: '24/12/2024',
          time: '02:30 PM',
          project: 'Masteri B3',
          category: 'Nước',
          materials: ['Ống PVC x 20m'],
          total: 450000,
          status: 'rejected',
          statusText: 'Rejected',
          note: 'Vật tư chưa cần thiết. Chờ sau.'
        }
      ]
    }
  },
  computed: {
    totalCost() {
      return this.materials.reduce((sum, m) => sum + m.cost, 0)
    }
  },
  methods: {
    addMaterial() {
      this.materials.push({
        name: '',
        quantity: 0,
        unit: 'cái',
        stock: 0,
        cost: 0,
        reason: ''
      })
    },
    removeMaterial(index) {
      this.materials.splice(index, 1)
    },
    submitRequest() {
      alert('Material request submitted!')
    },
    getStatusClass(status) {
      const classes = {
        'pending': 'bg-yellow-100 text-yellow-700',
        'approved': 'bg-green-100 text-green-700',
        'rejected': 'bg-red-100 text-red-700'
      }
      return classes[status] || 'bg-gray-100 text-gray-700'
    }
  }
}
</script>
