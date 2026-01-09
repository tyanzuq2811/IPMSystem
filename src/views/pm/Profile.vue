<template>
  <div class="space-y-6">
    <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">PROFILE & SETTINGS</h1>

      <!-- Tabs -->
      <div class="border-b border-gray-200 mb-6">
        <div class="flex gap-6">
          <button :class="['pb-3 px-1 border-b-2 font-medium text-sm', activeTab === 'profile' ? 'border-cyan-600 text-cyan-600' : 'border-transparent text-gray-600']" @click="activeTab = 'profile'">
            Profile
          </button>
          <button :class="['pb-3 px-1 border-b-2 font-medium text-sm', activeTab === 'account' ? 'border-cyan-600 text-cyan-600' : 'border-transparent text-gray-600']" @click="activeTab = 'account'">
            Account
          </button>
          <button :class="['pb-3 px-1 border-b-2 font-medium text-sm', activeTab === 'notifications' ? 'border-cyan-600 text-cyan-600' : 'border-transparent text-gray-600']" @click="activeTab = 'notifications'">
            Notifications
          </button>
          <button :class="['pb-3 px-1 border-b-2 font-medium text-sm', activeTab === 'preferences' ? 'border-cyan-600 text-cyan-600' : 'border-transparent text-gray-600']" @click="activeTab = 'preferences'">
            Preferences
          </button>
        </div>
      </div>

      <!-- Profile Tab -->
      <div v-if="activeTab === 'profile'" class="space-y-6">
        <div class="border border-gray-200 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Account Information</h3>
          
          <div class="flex items-center gap-6 mb-6">
            <div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-4xl">
            </div>
            <button class="px-4 py-2 bg-cyan-600 text-white text-sm rounded hover:bg-cyan-700">Change photo</button>
          </div>

          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Full name:</label>
              <input v-model="profile.name" type="text" class="w-full px-4 py-2 border border-gray-300 rounded-md">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email:</label>
              <input v-model="profile.email" type="email" class="w-full px-4 py-2 border border-gray-300 rounded-md">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Phone:</label>
              <input v-model="profile.phone" type="tel" class="w-full px-4 py-2 border border-gray-300 rounded-md">
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Role:</label>
                <input value="Project Manager" type="text" disabled class="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Joined:</label>
                <input value="15/01/2022" type="text" disabled class="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100">
              </div>
            </div>

            <button class="px-6 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">Save changes</button>
          </div>
        </div>
      </div>

      <!-- Account Tab -->
      <div v-if="activeTab === 'account'" class="space-y-6">
        <div class="border border-gray-200 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Change Password</h3>
          
          <div class="space-y-4 max-w-md">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Current password:</label>
              <input v-model="password.current" type="password" class="w-full px-4 py-2 border border-gray-300 rounded-md">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">New password:</label>
              <input v-model="password.new" type="password" class="w-full px-4 py-2 border border-gray-300 rounded-md">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Confirm password:</label>
              <input v-model="password.confirm" type="password" class="w-full px-4 py-2 border border-gray-300 rounded-md">
            </div>

            <button class="px-6 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">Update password</button>
          </div>
        </div>

        <div class="border border-red-200 bg-red-50 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-red-800 mb-2">Danger Zone</h3>
          <p class="text-sm text-gray-600 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
          <button class="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700">Delete account</button>
        </div>
      </div>

      <!-- Notifications Tab -->
      <div v-if="activeTab === 'notifications'" class="space-y-6">
        <div class="border border-gray-200 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Email Notifications</h3>
          
          <div class="space-y-3">
            <label class="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div>
                <p class="font-medium text-gray-800">Progress updates</p>
                <p class="text-sm text-gray-600">Get notified when foreman updates project progress</p>
              </div>
              <input type="checkbox" v-model="notifications.email.progress" class="w-5 h-5">
            </label>

            <label class="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div>
                <p class="font-medium text-gray-800">Material requests</p>
                <p class="text-sm text-gray-600">Get notified when materials are requested</p>
              </div>
              <input type="checkbox" v-model="notifications.email.materials" class="w-5 h-5">
            </label>

            <label class="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div>
                <p class="font-medium text-gray-800">Budget alerts</p>
                <p class="text-sm text-gray-600">Get notified when budget exceeds threshold</p>
              </div>
              <input type="checkbox" v-model="notifications.email.budget" class="w-5 h-5">
            </label>

            <label class="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div>
                <p class="font-medium text-gray-800">Client messages</p>
                <p class="text-sm text-gray-600">Get notified when clients send messages</p>
              </div>
              <input type="checkbox" v-model="notifications.email.messages" class="w-5 h-5">
            </label>
          </div>
        </div>

        <div class="border border-gray-200 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Push Notifications</h3>
          
          <div class="space-y-3">
            <label class="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div>
                <p class="font-medium text-gray-800">Enable browser notifications</p>
                <p class="text-sm text-gray-600">Receive real-time notifications in your browser</p>
              </div>
              <input type="checkbox" v-model="notifications.push.enabled" class="w-5 h-5">
            </label>
          </div>
        </div>

        <button class="px-6 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">Save preferences</button>
      </div>

      <!-- Preferences Tab -->
      <div v-if="activeTab === 'preferences'" class="space-y-6">
        <div class="border border-gray-200 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Display Preferences</h3>
          
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Language:</label>
              <select v-model="preferences.language" class="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md">
                <option value="vi">Tiếng Việt</option>
                <option value="en">English</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Timezone:</label>
              <select v-model="preferences.timezone" class="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md">
                <option value="Asia/Ho_Chi_Minh">Asia/Ho Chi Minh (GMT+7)</option>
                <option value="Asia/Bangkok">Asia/Bangkok (GMT+7)</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Date format:</label>
              <select v-model="preferences.dateFormat" class="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md">
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>

            <button class="px-6 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">Save preferences</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PMProfile',
  data() {
    return {
      activeTab: 'profile',
      profile: {
        name: 'Nguyễn Văn A',
        email: 'nguyenvana@email.com',
        phone: '0901234567'
      },
      password: {
        current: '',
        new: '',
        confirm: ''
      },
      notifications: {
        email: {
          progress: true,
          materials: true,
          budget: true,
          messages: true
        },
        push: {
          enabled: true
        }
      },
      preferences: {
        language: 'vi',
        timezone: 'Asia/Ho_Chi_Minh',
        dateFormat: 'DD/MM/YYYY'
      }
    }
  }
}
</script>
