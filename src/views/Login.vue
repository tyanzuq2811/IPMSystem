<template>
  <div class="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100 flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <!-- Logo & Title -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg mb-4">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-gray-800 mb-2">IPM System</h1>
        <p class="text-gray-600">Interior Project Management</p>
      </div>

      <!-- Login Form -->
      <div class="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Đăng nhập</h2>

        <!-- Error Message -->
        <div v-if="errorMessage" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
          {{ errorMessage }}
        </div>

        <form @submit.prevent="handleLogin">
          <!-- Email -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              v-model="email"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="example@email.com"
            />
          </div>

          <!-- Password -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">Mật khẩu</label>
            <input 
              type="password" 
              v-model="password"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          <!-- Remember Me -->
          <div class="flex items-center justify-between mb-6">
            <label class="flex items-center">
              <input type="checkbox" v-model="rememberMe" class="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500">
              <span class="ml-2 text-sm text-gray-600">Ghi nhớ đăng nhập</span>
            </label>
            <a href="#" class="text-sm text-cyan-600 hover:text-cyan-700">Quên mật khẩu?</a>
          </div>

          <!-- Submit Button -->
          <button 
            type="submit"
            :disabled="isLoading"
            class="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-md font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="!isLoading">Đăng nhập</span>
            <span v-else class="flex items-center justify-center">
              <svg class="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Đang đăng nhập...
            </span>
          </button>
        </form>

        <!-- Demo Accounts -->
        <div class="mt-8 pt-6 border-t border-gray-200">
          <p class="text-sm text-gray-600 mb-3 font-medium">Tài khoản demo:</p>
          <div class="space-y-2">
            <button 
              @click="fillDemoAccount('admin')"
              class="w-full px-4 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-300 rounded-md text-sm text-left transition-colors"
            >
              <div class="flex items-center justify-between">
                <div>
                  <span class="font-medium text-gray-800">Admin</span>
                  <span class="text-gray-500 ml-2">admin@ipm.com</span>
                </div>
                <span class="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Quản trị viên</span>
              </div>
            </button>
            <button 
              @click="fillDemoAccount('pm')"
              class="w-full px-4 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-300 rounded-md text-sm text-left transition-colors"
            >
              <div class="flex items-center justify-between">
                <div>
                  <span class="font-medium text-gray-800">PM</span>
                  <span class="text-gray-500 ml-2">pm@ipm.com</span>
                </div>
                <span class="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded">Project Manager</span>
              </div>
            </button>
            <button 
              @click="fillDemoAccount('foreman')"
              class="w-full px-4 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-300 rounded-md text-sm text-left transition-colors"
            >
              <div class="flex items-center justify-between">
                <div>
                  <span class="font-medium text-gray-800">Foreman</span>
                  <span class="text-gray-500 ml-2">foreman@ipm.com</span>
                </div>
                <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Foreman</span>
              </div>
            </button>
            <button 
              @click="fillDemoAccount('client')"
              class="w-full px-4 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-300 rounded-md text-sm text-left transition-colors"
            >
              <div class="flex items-center justify-between">
                <div>
                  <span class="font-medium text-gray-800">Client</span>
                  <span class="text-gray-500 ml-2">client@ipm.com</span>
                </div>
                <span class="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Client</span>
              </div>
            </button>
          </div>
          <p class="text-xs text-gray-500 mt-3 text-center">Mật khẩu: <code class="bg-gray-100 px-2 py-0.5 rounded">123456</code></p>
        </div>
      </div>

      <!-- Footer -->
      <p class="text-center text-gray-600 text-sm mt-6">
        © 2024 IPM System. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      isLoading: false,
      errorMessage: ''
    }
  },
  mounted() {
    // Check if already logged in
    const user = localStorage.getItem('ipm_user')
    if (user) {
      const userData = JSON.parse(user)
      if (userData.role === 'admin') {
        this.$router.push('/admin/dashboard')
      } else if (userData.role === 'pm') {
        this.$router.push('/pm/dashboard')
      }
    }
  },
  methods: {
    fillDemoAccount(type) {
      if (type === 'admin') {
        this.email = 'admin@ipm.com'
        this.password = '123456'
      } else if (type === 'pm') {
        this.email = 'pm@ipm.com'
        this.password = '123456'
      } else if (type === 'foreman') {
        this.email = 'foreman@ipm.com'
        this.password = '123456'
      } else if (type === 'client') {
        this.email = 'client@ipm.com'
        this.password = '123456'
      }
    },
    
    async handleLogin() {
      this.errorMessage = ''
      this.isLoading = true

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800))

      // Mock users database
      const users = [
        {
          id: 1,
          email: 'admin@ipm.com',
          password: '123456',
          role: 'admin',
          name: 'Admin User',
          avatar: null
        },
        {
          id: 2,
          email: 'pm@ipm.com',
          password: '123456',
          role: 'pm',
          name: 'Nguyễn Văn A',
          phone: '0901234567',
          avatar: null
        },
        {
          id: 3,
          email: 'foreman@ipm.com',
          password: '123456',
          role: 'foreman',
          name: 'Lê Văn C',
          phone: '0907654321',
          avatar: null
        },
        {
          id: 4,
          email: 'client@ipm.com',
          password: '123456',
          role: 'client',
          name: 'Trần Thị X',
          phone: '0908765432',
          avatar: null
        }
      ]

      // Find user
      const user = users.find(u => u.email === this.email && u.password === this.password)

      if (user) {
        // Store user data (excluding password)
        const { password, ...userData } = user
        
        if (this.rememberMe) {
          localStorage.setItem('ipm_user', JSON.stringify(userData))
        } else {
          sessionStorage.setItem('ipm_user', JSON.stringify(userData))
        }

        // Success message
        this.errorMessage = ''
        
        // Redirect based on role
        if (user.role === 'admin') {
          this.$router.push('/admin/dashboard')
        } else if (user.role === 'pm') {
          this.$router.push('/pm/dashboard')
        } else if (user.role === 'foreman') {
          this.$router.push('/foreman/dashboard')
        } else if (user.role === 'client') {
          this.$router.push('/client/dashboard')
        }
      } else {
        this.errorMessage = 'Email hoặc mật khẩu không đúng!'
      }

      this.isLoading = false
    }
  }
}
</script>
