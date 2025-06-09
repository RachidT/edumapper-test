<template>
  <div>
    <FormStepInput
      v-if="isEditing"
      :title="title"
      :placeholder="placeholder"
      v-model="value"
      @confirmed="handleFormConfirmed"
      @closed="handleFormClosed"
    />

    <FormInfoCard
      v-else
      :title="title"
      :subtitle="displayValue"
      @edit="handleEdit"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import FormStepInput from "~/components/FormStepInput.vue";
import FormInfoCard from "~/components/FormInfoCard.vue";

const props = defineProps<{
  title: string;
  placeholder?: string;
  initialValue?: string | null;
  emptySubtitle?: string;
}>();

const isEditing = ref(false);
const value = ref<string | null>(props.initialValue || null);

const displayValue = computed(() => {
  return value.value && value.value.trim() !== ""
    ? value.value
    : props.emptySubtitle || "À compléter";
});

function handleFormConfirmed(data: string | null) {
  value.value = data;
  isEditing.value = false;
}

function handleFormClosed() {
  isEditing.value = false;
}

function handleEdit() {
  isEditing.value = true;
}
</script>
