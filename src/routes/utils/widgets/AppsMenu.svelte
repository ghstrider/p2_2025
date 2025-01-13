<script>
  import Icon from "@iconify/svelte"

  // Menu items with Iconify icon names
  const menu = [
    { name: "Sales", href: "/sales", icon: "mdi:shopping-bag" },
    { name: "Users", href: "/users", icon: "mdi:account-group" },
    { name: "Inbox", href: "/inbox", icon: "mdi:inbox" },
    { name: "Profile", href: "/profile", icon: "mdi:account-circle" },
    { name: "Settings", href: "/settings", icon: "mdi:cog" },
    { name: "Products", href: "/products", icon: "mdi:archive" },
    { name: "Pricing", href: "/pricing", icon: "mdi:currency-usd" },
    { name: "Billing", href: "/billing", icon: "mdi:tag" },
    { name: "Logout", href: "/logout", icon: "mdi:logout" },
  ]
</script>

<!-- Dropdown Button -->
<div class="dropdown dropdown-end">
  <!-- Menu Trigger -->
  <button class="btn btn-ghost btn-circle" aria-label="Apps Menu">
    <Icon icon="mdi:menu" class="h-6 w-6" />
  </button>

  <!-- Dropdown Menu -->
  <ul class="dropdown-content bg-base-100 shadow rounded-box w-64 p-2">
    {#each menu as item}
      <li>
        <a
          href={item.href}
          class="flex flex-col items-center gap-1 p-4 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg"
        >
          <!-- Icon -->
          <Icon
            icon={item.icon}
            class="h-7 w-7 text-gray-500 dark:text-gray-400"
          />
          <!-- Label -->
          <span class="text-sm font-medium text-gray-900 dark:text-white">
            {item.name}
          </span>
        </a>
      </li>
    {/each}
  </ul>
</div>
