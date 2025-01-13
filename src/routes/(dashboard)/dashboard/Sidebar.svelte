<script>
  import { sidebarOpen } from "$lib/stores/sidebar.js"
</script>

{#if $sidebarOpen}
  <aside
    class="fixed inset-y-0 left-0 bg-gray-900 text-white w-64 transform transition-transform duration-300"
  >
    <div class="flex flex-col h-full">
      <!-- Close Button (Mobile Only) -->
      <button
        class="lg:hidden text-gray-300 hover:text-white p-4 self-end"
        on:click={() => sidebarOpen.set(false)}
      >
        XXXX
      </button>

      <!-- Sidebar Content -->
      <ul class="space-y-4 px-4 py-6">
        <li><a href="/" class="hover:text-blue-400">Dashboard</a></li>
        <li><a href="/settings" class="hover:text-blue-400">Settings</a></li>
        <li><a href="/profile" class="hover:text-blue-400">Profile</a></li>
        <li><a href="/logout" class="hover:text-blue-400">Logout</a></li>
      </ul>
    </div>
  </aside>
{/if}
