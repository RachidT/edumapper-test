<template>
  <div class="bg-page-bg">
    <header class="pt-4 pb-4">
      <div class="flex items-center gap-2 px-4 pb-4">
        <h1 class="font-bold text-2xl mb-0">Edumapper</h1>
        <Icon name="mdi:star-four-points" class="w-5 h-5" />
      </div>

      <div class="w-full bg-neutral-200 h-1.5">
        <div class="bg-black h-1.5" style="width: 70%"></div>
      </div>
    </header>

    <div class="px-4 w-full md:w-screen-content md:mx-auto mt-4">
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
          @click="navigateToResults"
        >
          Valider mon profil
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import SchoolCard from "~/components/SchoolCard.vue";
import FormInfoCard from "~/components/FormInfoCard.vue";
import ClassSection from "~/components/ClassSection.vue";
import FormSection from "~/components/FormSection.vue";

const router = useRouter();

function navigateToResults() {
  router.push("/results");
}
</script>
