<template>
  <div>
    <Transition name="fade-slide" mode="out-in">
      <div :key="isEditing">
        <FormStepClass
          v-if="isEditing"
          :selectedClass="classValue"
          :selectedBac="bacValue"
          @update:selectedClass="classValue = $event"
          @update:selectedBac="bacValue = $event"
          @confirmed="handleFormConfirmed"
          @closed="handleFormClosed"
        />

        <FormInfoCard
          v-else
          title="Classe"
          :subtitle="displayClassAndBac"
          @edit="handleEdit"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import FormStepClass from "~/components/FormStepClass.vue";
import FormInfoCard from "~/components/FormInfoCard.vue";

const isEditing = ref(false);

const classValue = ref<string | null>(null);
const bacValue = ref<string | null>(null);

const displayClassAndBac = computed(() => {
  if (classValue.value && bacValue.value) {
    return `${classValue.value} ${bacValue.value}`;
  }
  return "À compléter";
});

function handleFormConfirmed(data: {
  class: string | null;
  bac: string | null;
}) {
  classValue.value = data.class;
  bacValue.value = data.bac;
  isEditing.value = false;
}

function handleFormClosed() {
  isEditing.value = false;
}

function handleEdit() {
  isEditing.value = true;
}
</script>
