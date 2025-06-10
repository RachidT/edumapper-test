<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      @click.self="$emit('close')"
    >
      <div
        class="bg-white rounded-xl shadow-lg p-6 w-11/12 max-w-md relative"
        @click.stop
      >
        <button
          class="absolute top-4 right-4 text-neutral-400 text-lg leading-none"
          @click="$emit('close')"
        >
          ×
        </button>
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean;
}>();

defineEmits(["close"]);
</script>

<style>
/* Styles de transition pour la modale */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
