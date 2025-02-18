export default defineEventHandler((event) => {
  const user = getUserFromEvent(event);

  if (!user) {
    return { user: null };
  }

  return {
    user,
  };
});
