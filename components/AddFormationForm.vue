<template>
  <div>
    <div class="font-bold text-xl mb-4">Ajouter une formation</div>

    <div class="mb-4">
      <label
        for="schoolName"
        class="block text-sm font-medium text-neutral-700 mb-1"
        >Nom de l'école</label
      >
      <input
        id="schoolName"
        v-model="localSchoolName"
        type="text"
        placeholder="Ex: SKEMA"
        class="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
      />
    </div>

    <div class="mb-4">
      <label for="city" class="block text-sm font-medium text-neutral-700 mb-1"
        >Ville</label
      >
      <input
        id="city"
        v-model="localCity"
        type="text"
        placeholder="Ex: Lille"
        class="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
      />
    </div>

    <div class="mb-6">
      <label
        for="formationName"
        class="block text-sm font-medium text-neutral-700 mb-1"
        >Parcours choisi</label
      >
      <input
        id="formationName"
        v-model="localFormationName"
        type="text"
        placeholder="Ex: BBA - Global Management"
        class="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
      />
    </div>

    <button
      class="w-full py-2 rounded-full font-medium transition border"
      :class="getConfirmButtonClass"
      :disabled="!canConfirm"
      @click="handleSubmit"
    >
      Confirmer
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

const props = defineProps<{
  schoolName: string;
  city: string;
  formationName: string;
}>();

const emit = defineEmits<{
  (e: "update:schoolName", value: string): void;
  (e: "update:city", value: string): void;
  (e: "update:formationName", value: string): void;
  (
    e: "submit",
    data: { schoolName: string; city: string; formationName: string }
  ): void;
}>();

const localSchoolName = ref(props.schoolName);
const localCity = ref(props.city);
const localFormationName = ref(props.formationName);

watch(
  () => props.schoolName,
  (val) => (localSchoolName.value = val)
);
watch(
  () => props.city,
  (val) => (localCity.value = val)
);
watch(
  () => props.formationName,
  (val) => (localFormationName.value = val)
);

watch(localSchoolName, (val) => emit("update:schoolName", val));
watch(localCity, (val) => emit("update:city", val));
watch(localFormationName, (val) => emit("update:formationName", val));

const canConfirm = computed(
  () =>
    localSchoolName.value.trim() !== "" &&
    localCity.value.trim() !== "" &&
    localFormationName.value.trim() !== ""
);

const getConfirmButtonClass = computed(() =>
  canConfirm.value
    ? "bg-black text-white border-black cursor-pointer"
    : "bg-white text-neutral-400 border-neutral-300 cursor-not-allowed"
);

function handleSubmit() {
  if (canConfirm.value) {
    emit("submit", {
      schoolName: localSchoolName.value,
      city: localCity.value,
      formationName: localFormationName.value,
    });
  }
}
</script>
