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
      <Icon name="mdi:pencil" class="w-5 h-5" />
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
