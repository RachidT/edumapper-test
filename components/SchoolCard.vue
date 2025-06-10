<template>
  <div
    class="rounded-3xl p-6 mb-4 shadow flex flex-col md:flex-row md:justify-between md:items-center gap-4"
    style="
      background: linear-gradient(
        120deg,
        #f2994a 0%,
        #f7b0e0 60%,
        #b06ff7 100%
      );
    "
  >
    <div>
      <div class="font-bold text-white text-2xl mb-2">Lycée Gaston Berger</div>
      <div class="flex items-center gap-2 text-white/90 text-base">
        <i-heroicons-map-pin-solid class="w-5 h-5 text-white" />
        <span>Lille</span>
        <i-heroicons-building-office-2-solid class="w-5 h-5 text-white ml-2" />
        <span>Lycée Public</span>
      </div>
    </div>
    <button
      class="bg-white text-neutral-900 font-semibold rounded-full px-6 py-2 w-fit shadow text-lg transition hover:bg-neutral-100"
    >
      Modifier
    </button>
  </div>
</template>

<script setup lang="ts">
// defineEmits(['edit-school']); est retiré
</script>
