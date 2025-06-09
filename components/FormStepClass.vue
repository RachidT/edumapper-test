<template>
  <div class="mb-4 bg-white rounded-xl p-4 shadow">
    <div class="flex justify-between items-center mb-2">
      <div class="font-medium text-sm">En quelle classe es-tu ?</div>
      <button class="text-neutral-400 text-lg leading-none">×</button>
    </div>
    <div class="flex gap-2 mb-4">
      <button
        v-for="c in classes"
        :key="c.value"
        :class="getButtonClass(selectedClass === c.value)"
        @click="selectedClass = c.value"
      >
        {{ c.label }}
      </button>
    </div>
    <div class="mb-2 text-xs font-medium">Type de bac</div>
    <div class="flex gap-2 mb-4">
      <button
        v-for="b in bacTypes"
        :key="b.value"
        :class="getButtonClass(selectedBac === b.value)"
        @click="selectedBac = b.value"
      >
        {{ b.label }}
      </button>
    </div>
    <button
      class="w-full py-2 rounded-full font-medium transition border"
      :class="getConfirmButtonClass"
      :disabled="!canConfirm"
    >
      Confirmer
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

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

const selectedClass = ref<string | null>(null);
const selectedBac = ref<string | null>(null);

const canConfirm = computed(() => !!selectedClass.value && !!selectedBac.value);

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
</script>
