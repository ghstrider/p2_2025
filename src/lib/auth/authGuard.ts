// authGuard.ts
import { get } from 'svelte/store';
import { authStore } from './auth_store';

export function authGuard(currentPage: string) {
  const auth = get(authStore);

  if (!auth.isLoggedIn) {
    authStore.update((state) => ({
      ...state,
      redirectAfterLogin: currentPage,
    }));

    // Redirect to login page
    window.location.href = '/login';
  }
}
