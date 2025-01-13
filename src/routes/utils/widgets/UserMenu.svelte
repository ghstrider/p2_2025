<script lang="ts">
  export let name: string = "" // Example: "Neil Sims"
  export let avatar: string = "" // Example: "neil-sims.png"
  export let email: string = "" // Example: "neil.sims@flowbite.com"
</script>

<!-- User Menu Dropdown -->
<div class="dropdown dropdown-end">
  <!-- Avatar Button -->
  <label class="btn btn-ghost btn-circle avatar">
    <input type="hidden" class="hidden" />
    <div class="w-10 rounded-full">
      <img src={avatar} alt="User Avatar" />
    </div>
  </label>

  <!-- Dropdown Menu -->
  <ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <!-- User Info Header -->
    <li
      class="menu-title px-4 py-2 border-b border-gray-200 dark:border-gray-700"
    >
      <span class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
        >{name}</span
      >
      <span class="block truncate text-sm text-gray-500 dark:text-gray-400"
        >{email}</span
      >
    </li>

    <!-- Menu Items -->
    <li>
      <a href="#" class="hover:bg-gray-100 dark:hover:bg-gray-600">
        Dashboard
      </a>
    </li>
    <li>
      <a href="#" class="hover:bg-gray-100 dark:hover:bg-gray-600">
        Settings
      </a>
    </li>
    <li>
      <a href="#" class="hover:bg-gray-100 dark:hover:bg-gray-600">
        Earnings
      </a>
    </li>

    <!-- Divider -->
    <li class="py-1 px-4">
      <div class="h-px bg-gray-200 dark:bg-gray-700"></div>
    </li>

    <!-- Sign Out -->
    <li>
      <a href="#" class="hover:bg-gray-100 dark:hover:bg-gray-600">
        Sign out
      </a>
    </li>
  </ul>
</div>
