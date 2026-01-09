<template>
  <div class="space-y-6">
    <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">HỒ SƠ CỦA TÔI</h1>

      <div class="max-w-2xl">
        <!-- Avatar Section -->
        <div class="flex items-center gap-6 mb-8">
          <div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <span class="text-4xl text-gray-400">LC</span>
          </div>
          <div>
            <button class="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 text-sm">
              Change photo
            </button>
            <p class="text-xs text-gray-500 mt-2">JPG, PNG. Max 2MB</p>
          </div>
        </div>

        <!-- Profile Information -->
        <div class="space-y-4 mb-8">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Full name:</label>
            <input 
              type="text" 
              value="Lê Văn C"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email:</label>
            <input 
              type="email" 
              value="levanc@email.com"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Phone:</label>
            <input 
              type="tel" 
              value="0907654321"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            >
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Role:</label>
              <input 
                type="text" 
                value="Foreman"
                disabled
                class="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Joined:</label>
              <input 
                type="text" 
                value="10/05/2020"
                disabled
                class="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
              >
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Expertise:</label>
            <input 
              type="text" 
              value="Điện, Nước"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Experience:</label>
            <input 
              type="text" 
              value="8 years"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            >
          </div>
        </div>

        <!-- Stats -->
        <div class="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 class="font-semibold text-gray-800 mb-4">Stats:</h2>
          <div class="grid grid-cols-3 gap-4 text-center">
            <div>
              <p class="text-3xl font-bold text-cyan-600">3</p>
              <p class="text-sm text-gray-600 mt-1">Current projects</p>
            </div>
            <div>
              <p class="text-3xl font-bold text-green-600">45</p>
              <p class="text-sm text-gray-600 mt-1">Completed projects</p>
            </div>
            <div>
              <p class="text-3xl font-bold text-yellow-600">4.8/5</p>
              <p class="text-sm text-gray-600 mt-1">Rating</p>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex gap-3">
          <button class="px-6 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">
            Save changes
          </button>
          <button class="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
            Change password
          </button>
          <button class="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
            Notification settings
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForemanProfile'
}
</script>
