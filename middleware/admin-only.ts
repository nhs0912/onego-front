export default defineNuxtRouteMiddleware(() => {
  const isAdmin = useAdmin();
  const isAuthenticated = useAuthenticated();
  console.log("isAdmin = {}", isAdmin);
  console.log("isAuthenticated = {}", isAuthenticated);
  if (!isAuthenticated.value) {
    return navigateTo('/login');
  }

  if (!isAdmin.value) {
    return navigateTo('/');
  }
});