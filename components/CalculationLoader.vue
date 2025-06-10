<template>
  <div
    class="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 p-4"
  >
    <div class="text-xl font-bold mb-6">Calcul des chances d'admission...</div>
    <div class="w-full max-w-sm bg-neutral-200 rounded-full h-3">
      <div
        class="bg-black h-3 rounded-full transition-all duration-300 ease-linear"
        :style="{ width: progress + '%' }"
      ></div>
    </div>
    <div class="mt-4 text-lg font-medium">{{ Math.round(progress) }}%</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const emit = defineEmits(["loaded"]);

const progress = ref(0);
let interval: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  const duration = 2500;
  const steps = 100;
  const increment = 100 / steps;
  const intervalTime = duration / steps;

  interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += increment;
    } else {
      clearInterval(interval as ReturnType<typeof setInterval>);
      emit("loaded");
    }
  }, intervalTime);
});

onUnmounted(() => {
  if (interval) {
    clearInterval(interval);
  }
});
</script>
