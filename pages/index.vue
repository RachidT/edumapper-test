<template>
  <div>
    <header class="pt-4 mb-4">
      <h1 class="font-bold text-2xl mb-2 px-4">Edumapper*</h1>

      <div class="w-full bg-neutral-200 h-1.5">
        <div class="bg-black h-1.5" style="width: 70%"></div>
      </div>
    </header>

    <div class="px-4">
      <SchoolCard />
      <ClassSection />
      <FormSection
        title="Spécialités"
        placeholder="Ex: Mathématiques, Physique"
        emptySubtitle="À compléter"
      />
      <FormSection
        title="Notes"
        placeholder="Ex: 15/20"
        emptySubtitle="À compléter"
      />
      <FormSection
        title="Résultats au bac"
        placeholder="Ex: Mention Très Bien"
        emptySubtitle="À compléter"
      />

      <div class="mt-8 mb-4 text-center">
        <button
          class="bg-black text-white font-semibold rounded-full px-8 py-3 transition hover:bg-neutral-800"
          @click="startCalculation"
        >
          Estimer mes chances
        </button>
      </div>
    </div>

    <CalculationLoader v-if="showLoader" @loaded="handleCalculationLoaded" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import SchoolCard from "~/components/SchoolCard.vue";
import FormInfoCard from "~/components/FormInfoCard.vue";
import ClassSection from "~/components/ClassSection.vue";
import FormSection from "~/components/FormSection.vue";
import CalculationLoader from "~/components/CalculationLoader.vue";

const showLoader = ref(false);
const router = useRouter();

function startCalculation() {
  showLoader.value = true;
}

function handleCalculationLoaded() {
  showLoader.value = false;
  router.push("/results");
}
</script>
