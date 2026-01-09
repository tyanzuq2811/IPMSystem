// Authentication utility functions

export function getUser() {
  const userFromLocal = localStorage.getItem('ipm_user')
  const userFromSession = sessionStorage.getItem('ipm_user')
  
  if (userFromLocal) {
    return JSON.parse(userFromLocal)
  } else if (userFromSession) {
    return JSON.parse(userFromSession)
  }
  
  return null
}

export function isAuthenticated() {
  return getUser() !== null
}

export function getUserRole() {
  const user = getUser()
  return user ? user.role : null
}

export function logout() {
  localStorage.removeItem('ipm_user')
  sessionStorage.removeItem('ipm_user')
}

export function requireAuth(to, from, next) {
  if (!isAuthenticated()) {
    next('/login')
  } else {
    next()
  }
}

export function requireRole(role) {
  return (to, from, next) => {
    const user = getUser()
    
    if (!user) {
      next('/login')
    } else if (user.role !== role) {
      // Redirect to appropriate dashboard based on role
      if (user.role === 'admin') {
        next('/admin/dashboard')
      } else if (user.role === 'pm') {
        next('/pm/dashboard')
      } else if (user.role === 'foreman') {
        next('/foreman/dashboard')
      } else if (user.role === 'client') {
        next('/client/dashboard')
      } else {
        next('/login')
      }
    } else {
      next()
    }
  }
}
