<script>
  import Icon from "@iconify/svelte"
  import Users from "../../data/users.json"
  import Notification from "./Notification.svelte"
</script>

<!-- Notification Trigger -->
<div class="dropdown dropdown-end">
  <!-- Bell Icon Button -->
  <button class="btn btn-ghost btn-circle" aria-label="Notifications">
    <Icon icon="mdi:bell" class="h-6 w-6" />
  </button>

  <!-- Dropdown Menu -->
  <div class="dropdown-content w-80 bg-base-100 shadow-xl rounded-box">
    <!-- Title -->
    <div
      class="p-4 text-lg font-semibold text-center border-b dark:border-gray-700"
    >
      Notifications
    </div>

    <!-- Notification Items -->
    <ul class="max-h-96 overflow-y-auto bg-base-100">
      <li>
        <Notification
          href="#"
          src={Users[0].avatar}
          icon="mdi:download"
          when="a few moments ago"
          color="purple"
        >
          New message from <span class="font-semibold">Bonnie Green</span>:
          "Hey, what's up? All set for the presentation?"
        </Notification>
      </li>
      <li>
        <Notification
          href="#"
          src={Users[1].avatar}
          icon="mdi:account-group"
          when="10 minutes ago"
          color="dark"
        >
          <span class="font-semibold">Jese leos</span> and
          <span class="font-medium">5 others</span> started following you.
        </Notification>
      </li>
      <li>
        <Notification
          href="#"
          src={Users[3].avatar}
          icon="mdi:heart"
          when="44 minutes ago"
          color="red"
        >
          <span class="font-semibold">Joseph Mcfall</span> and
          <span class="font-medium">141 others</span> love your story. See it and
          view more stories.
        </Notification>
      </li>
      <li>
        <Notification
          href="#"
          src={Users[4].avatar}
          icon="mdi:comment-outline"
          when="1 hour ago"
          color="green"
        >
          <span class="font-semibold">Leslie Livingston</span> mentioned you in
          a comment:
          <span class="font-medium text-primary">@bonnie.green</span> what do you
          say?
        </Notification>
      </li>
      <li>
        <Notification
          href="#"
          src={Users[5].avatar}
          icon="mdi:camera"
          when="3 hours ago"
          color="purple"
        >
          <span class="font-semibold">Robert Brown</span> posted a new video: Glassmorphism
          - learn how to implement the new design trend.
        </Notification>
      </li>
    </ul>

    <!-- View All Button -->
    <a
      href="/"
      class="block w-full bg-gray-50 px-4 py-2 text-center text-sm text-gray-900 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
    >
      <Icon icon="mdi:eye" class="inline-block h-4 w-4 mr-2" />
      View all
    </a>
  </div>
</div>
