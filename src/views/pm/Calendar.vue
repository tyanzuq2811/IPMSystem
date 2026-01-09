<template>
  <div class="space-y-6">
    <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800">LỊCH LÀM VIỆC</h1>
        <div class="flex gap-3">
          <button class="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50">◀ Dec 2024 ▶</button>
          <div class="flex gap-1 border border-gray-300 rounded overflow-hidden">
            <button class="px-4 py-2 text-sm bg-cyan-600 text-white">Month</button>
            <button class="px-4 py-2 text-sm hover:bg-gray-50">Week</button>
            <button class="px-4 py-2 text-sm hover:bg-gray-50">Day</button>
          </div>
        </div>
      </div>

      <!-- Calendar Grid -->
      <div class="border border-gray-200 rounded-lg overflow-hidden">
        <table class="w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="py-3 px-2 text-xs font-medium text-gray-700 text-center">Sun</th>
              <th class="py-3 px-2 text-xs font-medium text-gray-700 text-center">Mon</th>
              <th class="py-3 px-2 text-xs font-medium text-gray-700 text-center">Tue</th>
              <th class="py-3 px-2 text-xs font-medium text-gray-700 text-center">Wed</th>
              <th class="py-3 px-2 text-xs font-medium text-gray-700 text-center">Thu</th>
              <th class="py-3 px-2 text-xs font-medium text-gray-700 text-center">Fri</th>
              <th class="py-3 px-2 text-xs font-medium text-gray-700 text-center">Sat</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr class="divide-x divide-gray-200">
              <td v-for="day in 7" :key="day" class="h-24 p-2 align-top bg-gray-50">
                <div class="text-xs text-gray-400">{{ 24 + day - 1 }}</div>
              </td>
            </tr>
            <tr class="divide-x divide-gray-200">
              <td class="h-24 p-2 align-top">
                <div class="text-xs font-medium mb-1">31</div>
                <div class="text-xs bg-red-100 text-red-600 p-1 rounded mb-1">Deadline: Vinhomes A1</div>
              </td>
              <td class="h-24 p-2 align-top">
                <div class="text-xs font-medium mb-1">1</div>
                <div class="text-xs bg-blue-100 text-blue-600 p-1 rounded mb-1">Progress review</div>
              </td>
              <td class="h-24 p-2 align-top">
                <div class="text-xs font-medium mb-1">2</div>
                <div class="text-xs bg-cyan-100 text-cyan-600 p-1 rounded mb-1">Team meeting</div>
              </td>
              <td class="h-24 p-2 align-top">
                <div class="text-xs font-medium mb-1">3</div>
                <div class="text-xs bg-orange-100 text-orange-600 p-1 rounded mb-1">Material delivery</div>
              </td>
              <td class="h-24 p-2 align-top">
                <div class="text-xs font-medium mb-1">4</div>
              </td>
              <td class="h-24 p-2 align-top">
                <div class="text-xs font-medium mb-1">5</div>
              </td>
              <td class="h-24 p-2 align-top bg-gray-50">
                <div class="text-xs font-medium mb-1 text-gray-400">6</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Upcoming Events -->
    <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-bold text-gray-800">Upcoming events (Next 7 days)</h2>
        <button class="px-4 py-2 bg-cyan-600 text-white text-sm rounded hover:bg-cyan-700">+ Add event</button>
      </div>

      <div class="space-y-3">
        <div class="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
          <div class="text-center">
            <div class="text-xs text-gray-500">Dec</div>
            <div class="text-xl font-bold text-gray-800">27</div>
          </div>
          <div class="flex-1">
            <p class="font-medium text-gray-800">Site visit: Vinhomes A1</p>
            <p class="text-sm text-gray-600">9:00 AM - On site</p>
          </div>
        </div>

        <div class="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
          <div class="text-center">
            <div class="text-xs text-gray-500">Dec</div>
            <div class="text-xl font-bold text-gray-800">27</div>
          </div>
          <div class="flex-1">
            <p class="font-medium text-gray-800">Client meeting</p>
            <p class="text-sm text-gray-600">2:00 PM - Office</p>
          </div>
        </div>

        <div class="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
          <div class="text-center">
            <div class="text-xs text-gray-500">Dec</div>
            <div class="text-xl font-bold text-gray-800">30</div>
          </div>
          <div class="flex-1">
            <p class="font-medium text-gray-800">Deadline: Vinhomes A1 Phase 1</p>
            <p class="text-sm text-red-600">All day - Important</p>
          </div>
        </div>

        <div class="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
          <div class="text-center">
            <div class="text-xs text-gray-500">Jan</div>
            <div class="text-xl font-bold text-gray-800">02</div>
          </div>
          <div class="flex-1">
            <p class="font-medium text-gray-800">Progress review</p>
            <p class="text-sm text-gray-600">All day - All projects</p>
          </div>
        </div>
      </div>

      <button class="w-full mt-4 text-sm text-cyan-600 hover:text-cyan-700 font-medium">
        Sync with Google Calendar →
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PMCalendar'
}
</script>
