export default defineNuxtRouteMiddleware(() => {
  const { isAdmin, isAuthenticated } = storeToRefs(useAuthStore());
  // console.log('isAdmin = {}', isAdmin);
  // console.log('isAuthenticated = {}', isAuthenticated);
  if (!isAuthenticated.value) {
    return navigateTo('/login');
  }

  if (!isAdmin.value) {
    return navigateTo('/');
  }
});
