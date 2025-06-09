<template>
  <div
    class="bg-neutral-50 rounded-xl p-4 flex items-center justify-between mb-3 cursor-pointer border border-white"
    @click="$emit('edit')"
  >
    <div>
      <div :class="getTitleClass">{{ title }}</div>
      <div :class="getValueClass">{{ subtitle }}</div>
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
import { computed } from "vue";

const props = defineProps<{
  title: string;
  subtitle: string;
}>();

const emit = defineEmits(["edit"]);

const isSubtitleEmpty = computed(
  () => props.subtitle === "À compléter" || props.subtitle.trim() === ""
);

const getTitleClass = computed(() => {
  return [
    isSubtitleEmpty.value
      ? "text-base font-medium text-black"
      : "text-xs text-neutral-500",
  ];
});

const getValueClass = computed(() => {
  return [
    isSubtitleEmpty.value
      ? "text-xs text-neutral-500"
      : "text-base font-medium text-black",
  ];
});
</script>
