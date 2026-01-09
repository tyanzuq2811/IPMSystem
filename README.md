# Interior Project Manager - Frontend

Hệ thống quản lý dự án thi công nội thất được xây dựng bằng Vue.js

## 🎯 Tính Năng Chính

### 1. Dashboard Tổng Quan
- Hiển thị thống kê tổng quan: Tổng dự án, Đang thi công, Hoàn thành, Tạm dừng
- Biểu đồ doanh thu và chi phí 12 tháng
- Top 5 dự án vượt ngân sách
- Công việc của Project Managers
- Cảnh báo và thông báo real-time

### 2. Quản Lý Nhân Sự
- Danh sách nhân viên với phân quyền: Admin, PM, Foreman, Client
- Tìm kiếm, lọc theo vai trò, trạng thái
- Thêm/Sửa/Xóa nhân viên
- Xem lịch sử hoạt động của nhân viên
- Bulk actions: Khóa hàng loạt, Export Excel, Gửi email

### 3. Quản Lý Dự Án
- Grid view và List view
- Lọc theo trạng thái, PM, ngân sách, tiến độ
- Thông tin chi tiết: Team, Progress, Budget, Materials
- Theo dõi tiến độ theo hạng mục (Điện, Nước, Gỗ, Sơn...)
- Quản lý vật tư và yêu cầu vật tư

### 4. Cấu Hình Hệ Thống
- Quản lý danh mục vật tư với cây phân cấp
- Đơn vị tính
- Hạng mục thi công với icon và màu sắc tùy chỉnh
- Cấu hình Email SMTP và template thông báo

### 5. Báo Cáo Tổng Hợp
- Thống kê doanh thu, chi phí, lợi nhuận
- Biểu đồ doanh thu vs chi phí
- Top dự án theo doanh thu
- Phân bổ chi phí theo danh mục
- Export PDF và Excel

## 🚀 Cài Đặt và Chạy

### Yêu cầu
- Node.js >= 16.x
- npm hoặc yarn

### Bước 1: Cài đặt dependencies
```bash
npm install
```

### Bước 2: Chạy development server
```bash
npm run dev
```

Ứng dụng sẽ chạy tại: `http://localhost:3000`

### Bước 3: Build production
```bash
npm run build
```

## 📁 Cấu Trúc Dự Án

```
BTL/
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── main.css          # Global styles
│   ├── components/
│   │   └── layout/
│   │       ├── Header.vue        # Header component
│   │       └── Sidebar.vue       # Sidebar navigation
│   ├── layouts/
│   │   └── AdminLayout.vue       # Main admin layout
│   ├── views/
│   │   ├── Dashboard.vue         # Dashboard page
│   │   ├── Staff.vue             # Staff management
│   │   ├── Projects.vue          # Projects list
│   │   ├── ProjectDetail.vue     # Project detail
│   │   ├── Settings.vue          # System settings
│   │   └── Reports.vue           # Reports
│   ├── router/
│   │   └── index.js              # Vue Router config
│   ├── App.vue                   # Root component
│   └── main.js                   # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Công Nghệ Sử Dụng

- **Vue.js 3** - Progressive JavaScript Framework
- **Vue Router 4** - Official router for Vue.js
- **Vite** - Next generation frontend tooling
- **CSS Variables** - Custom design system
- **Canvas API** - Charts and visualizations

## 📱 Responsive Design

Giao diện được thiết kế responsive và hoạt động tốt trên:
- Desktop (1920px+)
- Laptop (1366px - 1920px)
- Tablet (768px - 1366px)
- Mobile (< 768px)

## 🎯 Các Trang Chính

### Admin Routes
- `/admin/dashboard` - Dashboard tổng quan
- `/admin/staff` - Quản lý nhân sự
- `/admin/projects` - Danh sách dự án
- `/admin/projects/:id` - Chi tiết dự án
- `/admin/settings` - Cấu hình hệ thống
- `/admin/reports` - Báo cáo tổng hợp

## 💡 Mock Data

Hiện tại ứng dụng sử dụng mock data được hard-code trong các component. Dữ liệu mẫu bao gồm:
- 24 dự án (15 đang thi công, 7 hoàn thành, 2 tạm dừng)
- 45 nhân viên (8 PM, 15 Foreman, 20 Client)
- Thống kê doanh thu, chi phí 12 tháng
- Vật tư, hạng mục thi công

## 🔜 Tích Hợp Backend

Để tích hợp với backend API:

1. Tạo folder `src/services/` cho API calls
2. Tạo `src/services/api.js`:
```javascript
import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000/api'

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Projects API
export const getProjects = () => api.get('/projects')
export const getProjectById = (id) => api.get(`/projects/${id}`)
// ... other endpoints
```

3. Thay thế mock data trong components bằng API calls

## 🎨 Design System

### Colors
- Primary: `#3B82F6` (Blue)
- Success: `#10B981` (Green)
- Warning: `#F59E0B` (Orange)
- Danger: `#EF4444` (Red)
- Purple: `#8B5CF6`
- Gray Scale: `#F9FAFB` to `#111827`

### Typography
- Font Family: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto)
- Base Size: 14px
- Headings: 16px - 28px

### Spacing
- Base: 4px
- Scale: 8px, 12px, 16px, 20px, 24px, 32px, 40px

## 📝 Ghi Chú

- Đây là phiên bản frontend only, chưa có backend và database
- Mock data được sử dụng để demo các chức năng
- Charts được vẽ bằng Canvas API (có thể thay bằng Chart.js nếu cần)
- Authentication chưa được implement

## 👨‍💻 Phát Triển Tiếp

Để phát triển thêm tính năng:
1. Thêm component mới trong `src/components/`
2. Thêm view mới trong `src/views/`
3. Cập nhật routes trong `src/router/index.js`
4. Thêm styles trong component hoặc `main.css`

## 📞 Hỗ Trợ

Nếu có vấn đề hoặc câu hỏi, vui lòng tạo issue trên repository.

## 📄 License

MIT License
