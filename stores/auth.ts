import type { UserWithoutPassword } from '~/types/user';
import { getUser } from '~/composables/auth/userData';

export const useAuthStore = defineStore(
  'auth',
  () => {
    const authUser = ref<Maybe<UserWithoutPassword>>();
    const signIn = async (email: string, password: string) => {
      const data = await $fetch<{ user: UserWithoutPassword }>('/auth/login', {
        method: 'POST',
        body: {
          email,
          password,
        },
      });
      const { user: foundUser } = data;

      if (!foundUser) {
        throw createError({
          statusCode: 401,
          statusMessage: 'Invalid email or password',
        });
      }
      setUser(foundUser);
    };
    const setUser = (user: Maybe<UserWithoutPassword>) =>
      (authUser.value = user);

    const signOut = () => setUser(null);

    return {
      user: authUser,
      isAuthenticated: computed(() => !!authUser.value),
      isAdmin: computed(() =>
        !authUser.value ? false : authUser.value.roles.includes('ADMIN'),
      ),
      signIn,
      signOut,
    };
  },
  {
    persist: true,
    // {
    //   storage: persistedState.localStorage,
    // },
  },
);
