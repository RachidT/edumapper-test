<template>
  <div
    class="bg-neutral-50 rounded-xl p-4 flex items-center justify-between mb-3"
  >
    <div>
      <div class="text-sm font-medium">{{ title }}</div>
      <div class="text-xs text-neutral-500">{{ subtitle }}</div>
    </div>
    <button class="text-black hover:text-neutral-700 transition">
      <span class="sr-only">Edit</span>
      <!-- Icône crayon (SVG inline, car les icônes ne fonctionnent pas pour l'instant) -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>
