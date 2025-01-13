<script lang="ts">
  import { Auth } from "@supabase/auth-ui-svelte"
  import { sharedAppearance, oauthProviders } from "../login_config"
  import { goto } from "$app/navigation"
  import { onMount } from "svelte"
  import { page } from "$app/stores"
  import { authStore } from "$lib/auth/auth_store"

  import { LoginService } from "$lib/auth/login_service"

  let { data } = $props()
  let { supabase } = data

  let username = ""
  let password = ""
  let error = ""

  let redirectAfterLogin: string | null = null

  const loginService = new LoginService("http://localhost:8080/api")

  const login = async (event) => {
    event.preventDefault()
    try {
      await loginService.login(username, password)

      // Redirect to the intended page or default to '/dashboard'
      goto(redirectAfterLogin || "/dashboard")

      // Clear redirectAfterLogin in the store
      authStore.update((auth) => ({
        ...auth,
        redirectAfterLogin: null,
      }))
    } catch (e) {
      error = e.message
    }
  }

  onMount(() => {
    authStore.subscribe((auth) => {
      if (auth.isLoggedIn) {
        goto("/dashboard")
      }
    })
  })
</script>

<svelte:head>
  <title>Sign in</title>
</svelte:head>

{#if $page.url.searchParams.get("verified") == "true"}
  <div role="alert" class="alert alert-success mb-5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      /></svg
    >
    <span>Email verified! Please sign in.</span>
  </div>
{/if}
<form onsubmit={login}>
  {#if error}
    <p style="color: red">{error}</p>
  {/if}
  <input type="text" bind:value={username} placeholder="Username" required />
  <input
    type="password"
    bind:value={password}
    placeholder="Password"
    required
  />
  <button type="submit">Login</button>
</form>
<div class="text-l text-slate-800 mt-4">
  <a class="underline" href="/login/forgot_password">Forgot password?</a>
</div>
<div class="text-l text-slate-800 mt-3">
  Don't have an account? <a class="underline" href="/login/sign_up">Sign up</a>.
</div>
