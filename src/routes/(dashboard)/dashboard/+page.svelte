<div>
  <h1>Dashboard Page</h1>
  <p>This is a protected page that only authenticated users can access.</p>
  <p>It is a child route of the dashboard layout.</p>
  <p>It is located at <code>src/routes/(dashboard)/+page.svelte</code></p>
  <p>
    This page is protected by the <code>auth</code> store. If the user is not authenticated,
    they will be redirected to the login page.
  </p>
  <p>
    If the user is authenticated, they will see this page. You can customize
    this page by editing <code>src/routes/(dashboard)/+page.svelte</code>
  </p>
  <p>
    This page is a child route of the dashboard layout. It is wrapped in the
    dashboard layout located at <code
      >src/routes/(dashboard)/+layout.svelte</code
    >
  </p>
  <p>
    The dashboard layout is a child layout of the base layout located at
    <code>src/routes/+layout.svelte</code>
  </p>
  <p>
    The base layout is the root layout of the application. It is the parent of
    all other layouts and pages.
  </p>
  <p>
    You can customize the layout of this page by editing
    <code>src/routes/(dashboard)/+layout.svelte</code>
  </p>
  <p>
    You can customize the layout of the dashboard layout by editing
    <code>src/routes/(dashboard)/+layout.svelte</code>
  </p>
  <p>
    You can customize the layout of the base layout by editing
    <code>src/routes/+layout.svelte</code>
  </p>
  <p>
    You can customize the layout of the entire application by editing
    <code>src/App.svelte</code>
  </p>
  <p>
    You can customize the global styles of the application by editing
    <code>src/lib/styles/global.css</code>
  </p>
  <p>
    You can customize the theme of the application by editing
    <code>src/lib/styles/theme.css</code>
  </p>
  <p>
    You can customize the global scripts of the application by editing
    <code>src/lib/scripts </code>
  </p>
</div>
