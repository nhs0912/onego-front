export default defineEventHandler((event) => {
  const user = getUserFromEvent(event);
  console.log('middleWare user : ', user);
  if (user) {
    event.context.user = user;
  }
});
