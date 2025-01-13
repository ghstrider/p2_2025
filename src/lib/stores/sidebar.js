import { writable } from "svelte/store";

// Create a writable store to manage sidebar open/close state
export const sidebarOpen = writable(false);
