<template>
  <div class="p-4">
    <header class="mb-4">
      <h1 class="font-semibold text-lg">Edumapper*</h1>
    </header>
    <SchoolCard />

    <ClassSection />

    <FormInfoCard title="Spécialités" subtitle="À compléter" />
    <FormInfoCard title="Notes" subtitle="À compléter" />
    <FormInfoCard title="Résultats au bac" subtitle="À compléter" />
    <!-- Les autres étapes/formulaires viendront ici -->
    <div>
      <i-heroicons-home-solid class="w-10 h-10 text-blue-500" />
      <i-mdi-home class="w-10 h-10 text-green-500" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SchoolCard from "~/components/SchoolCard.vue";
import FormInfoCard from "~/components/FormInfoCard.vue";
import ClassSection from "~/components/ClassSection.vue";
</script>
