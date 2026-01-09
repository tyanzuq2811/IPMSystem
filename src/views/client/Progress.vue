<template>
  <div class="space-y-6">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">TIẾN ĐỘ THI CÔNG</h2>
      
      <h3 class="text-lg font-semibold text-gray-700 mb-4">{{ project.name }}</h3>
      
      <div class="mb-4">
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm font-medium text-gray-700">Tiến độ tổng thể:</span>
          <span class="text-lg font-bold text-cyan-600">{{ project.progress }}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div 
            class="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
            :style="{ width: project.progress + '%' }"
          ></div>
        </div>
      </div>

      <div class="flex gap-4">
        <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500">
          <option>All categories</option>
          <option>Điện</option>
          <option>Nước</option>
          <option>Gỗ</option>
          <option>Sơn</option>
        </select>
        <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500">
          <option>Last 30 days</option>
          <option>Last 7 days</option>
          <option>All time</option>
        </select>
      </div>
    </div>

    <!-- Categories Progress -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-6">THEO HẠNG MỤC</h2>
      
      <div class="space-y-6">
        <div 
          v-for="category in categories" 
          :key="category.id"
          class="border-b border-gray-200 pb-6 last:border-0"
        >
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-lg font-semibold text-gray-800">
              {{ category.icon }} {{ category.name }} - {{ category.progress }}%
            </h3>
            <span 
              class="px-3 py-1 rounded-full text-sm font-medium"
              :class="getStatusClass(category.status)"
            >
              {{ category.status }}
            </span>
          </div>

          <div class="w-full bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
            <div 
              class="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
              :style="{ width: category.progress + '%' }"
            ></div>
          </div>

          <div v-if="category.latestUpdate" class="space-y-3">
            <p class="text-sm text-gray-600">Latest update: {{ category.latestUpdate.time }}</p>
            <p class="text-gray-700 bg-gray-50 p-3 rounded-lg">
              "{{ category.latestUpdate.description }}"
            </p>

            <div v-if="category.latestUpdate.photos.length > 0">
              <p class="text-sm font-medium text-gray-700 mb-2">📷 Photos ({{ category.latestUpdate.photos.length }}):</p>
              <div class="flex gap-3">
                <div 
                  v-for="(photo, index) in category.latestUpdate.photos" 
                  :key="index"
                  @click="openPhotoGallery(category.id, index)"
                  class="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
                >
                  <div class="text-center">
                    <p class="text-gray-600 font-medium">{{ photo.name }}</p>
                    <p class="text-xs text-cyan-600 mt-1">[View]</p>
                  </div>
                </div>
              </div>
              <p class="text-xs text-gray-500 mt-2">Click to view in full screen</p>
            </div>

            <button class="text-cyan-600 hover:text-cyan-700 font-medium text-sm">
              View all updates for {{ category.name }} →
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Photo Gallery Modal -->
    <div 
      v-if="showGallery"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      @click="closeGallery"
    >
      <div 
        class="bg-white rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-800">PHOTO GALLERY</h3>
          <button 
            @click="closeGallery"
            class="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div class="space-y-4">
          <div class="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
            <p class="text-gray-600 text-lg">{{ currentPhoto.name }}</p>
          </div>

          <div class="flex items-center justify-between">
            <button 
              @click="previousPhoto"
              class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
            >
              ◀ Previous
            </button>
            <button 
              @click="nextPhoto"
              class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
            >
              Next ▶
            </button>
          </div>

          <div>
            <p class="text-sm text-gray-600 mb-2">Thumbnails:</p>
            <div class="flex gap-2 overflow-x-auto pb-2">
              <div 
                v-for="(photo, index) in galleryPhotos" 
                :key="index"
                @click="currentPhotoIndex = index"
                class="w-16 h-16 bg-gray-200 rounded flex items-center justify-center cursor-pointer hover:bg-gray-300 flex-shrink-0"
                :class="{ 'ring-2 ring-cyan-500': index === currentPhotoIndex }"
              >
                <p class="text-sm">{{ index + 1 }}</p>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-200 pt-4 space-y-2">
            <p class="text-sm text-gray-600">Uploaded: {{ currentPhoto.uploadDate }}</p>
            <p class="text-sm text-gray-600">By: {{ currentPhoto.uploadedBy }}</p>
            <p class="text-sm text-gray-600">Category: {{ currentPhoto.category }}</p>
          </div>

          <div class="flex gap-3">
            <button class="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg">
              Download
            </button>
            <button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
              Share
            </button>
            <button class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg">
              Report issue
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const project = ref({
  name: 'Vinhomes Landmark - Căn A1',
  progress: 85
})

const categories = ref([
  {
    id: 1,
    name: 'ĐIỆN',
    icon: '⚡',
    progress: 90,
    status: 'Đang thi công',
    latestUpdate: {
      time: '2 giờ trước',
      description: 'Đã hoàn thành lắp đặt ổ cắm và công tắc phòng khách. Hiện đang tiến hành lắp đặt đèn chiếu sáng.',
      photos: [
        { name: 'IMG1', uploadDate: '26/12/2024 - 10:30 AM', uploadedBy: 'Lê Văn C (Foreman)', category: '⚡ Điện' },
        { name: 'IMG2', uploadDate: '26/12/2024 - 10:32 AM', uploadedBy: 'Lê Văn C (Foreman)', category: '⚡ Điện' },
        { name: 'IMG3', uploadDate: '26/12/2024 - 10:35 AM', uploadedBy: 'Lê Văn C (Foreman)', category: '⚡ Điện' }
      ]
    }
  },
  {
    id: 2,
    name: 'NƯỚC',
    icon: '💧',
    progress: 95,
    status: 'Gần hoàn thành',
    latestUpdate: {
      time: '1 ngày trước',
      description: 'Đã hoàn thành test hệ thống nước. Tất cả hoạt động tốt.',
      photos: []
    }
  },
  {
    id: 3,
    name: 'GỖ',
    icon: '🪵',
    progress: 60,
    status: 'Đang thi công',
    latestUpdate: null
  },
  {
    id: 4,
    name: 'SƠN',
    icon: '🎨',
    progress: 45,
    status: 'Sắp bắt đầu giai đoạn 2',
    latestUpdate: null
  }
])

const showGallery = ref(false)
const currentPhotoIndex = ref(0)
const currentCategoryId = ref(null)

const galleryPhotos = computed(() => {
  const category = categories.value.find(c => c.id === currentCategoryId.value)
  return category?.latestUpdate?.photos || []
})

const currentPhoto = computed(() => {
  return galleryPhotos.value[currentPhotoIndex.value] || {}
})

const openPhotoGallery = (categoryId, photoIndex) => {
  currentCategoryId.value = categoryId
  currentPhotoIndex.value = photoIndex
  showGallery.value = true
}

const closeGallery = () => {
  showGallery.value = false
}

const previousPhoto = () => {
  if (currentPhotoIndex.value > 0) {
    currentPhotoIndex.value--
  }
}

const nextPhoto = () => {
  if (currentPhotoIndex.value < galleryPhotos.value.length - 1) {
    currentPhotoIndex.value++
  }
}

const getStatusClass = (status) => {
  if (status.includes('Gần hoàn thành')) return 'bg-green-100 text-green-700'
  if (status.includes('Đang thi công')) return 'bg-blue-100 text-blue-700'
  return 'bg-yellow-100 text-yellow-700'
}
</script>
