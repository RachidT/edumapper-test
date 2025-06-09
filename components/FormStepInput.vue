<template>
  <div class="mb-4 bg-white rounded-xl p-4 shadow">
    <div class="flex justify-between items-center mb-2">
      <div class="font-medium text-sm">{{ title }}</div>
      <button
        class="text-neutral-400 text-lg leading-none"
        @click="handleClose"
      >
        ×
      </button>
    </div>
    <div class="mb-4">
      <input
        v-model="localValue"
        type="text"
        :placeholder="placeholder"
        class="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
      />
    </div>
    <button
      class="w-full py-2 rounded-full font-medium transition border"
      :class="getConfirmButtonClass"
      :disabled="!canConfirm"
      @click="handleConfirm"
    >
      Confirmer
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

const props = defineProps<{
  title: string;
  placeholder?: string;
  modelValue: string | null;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | null): void;
  (e: "confirmed", value: string | null): void;
  (e: "closed"): void;
}>();

const localValue = ref<string | null>(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    localValue.value = newValue;
  }
);

const canConfirm = computed(
  () => !!localValue.value && localValue.value.trim() !== ""
);

const getConfirmButtonClass = computed(() =>
  canConfirm.value
    ? "bg-black text-white border-black cursor-pointer"
    : "bg-white text-neutral-400 border-neutral-300 cursor-not-allowed"
);

function handleConfirm() {
  if (canConfirm.value) {
    emit("confirmed", localValue.value);
  }
}

function handleClose() {
  emit("closed");
}
</script>
