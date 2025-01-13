// authStore.ts
import { writable } from 'svelte/store';

export const authStore = writable({
  isLoggedIn: false,
  authToken: null,
  redirectAfterLogin: null,
});
