import { authStore } from './auth_store';

export class LoginService {
  constructor(private baseUrl: string) {}

  async login(username: string, password: string) {
    const response = await fetch(`${this.baseUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();

    // Update the auth store
    authStore.set({
      isLoggedIn: true,
      authToken: data.token,
      redirectAfterLogin: null,
    });
  }

  logout() {
    authStore.set({
      isLoggedIn: false,
      authToken: null,
      redirectAfterLogin: null,
    });
    localStorage.removeItem('auth_token');
  }
}
