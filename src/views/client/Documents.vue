<template>
  <div class="space-y-6">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-6">TÀI LIỆU DỰ ÁN</h2>
      
      <p class="text-gray-600 mb-6">Your project documents:</p>
      
      <div class="space-y-6">
        <!-- Contracts -->
        <div class="border-b border-gray-200 pb-6">
          <div class="flex items-center gap-2 mb-4">
            <span class="text-2xl">📁</span>
            <h3 class="text-lg font-semibold text-gray-800">Hợp đồng ({{ contracts.length }} files)</h3>
          </div>
          <div class="space-y-3 ml-8">
            <div 
              v-for="file in contracts" 
              :key="file.id"
              class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div class="flex-1">
                <p class="font-medium text-gray-800">• {{ file.name }}</p>
                <p class="text-sm text-gray-600">{{ file.info }}</p>
              </div>
              <div class="flex gap-2">
                <button class="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-white rounded">
                  Download
                </button>
                <button class="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Designs -->
        <div class="border-b border-gray-200 pb-6">
          <div class="flex items-center gap-2 mb-4">
            <span class="text-2xl">📁</span>
            <h3 class="text-lg font-semibold text-gray-800">Thiết kế ({{ designs.length }} files)</h3>
          </div>
          <div class="space-y-3 ml-8">
            <div 
              v-for="(file, index) in designs.slice(0, showAllDesigns ? designs.length : 3)" 
              :key="file.id"
              class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div class="flex-1">
                <p class="font-medium text-gray-800">• {{ file.name }}</p>
              </div>
              <div class="flex gap-2">
                <button class="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-white rounded">
                  Download
                </button>
                <button class="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded">
                  View
                </button>
              </div>
            </div>
            <button 
              v-if="!showAllDesigns && designs.length > 3"
              @click="showAllDesigns = true"
              class="text-cyan-600 hover:text-cyan-700 font-medium text-sm ml-3"
            >
              [View all]
            </button>
          </div>
        </div>

        <!-- Quotes -->
        <div class="border-b border-gray-200 pb-6">
          <div class="flex items-center gap-2 mb-4">
            <span class="text-2xl">📁</span>
            <h3 class="text-lg font-semibold text-gray-800">Báo giá ({{ quotes.length }} files)</h3>
          </div>
          <div class="space-y-3 ml-8">
            <div 
              v-for="file in quotes.slice(0, showAllQuotes ? quotes.length : 2)" 
              :key="file.id"
              class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div class="flex-1">
                <p class="font-medium text-gray-800">• {{ file.name }}</p>
              </div>
              <div class="flex gap-2">
                <button class="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-white rounded">
                  Download
                </button>
                <button class="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded">
                  View
                </button>
              </div>
            </div>
            <button 
              v-if="!showAllQuotes && quotes.length > 2"
              @click="showAllQuotes = true"
              class="text-cyan-600 hover:text-cyan-700 font-medium text-sm ml-3"
            >
              [View all]
            </button>
          </div>
        </div>

        <!-- Progress Photos -->
        <div class="border-b border-gray-200 pb-6">
          <div class="flex items-center gap-2 mb-4">
            <span class="text-2xl">📁</span>
            <h3 class="text-lg font-semibold text-gray-800">Ảnh tiến độ (150+ photos)</h3>
          </div>
          <div class="ml-8">
            <p class="text-gray-700 mb-2">• Latest: 26/12/2024 (15 photos)</p>
            <router-link 
              to="/client/project/1/progress"
              class="text-cyan-600 hover:text-cyan-700 font-medium text-sm ml-3"
            >
              [View gallery]
            </router-link>
          </div>
        </div>

        <!-- Invoices -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <span class="text-2xl">📁</span>
            <h3 class="text-lg font-semibold text-gray-800">Hóa đơn & Thanh toán ({{ invoices.length }} files)</h3>
          </div>
          <div class="space-y-3 ml-8">
            <div 
              v-for="file in invoices.slice(0, showAllInvoices ? invoices.length : 2)" 
              :key="file.id"
              class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div class="flex-1">
                <p class="font-medium text-gray-800">• {{ file.name }}</p>
              </div>
              <div class="flex gap-2">
                <button class="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-white rounded">
                  Download
                </button>
                <button class="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded">
                  View
                </button>
              </div>
            </div>
            <button 
              v-if="!showAllInvoices && invoices.length > 2"
              @click="showAllInvoices = true"
              class="text-cyan-600 hover:text-cyan-700 font-medium text-sm ml-3"
            >
              [View all]
            </button>
          </div>
        </div>
      </div>

      <div class="flex gap-3 mt-8 pt-6 border-t border-gray-200">
        <button class="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors">
          Request document
        </button>
        <router-link 
          to="/client/messages"
          class="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          Contact PM
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showAllDesigns = ref(false)
const showAllQuotes = ref(false)
const showAllInvoices = ref(false)

const contracts = ref([
  {
    id: 1,
    name: 'Contract_VinhomesA1.pdf (2.5 MB)',
    info: 'Signed: 15/01/2024'
  },
  {
    id: 2,
    name: 'Terms_and_Conditions.pdf (0.8 MB)',
    info: ''
  },
  {
    id: 3,
    name: 'Payment_Schedule.pdf (0.5 MB)',
    info: ''
  }
])

const designs = ref([
  { id: 1, name: 'Floor_Plan.pdf (3.2 MB)' },
  { id: 2, name: 'Electrical_Design.pdf (2.1 MB)' },
  { id: 3, name: 'Plumbing_Design.pdf (1.8 MB)' },
  { id: 4, name: 'Ceiling_Design.pdf (2.0 MB)' },
  { id: 5, name: 'Paint_Specs.pdf (1.5 MB)' },
  { id: 6, name: 'Woodwork_Details.pdf (2.3 MB)' },
  { id: 7, name: '3D_Renders.pdf (5.0 MB)' },
  { id: 8, name: 'Material_Specs.pdf (1.2 MB)' }
])

const quotes = ref([
  { id: 1, name: 'Initial_Quote.pdf (1.2 MB)' },
  { id: 2, name: 'Final_Quote.pdf (1.5 MB)' },
  { id: 3, name: 'Revised_Quote_v2.pdf (1.3 MB)' },
  { id: 4, name: 'Additional_Works_Quote.pdf (0.9 MB)' },
  { id: 5, name: 'Material_Price_List.pdf (2.0 MB)' }
])

const invoices = ref([
  { id: 1, name: 'Invoice_001.pdf' },
  { id: 2, name: 'Payment_Receipt_001.pdf' },
  { id: 3, name: 'Invoice_002.pdf' },
  { id: 4, name: 'Payment_Receipt_002.pdf' },
  { id: 5, name: 'Invoice_003.pdf' },
  { id: 6, name: 'Payment_Receipt_003.pdf' },
  { id: 7, name: 'Invoice_004.pdf' },
  { id: 8, name: 'Payment_Receipt_004.pdf' },
  { id: 9, name: 'Invoice_005.pdf' },
  { id: 10, name: 'Payment_Receipt_005.pdf' },
  { id: 11, name: 'Tax_Invoice_Summary.pdf' },
  { id: 12, name: 'Payment_History.pdf' }
])
</script>
