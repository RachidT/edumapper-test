<template>
  <div>
    <header class="pt-4 mb-4">
      <h1 class="font-bold text-2xl mb-2 px-4">Edumapper*</h1>
      <div class="w-full bg-neutral-200 h-1.5">
        <div class="bg-black h-1.5" style="width: 100%"></div>
      </div>
    </header>

    <div class="px-4">
      <h2 class="font-bold text-2xl mb-4">
        Tes chances d'admission aux formations
      </h2>

      <p class="text-xs text-neutral-600 mb-6 leading-relaxed">
        Cette estimation provient de calculs rigoureux fondés sur les
        caractéristiques de ton profil et les statistiques passées de cette
        formation. Elle est fournie à titre indicatif et ne garantit en aucun
        cas la décision d'admission de l'établissement.
      </p>

      <div class="text-center mb-6">
        <button
          class="bg-white text-neutral-900 font-semibold rounded-full px-6 py-2 shadow transition hover:bg-neutral-100 flex items-center justify-center gap-2 mx-auto border border-neutral-400"
          @click="navigateToProfile"
        >
          <!-- Icône crayon (SVG inline, car les icônes ne fonctionnent pas pour l'instant) -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z"
            />
          </svg>
          <span>Modifier mon profil</span>
        </button>
      </div>

      <FormationCard
        v-for="formation in formations"
        :key="formation.id"
        :id="formation.id"
        :schoolName="formation.schoolName"
        :location="formation.location"
        :formationName="formation.formationName"
        :chanceLevel="formation.chanceLevel"
        :confidenceLevel="formation.confidenceLevel"
        @delete="handleDeleteFormation"
      />

      <div class="mt-8 mb-4 text-center">
        <button
          class="bg-black text-white font-semibold rounded-full px-8 py-3 transition hover:bg-neutral-800 flex items-center justify-center gap-2 mx-auto"
          @click="showAddFormationModal = true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          <span>Ajouter une autre formation</span>
        </button>
      </div>
    </div>

    <Modal :show="showAddFormationModal" @close="showAddFormationModal = false">
      <AddFormationForm
        v-model:schoolName="newFormation.schoolName"
        v-model:city="newFormation.city"
        v-model:formationName="newFormation.formationName"
        @submit="handleAddFormationSubmit"
      />
    </Modal>

    <CalculationLoader v-if="showLoader" @loaded="handleCalculationLoaded" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import FormationCard from "~/components/FormationCard.vue";
import Modal from "~/components/Modal.vue";
import AddFormationForm from "~/components/AddFormationForm.vue";
import CalculationLoader from "~/components/CalculationLoader.vue";

const router = useRouter();

const showAddFormationModal = ref(false);
const showLoader = ref(false);

// Valeurs initiales pour le formulaire d'ajout
const newFormation = ref({
  schoolName: "",
  city: "",
  formationName: "",
});

const generateUniqueId = () => Math.random().toString(36).substr(2, 9);

const formations = ref([
  {
    id: generateUniqueId(),
    schoolName: "SKEMA",
    location: "Lille",
    formationName: "BBA - Global Management",
    chanceLevel: "tres_elevees",
    confidenceLevel: 5,
  },
  {
    id: generateUniqueId(),
    schoolName: "EDHEC Business School",
    location: "Paris",
    formationName: "International BBA - Parcours Business Management",
    chanceLevel: "elevees",
    confidenceLevel: 4,
  },
  {
    id: generateUniqueId(),
    schoolName: "IPAG Business School",
    location: "Grenoble",
    formationName: "International BBA - Parcours Business Management",
    chanceLevel: "faibles",
    confidenceLevel: 3,
  },
  {
    id: generateUniqueId(),
    schoolName: "ICN Business School",
    location: "Puteaux",
    formationName: "IBBA - Manager International",
    chanceLevel: "moyennes",
    confidenceLevel: 3,
  },
]);

function navigateToProfile() {
  router.push("/");
}

function handleAddFormationSubmit(data: {
  schoolName: string;
  city: string;
  formationName: string;
}) {
  showAddFormationModal.value = false;
  showLoader.value = true;

  setTimeout(() => {
    const randomChanceLevel = [
      "tres_elevees",
      "elevees",
      "moyennes",
      "faibles",
    ][Math.floor(Math.random() * 4)] as
      | "tres_elevees"
      | "elevees"
      | "moyennes"
      | "faibles";
    const randomConfidenceLevel = Math.floor(Math.random() * 5) + 1; // Entre 1 et 5

    formations.value.push({
      id: `new-${generateUniqueId()}`,
      schoolName: data.schoolName,
      location: data.city,
      formationName: data.formationName,
      chanceLevel: randomChanceLevel,
      confidenceLevel: randomConfidenceLevel,
    });

    newFormation.value = { schoolName: "", city: "", formationName: "" };

    showLoader.value = false; // Masque le loader une fois la formation ajoutée
  }, 2500); // Délai de 2.5 secondes pour simuler le calcul
}

function handleDeleteFormation(idToDelete: string) {
  // Seules les formations dont l'ID commence par 'new-' peuvent être supprimées
  // afin de conserver les formations statiques présentes dans la maquette
  if (idToDelete.startsWith("new-")) {
    formations.value = formations.value.filter((f) => f.id !== idToDelete);
  }
}

function handleCalculationLoaded() {}
</script>
