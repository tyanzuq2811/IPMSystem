<template>
  <div class="space-y-6">
    <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">MESSAGES</h1>

      <div class="grid grid-cols-3 gap-6">
        <!-- Conversations List -->
        <div class="col-span-1 border-r border-gray-200 pr-4">
          <h2 class="font-semibold text-gray-700 mb-4">Conversations:</h2>
          
          <div class="space-y-2">
            <div 
              v-for="conversation in conversations" 
              :key="conversation.id"
              @click="activeConversation = conversation.id"
              :class="['p-3 rounded-lg cursor-pointer border transition-colors', activeConversation === conversation.id ? 'bg-cyan-50 border-cyan-600' : 'bg-white border-gray-200 hover:bg-gray-50']"
            >
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                <div class="flex-1 min-w-0">
                  <p class="font-medium text-gray-800 truncate">{{ conversation.name }}</p>
                  <p class="text-sm text-gray-600 truncate">{{ conversation.role }}</p>
                  <p class="text-xs text-gray-500 truncate mt-1">{{ conversation.lastMessage }}</p>
                  <div class="flex items-center justify-between mt-1">
                    <span class="text-xs text-gray-400">{{ conversation.time }}</span>
                    <span v-if="conversation.unread" class="w-2 h-2 bg-cyan-600 rounded-full"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Chat Area -->
        <div class="col-span-2">
          <div v-if="activeConversation">
            <div class="border-b border-gray-200 pb-4 mb-4">
              <h2 class="text-lg font-semibold text-gray-800">Chat with: {{ getCurrentConversation().name }}</h2>
              <p class="text-sm text-gray-600">{{ getCurrentConversation().role }} - {{ getCurrentConversation().project }}</p>
            </div>

            <!-- Messages -->
            <div class="h-96 overflow-y-auto mb-4 space-y-4">
              <div v-for="message in messages" :key="message.id" :class="['flex', message.fromMe ? 'justify-end' : 'justify-start']">
                <div :class="['max-w-md', message.fromMe ? 'text-right' : 'text-left']">
                  <div :class="['inline-block p-3 rounded-lg', message.fromMe ? 'bg-cyan-600 text-white' : 'bg-gray-100 text-gray-800']">
                    <p>{{ message.text }}</p>
                  </div>
                  <p class="text-xs text-gray-500 mt-1">{{ message.time }}</p>
                </div>
              </div>
            </div>

            <!-- Input -->
            <div class="flex gap-2">
              <input 
                v-model="newMessage"
                type="text" 
                placeholder="Type message..."
                @keyup.enter="sendMessage"
                class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              >
              <button @click="sendMessage" class="px-6 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">
                Send
              </button>
            </div>
          </div>

          <div v-else class="flex items-center justify-center h-96 text-gray-500">
            Select a conversation to start chatting
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data() {
    return {
      activeConversation: 1,
      newMessage: '',
      conversations: [
        {
          id: 1,
          name: 'Nguyễn Văn A',
          role: 'PM',
          project: 'Vinhomes A1',
          lastMessage: 'Ok em, anh xem rồi, làm tốt lắm...',
          time: '2h ago',
          unread: true
        },
        {
          id: 2,
          name: 'Trần Thị B',
          role: 'PM',
          project: 'Masteri B3',
          lastMessage: 'Em cần cập nhật tiến độ nhanh hơn...',
          time: '1 day ago',
          unread: false
        }
      ],
      messages: [
        { id: 1, text: 'Anh ơi, em đã cập nhật tiến độ điện 90% rồi ạ', fromMe: true, time: '10:30 AM' },
        { id: 2, text: 'Em có chụp ảnh tiến độ chưa?', fromMe: false, time: '10:35 AM' },
        { id: 3, text: 'Dạ có ạ, em đã upload 3 ảnh rồi', fromMe: true, time: '10:40 AM' },
        { id: 4, text: 'Ok em, anh xem rồi, làm tốt lắm. Tiếp tục như vậy nhé!', fromMe: false, time: '11:00 AM' },
        { id: 5, text: 'Dạ vâng anh, em cảm ơn anh', fromMe: true, time: '11:05 AM' }
      ]
    }
  },
  methods: {
    getCurrentConversation() {
      return this.conversations.find(c => c.id === this.activeConversation) || {}
    },
    sendMessage() {
      if (this.newMessage.trim()) {
        this.messages.push({
          id: this.messages.length + 1,
          text: this.newMessage,
          fromMe: true,
          time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        })
        this.newMessage = ''
      }
    }
  }
}
</script>
