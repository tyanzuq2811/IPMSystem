<template>
  <div class="space-y-6">
    <!-- Messages -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">TIN NHẮN</h2>
      
      <p class="text-sm text-gray-600 mb-4">Chat with: <span class="font-semibold text-gray-800">{{ activePM }}</span></p>
      
      <div class="border border-gray-200 rounded-lg p-4 mb-4 space-y-4 max-h-96 overflow-y-auto">
        <div 
          v-for="message in messages" 
          :key="message.id"
          :class="message.isClient ? 'text-left' : 'text-right'"
        >
          <div 
            class="inline-block max-w-[70%] p-3 rounded-lg"
            :class="message.isClient ? 'bg-gray-100' : 'bg-cyan-100'"
          >
            <p class="text-sm font-medium text-gray-700 mb-1">
              {{ message.sender }} - {{ message.time }}
            </p>
            <p class="text-gray-800">{{ message.content }}</p>
          </div>
        </div>
      </div>

      <div class="flex gap-2">
        <input 
          v-model="newMessage"
          type="text" 
          placeholder="Type message..."
          class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          @keyup.enter="sendMessage"
        />
        <button 
          @click="sendMessage"
          class="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
        >
          🚀
        </button>
      </div>
    </div>

    <!-- Feedback Form -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">GỬI FEEDBACK</h2>
      
      <div class="space-y-4">
        <div>
          <p class="text-gray-700 mb-2">Bạn muốn đánh giá tiến độ thi công?</p>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Hạng mục:</label>
          <select 
            v-model="feedback.category"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Select</option>
            <option value="Điện">⚡ Điện</option>
            <option value="Nước">💧 Nước</option>
            <option value="Gỗ">🪵 Gỗ</option>
            <option value="Sơn">🎨 Sơn</option>
            <option value="Trần">⬜ Trần</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Rating:</label>
          <div class="flex gap-2">
            <button
              v-for="star in 5"
              :key="star"
              @click="feedback.rating = star"
              class="text-3xl transition-transform hover:scale-110"
              :class="star <= feedback.rating ? 'text-yellow-400' : 'text-gray-300'"
            >
              ⭐
            </button>
            <span class="ml-2 text-gray-600">(Click to rate)</span>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Your comment:</label>
          <textarea 
            v-model="feedback.comment"
            rows="4"
            placeholder="Share your thoughts..."
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>
        </div>

        <div class="flex gap-3 justify-end">
          <button 
            @click="resetFeedback"
            class="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            @click="submitFeedback"
            class="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>

    <!-- Previous Feedbacks -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">FEEDBACK ĐÃ GỬI</h2>
      
      <div class="space-y-4">
        <div 
          v-for="item in previousFeedbacks" 
          :key="item.id"
          class="border border-gray-200 rounded-lg p-4"
        >
          <div class="flex items-center justify-between mb-2">
            <span class="font-semibold text-gray-800">{{ item.category }}</span>
            <span class="text-sm text-gray-500">{{ item.date }}</span>
          </div>
          <div class="flex gap-1 mb-2">
            <span v-for="star in item.rating" :key="star" class="text-yellow-400">⭐</span>
          </div>
          <p class="text-gray-700 text-sm bg-gray-50 p-2 rounded">{{ item.comment }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activePM = ref('Nguyễn Văn A (Project Manager)')
const newMessage = ref('')

const messages = ref([
  {
    id: 1,
    sender: 'You',
    time: '1 ngày trước',
    content: 'Chào anh, chị rất hài lòng với tiến độ hiện tại. Khi nào hoàn thành phần điện thì báo chị nhé.',
    isClient: true
  },
  {
    id: 2,
    sender: 'Nguyễn Văn A',
    time: '1 day ago',
    content: 'Dạ, cảm ơn chị! Dự kiến 2 ngày nữa sẽ hoàn thành phần điện ạ.',
    isClient: false
  }
])

const feedback = ref({
  category: '',
  rating: 0,
  comment: ''
})

const previousFeedbacks = ref([
  {
    id: 1,
    category: '⚡ Điện',
    rating: 5,
    date: '25/12/2024',
    comment: 'Công việc rất chuyên nghiệp và cẩn thận. Rất hài lòng với chất lượng hoàn thiện.'
  },
  {
    id: 2,
    category: '💧 Nước',
    rating: 4,
    date: '20/12/2024',
    comment: 'Tốt, tuy nhiên có một số chi tiết cần điều chỉnh nhỏ.'
  }
])

const sendMessage = () => {
  if (!newMessage.value.trim()) return
  
  messages.value.push({
    id: messages.value.length + 1,
    sender: 'You',
    time: 'Just now',
    content: newMessage.value,
    isClient: true
  })
  
  newMessage.value = ''
  
  // Scroll to bottom
  setTimeout(() => {
    const messageContainer = document.querySelector('.max-h-96')
    if (messageContainer) {
      messageContainer.scrollTop = messageContainer.scrollHeight
    }
  }, 100)
}

const submitFeedback = () => {
  if (!feedback.value.category || !feedback.value.rating) {
    alert('Vui lòng chọn hạng mục và đánh giá!')
    return
  }
  
  previousFeedbacks.value.unshift({
    id: previousFeedbacks.value.length + 1,
    category: feedback.value.category,
    rating: feedback.value.rating,
    date: new Date().toLocaleDateString('vi-VN'),
    comment: feedback.value.comment || 'No comment'
  })
  
  resetFeedback()
  alert('Feedback đã được gửi thành công!')
}

const resetFeedback = () => {
  feedback.value = {
    category: '',
    rating: 0,
    comment: ''
  }
}
</script>
