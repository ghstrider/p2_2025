<script lang="ts">
  import Icon from "@iconify/svelte"

  export let src: string = ""
  export let icon: string = "" // Iconify icon name
  export let when: string = ""
  export let href: string = ""
  export let color: string = "dark"
</script>

<a
  {href}
  class="flex gap-2 border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
>
  <!-- Icon or Avatar -->
  {#if icon}
    <div
      class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      <Icon
        {icon}
        class="h-6 w-6 text-gray-600 dark:text-gray-200"
        style="color: {color}"
      />
    </div>
  {:else}
    <img {src} alt="Avatar" class="w-10 h-10 rounded-full" />
  {/if}

  <div class="w-full">
    <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
      <slot />
    </div>
    {#if when}
      <div class="text-xs font-medium text-primary dark:text-primary-content">
        {when}
      </div>
    {/if}
  </div>
</a>
