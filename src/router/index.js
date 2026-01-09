import { createRouter, createWebHistory } from 'vue-router'
import { requireAuth, requireRole } from '@/utils/auth'

// Auth
import Login from '../views/Login.vue'

// Layouts
import AdminLayout from '../layouts/AdminLayout.vue'
import PMLayout from '../layouts/PMLayout.vue'
import ForemanLayout from '../layouts/ForemanLayout.vue'

// Admin views
import Dashboard from '../views/Dashboard.vue'
import Staff from '../views/Staff.vue'
import Settings from '../views/Settings.vue'
import Reports from '../views/Reports.vue'
import Projects from '../views/Projects.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

// PM views
import PMDashboard from '../views/pm/Dashboard.vue'
import PMProjectCreate from '../views/pm/ProjectCreate.vue'
import PMProjectDetail from '../views/pm/ProjectDetail.vue'
import PMMaterials from '../views/pm/Materials.vue'
import PMReports from '../views/pm/Reports.vue'
import PMCalendar from '../views/pm/Calendar.vue'
import PMNotifications from '../views/pm/Notifications.vue'
import PMProfile from '../views/pm/Profile.vue'

// Foreman views
import ForemanDashboard from '../views/foreman/Dashboard.vue'
import ForemanUpdateProgress from '../views/foreman/UpdateProgress.vue'
import ForemanMaterialRequest from '../views/foreman/MaterialRequest.vue'
import ForemanProjectDetail from '../views/foreman/ProjectDetail.vue'
import ForemanChat from '../views/foreman/Chat.vue'
import ForemanProfile from '../views/foreman/Profile.vue'

// Client views
import ClientLayout from '../layouts/ClientLayout.vue'
import ClientDashboard from '../views/client/Dashboard.vue'
import ClientProgress from '../views/client/Progress.vue'
import ClientBudget from '../views/client/Budget.vue'
import ClientMessages from '../views/client/Messages.vue'
import ClientDocuments from '../views/client/Documents.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { guest: true }
  },
  {
    path: '/admin',
    component: AdminLayout,
    beforeEnter: requireRole('admin'),
    children: [
      {
        path: 'dashboard',
        name: 'AdminDashboard',
        component: Dashboard
      },
      {
        path: 'staff',
        name: 'AdminStaff',
        component: Staff
      },
      {
        path: 'settings',
        name: 'AdminSettings',
        component: Settings
      },
      {
        path: 'reports',
        name: 'AdminReports',
        component: Reports
      },
      {
        path: 'projects',
        name: 'AdminProjects',
        component: Projects
      },
      {
        path: 'projects/:id',
        name: 'AdminProjectDetail',
        component: ProjectDetail
      }
    ]
  },
  {
    path: '/pm',
    component: PMLayout,
    beforeEnter: requireRole('pm'),
    children: [
      {
        path: 'dashboard',
        name: 'PMDashboard',
        component: PMDashboard
      },
      {
        path: 'projects/create',
        name: 'PMProjectCreate',
        component: PMProjectCreate
      },
      {
        path: 'projects/:id',
        name: 'PMProjectDetail',
        component: PMProjectDetail
      },
      {
        path: 'materials',
        name: 'PMMaterials',
        component: PMMaterials
      },
      {
        path: 'reports',
        name: 'PMReports',
        component: PMReports
      },
      {
        path: 'calendar',
        name: 'PMCalendar',
        component: PMCalendar
      },
      {
        path: 'notifications',
        name: 'PMNotifications',
        component: PMNotifications
      },
      {
        path: 'profile',
        name: 'PMProfile',
        component: PMProfile
      }
    ]
  },
  {
    path: '/foreman',
    component: ForemanLayout,
    beforeEnter: requireRole('foreman'),
    children: [
      {
        path: 'dashboard',
        name: 'ForemanDashboard',
        component: ForemanDashboard
      },
      {
        path: 'projects/:id/update-progress',
        name: 'ForemanUpdateProgress',
        component: ForemanUpdateProgress
      },
      {
        path: 'projects/:id',
        name: 'ForemanProjectDetail',
        component: ForemanProjectDetail
      },
      {
        path: 'materials/request',
        name: 'ForemanMaterialRequest',
        component: ForemanMaterialRequest
      },
      {
        path: 'chat',
        name: 'ForemanChat',
        component: ForemanChat
      },
      {
        path: 'profile',
        name: 'ForemanProfile',
        component: ForemanProfile
      }
    ]
  },
  {
    path: '/client',
    component: ClientLayout,
    beforeEnter: requireRole('client'),
    children: [
      {
        path: '',
        redirect: 'dashboard'
      },
      {
        path: 'dashboard',
        name: 'ClientDashboard',
        component: ClientDashboard
      },
      {
        path: 'project/:id/progress',
        name: 'ClientProgress',
        component: ClientProgress
      },
      {
        path: 'project/:id/budget',
        name: 'ClientBudget',
        component: ClientBudget
      },
      {
        path: 'messages',
        name: 'ClientMessages',
        component: ClientMessages
      },
      {
        path: 'documents',
        name: 'ClientDocuments',
        component: ClientDocuments
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Global navigation guard
router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('ipm_user') || sessionStorage.getItem('ipm_user')
  
  if (to.meta.guest && user) {
    // Already logged in, redirect to dashboard
    const userData = JSON.parse(user)
    if (userData.role === 'admin') {
      next('/admin/dashboard')
    } else if (userData.role === 'pm') {
      next('/pm/dashboard')
    } else if (userData.role === 'foreman') {
      next('/foreman/dashboard')
    } else if (userData.role === 'client') {
      next('/client/dashboard')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
