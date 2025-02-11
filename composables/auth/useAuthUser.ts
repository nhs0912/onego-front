import type { UserWithoutPassword } from "~/types/user";
//pinia로 하기 전에 전역으로 설정
export const useAuthUser = () =>
    useState<Maybe<UserWithoutPassword>>('user', ()=> null);





// export const useAuthUser = () => {
//   const isAuthenticated = computed(() => !!authUser.value);
//   const isAdmin = computed(() => authUser.value?.roles.includes('ADMIN'));
//
//   return {
//     authUser,
//     isAuthenticated,
//     isAdmin
//   }
// }