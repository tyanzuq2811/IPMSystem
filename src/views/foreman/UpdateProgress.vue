<template>
  <div class="space-y-6">
    <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="text-2xl font-bold text-gray-800">CẬP NHẬT TIẾN ĐỘ</h1>
          <p class="text-gray-600 mt-1">Project: {{ project.name }}</p>
          <p class="text-sm text-gray-500">Current overall progress: {{ project.currentProgress }}%</p>
        </div>
        <button @click="$router.back()" class="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
          Back
        </button>
      </div>

      <form @click.prevent="submitUpdate" class="space-y-6">
        <!-- Category Selection -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Select category to update: <span class="text-red-500">*</span>
          </label>
          <select v-model="formData.category" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500">
            <option value="">-- Select category --</option>
            <option value="electric">Điện</option>
            <option value="water">Nước</option>
            <option value="wood">Gỗ</option>
            <option value="paint">Sơn</option>
            <option value="ceiling">Trần</option>
          </select>
        </div>

        <!-- Progress Slider -->
        <div v-if="formData.category">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Current progress: {{ getCurrentProgress() }}%
          </label>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            New progress: {{ formData.newProgress }}%
          </label>
          <input 
            v-model="formData.newProgress" 
            type="range" 
            min="0" 
            max="100" 
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          >
        </div>

        <!-- Description -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Describe what you completed:
          </label>
          <textarea 
            v-model="formData.description"
            rows="4"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            placeholder="Describe tasks completed today..."
          ></textarea>
        </div>

        <!-- Tasks Completed -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Tasks completed (check what's done):
          </label>
          <div class="space-y-2 ml-2">
            <div v-for="task in tasks" :key="task.id" class="flex items-center gap-2">
              <input 
                type="checkbox" 
                :id="'task-' + task.id"
                v-model="task.completed"
                class="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
              >
              <label :for="'task-' + task.id" class="text-gray-700">{{ task.name }}</label>
            </div>
          </div>
        </div>

        <!-- Upload Photos -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Upload progress photos:
          </label>
          <div class="border-2 border-dashed border-gray-300 rounded-lg p-6">
            <div class="text-center">
              <p class="text-gray-600 mb-4">Drag & drop photos here or click to browse</p>
              <input type="file" multiple accept="image/*" class="hidden" id="photo-upload">
              <label for="photo-upload" class="px-4 py-2 bg-cyan-600 text-white rounded cursor-pointer hover:bg-cyan-700">
                Choose Files
              </label>
            </div>
            
            <div class="grid grid-cols-4 gap-4 mt-4">
              <div v-for="n in 3" :key="n" class="aspect-square bg-gray-200 rounded flex items-center justify-center text-gray-400">
                IMG{{ n }}
              </div>
              <div class="aspect-square border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-gray-400 cursor-pointer hover:border-cyan-500">
                + Add
              </div>
            </div>

            <div class="mt-4 text-sm text-gray-600">
              <p class="font-medium mb-1">Tips: Take clear photos showing:</p>
              <ul class="list-disc list-inside space-y-1 ml-2">
                <li>Overall view of completed work</li>
                <li>Close-up of important details</li>
                <li>Any issues or concerns</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Materials Used -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Materials used today (optional):
          </label>
          <button type="button" class="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-sm mb-2">
            + Add material
          </button>
          <div class="space-y-2 ml-4">
            <p class="text-gray-700">• Ốc vít M6 x 30 cái</p>
            <p class="text-gray-700">• Dây điện x 10m</p>
          </div>
        </div>

        <!-- Issues -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Issues or concerns (if any):
          </label>
          <textarea 
            v-model="formData.issues"
            rows="3"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            placeholder="Report any problems..."
          ></textarea>
        </div>

        <!-- Actions -->
        <div class="flex justify-end gap-3 pt-4 border-t border-gray-200">
          <button type="button" @click="$router.back()" class="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
            Cancel
          </button>
          <button type="submit" class="px-6 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">
            Submit Update
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpdateProgress',
  data() {
    return {
      project: {
        id: this.$route.params.id,
        name: 'Vinhomes Landmark A1',
        currentProgress: 85
      },
      formData: {
        category: '',
        newProgress: 85,
        description: '',
        issues: ''
      },
      tasks: [
        { id: 1, name: 'Đi dây điện âm tường', completed: true },
        { id: 2, name: 'Lắp đặt tủ điện', completed: true },
        { id: 3, name: 'Lắp ổ cắm, công tắc', completed: true },
        { id: 4, name: 'Lắp đèn chiếu sáng', completed: false },
        { id: 5, name: 'Kiểm tra an toàn', completed: false }
      ]
    }
  },
  methods: {
    getCurrentProgress() {
      const progress = {
        'electric': 85,
        'water': 95,
        'wood': 70,
        'paint': 60,
        'ceiling': 50
      }
      return progress[this.formData.category] || 0
    },
    submitUpdate() {
      alert('Progress updated successfully!')
      this.$router.back()
    }
  }
}
</script>
