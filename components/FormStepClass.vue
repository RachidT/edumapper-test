<template>
  <div class="mb-4 bg-white rounded-xl p-4 shadow">
    <div class="flex justify-between items-center mb-2">
      <div class="font-medium text-sm">En quelle classe es-tu ?</div>
      <button
        class="text-neutral-400 text-lg leading-none"
        @click="handleClose"
      >
        ×
      </button>
    </div>
    <div class="flex gap-2 mb-4">
      <button
        v-for="c in classes"
        :key="c.value"
        :class="getButtonClass(localSelectedClass === c.value)"
        @click="selectClass(c.value)"
      >
        {{ c.label }}
      </button>
    </div>
    <div class="mb-2 text-xs font-medium">Type de bac</div>
    <div class="flex gap-2 mb-4">
      <button
        v-for="b in bacTypes"
        :key="b.value"
        :class="getButtonClass(localSelectedBac === b.value)"
        @click="selectBac(b.value)"
      >
        {{ b.label }}
      </button>
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
  selectedClass: string | null;
  selectedBac: string | null;
}>();

const emit = defineEmits<{
  (e: "update:selectedClass", value: string | null): void;
  (e: "update:selectedBac", value: string | null): void;
  (e: "confirmed", data: { class: string | null; bac: string | null }): void;
  (e: "closed"): void;
}>();

const classes = [
  { value: "Seconde", label: "Seconde" },
  { value: "Première", label: "Première" },
  { value: "Terminale", label: "Terminale" },
];
const bacTypes = [
  { value: "Général", label: "Général" },
  { value: "Technologique", label: "Technologique" },
  { value: "Professionnel", label: "Professionnel" },
];

const localSelectedClass = ref<string | null>(props.selectedClass);
const localSelectedBac = ref<string | null>(props.selectedBac);

watch(
  [() => props.selectedClass, () => props.selectedBac],
  ([newClass, newBac]) => {
    localSelectedClass.value = newClass;
    localSelectedBac.value = newBac;
  },
  { immediate: true }
);

function selectClass(c: string) {
  localSelectedClass.value = localSelectedClass.value === c ? null : c;
  emit("update:selectedClass", localSelectedClass.value);
}

function selectBac(b: string) {
  localSelectedBac.value = localSelectedBac.value === b ? null : b;
  emit("update:selectedBac", localSelectedBac.value);
}

const canConfirm = computed(
  () => !!localSelectedClass.value && !!localSelectedBac.value
);

function getButtonClass(selected: boolean) {
  return [
    "px-3 py-1 rounded-full border text-xs transition",
    selected
      ? "bg-black text-white border-black"
      : "bg-neutral-100 text-neutral-800 border-transparent",
  ];
}

const getConfirmButtonClass = computed(() =>
  canConfirm.value
    ? "bg-black text-white border-black cursor-pointer"
    : "bg-white text-neutral-400 border-neutral-300 cursor-not-allowed"
);

function handleConfirm() {
  if (canConfirm.value) {
    emit("confirmed", {
      class: localSelectedClass.value,
      bac: localSelectedBac.value,
    });
  }
}

function handleClose() {
  emit("closed");
}
</script>
