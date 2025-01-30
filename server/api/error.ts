export default eventHandler(()=> {
  // return {
  //   message: 'hello Nuxt3!',
  // }
  throw createError({
    statusCode: 404,
    statusMessage: 'Page is Not Found!!!',
  })
})