<template>
  <div>
    <header class="pt-4 mb-4">
      <h1 class="font-bold text-2xl mb-2 px-4">Edumapper*</h1>

      <!-- Barre de progression sans padding horizontal et non arrondie -->
      <div class="w-full bg-neutral-200 h-1.5">
        <div class="bg-black h-1.5" style="width: 70%"></div>
      </div>
    </header>

    <!-- Appliquer le padding horizontal au contenu des cartes -->
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
    </div>
  </div>
</template>

<script setup lang="ts">
import SchoolCard from "~/components/SchoolCard.vue";
import FormInfoCard from "~/components/FormInfoCard.vue";
import ClassSection from "~/components/ClassSection.vue";
import FormSection from "~/components/FormSection.vue";
</script>
