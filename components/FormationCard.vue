<template>
  <div class="rounded-xl shadow mb-4 overflow-hidden">
    <!-- Header de la carte : fond gris -->
    <div class="bg-neutral-50 p-4">
      <div class="flex justify-between items-start">
        <div>
          <div class="text-xs text-neutral-500 mb-0.5">
            {{ schoolName }} | {{ location }}
          </div>
          <div class="font-semibold text-lg text-black">
            {{ formationName }}
          </div>
        </div>
        <button class="text-neutral-400 text-lg leading-none">×</button>
      </div>
    </div>

    <!-- Corps de la carte : fond blanc -->
    <div class="bg-white p-4">
      <div class="mb-3">
        <div class="text-sm text-neutral-700 mb-1">Mes chances</div>
        <div class="flex items-center gap-2 mb-2">
          <!-- Barre de chances (simulée avec 5 segments) -->
          <div class="flex-1 flex gap-0.5">
            <div
              v-for="i in 5"
              :key="i"
              :class="getChanceSegmentClass(i)"
            ></div>
          </div>
          <div :class="getChanceTextClass">
            {{ chanceText }}
            <span v-if="chanceIcon" class="ml-1">{{ chanceIcon }}</span>
          </div>
        </div>
        <button
          class="text-xs font-medium text-black underline flex items-center"
          @click="toggleDetails"
        >
          Voir {{ showDetails ? "moins" : "plus" }}
          <svg
            :class="[
              'w-3 h-3 ml-1 transition-transform',
              { 'rotate-180': showDetails },
            ]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>

      <div v-if="showDetails" class="text-xs text-neutral-600 mb-3">
        Tu n'as pas renseigné ton lycée d'origine, or cette information rentre
        dans l'estimation des chances d'admission, surtout pour les formations
        les plus sélectives. Nous réduisons en conséquence notre indice de
        confiance. Tu peux toujours le renseigner !
      </div>

      <div v-if="showDetails" class="text-xs text-neutral-700">
        Indice de confiance
        <span class="ml-2">{{ confidenceStars }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps<{
  schoolName: string;
  location: string;
  formationName: string;
  chanceLevel: "tres_elevees" | "elevees" | "moyennes" | "faibles";
  confidenceLevel: number; // 1 to 5 stars
}>();

const showDetails = ref(false);

const chanceData = computed(() => {
  switch (props.chanceLevel) {
    case "tres_elevees":
      return { color: "bg-green-400", text: "Très élevées", icon: "⚡" };
    case "elevees":
      return { color: "bg-blue-400", text: "Élevées", icon: "👍" };
    case "moyennes":
      return { color: "bg-purple-400", text: "Moyennes", icon: "😊" };
    case "faibles":
      return { color: "bg-yellow-400", text: "Faibles", icon: "🤏" };
    default:
      return { color: "bg-gray-400", text: "Inconnu", icon: "" };
  }
});

const getChanceSegmentClass = (index: number) => {
  const filledSegments =
    {
      tres_elevees: 5,
      elevees: 4,
      moyennes: 3,
      faibles: 2,
    }[props.chanceLevel] || 0;

  return [
    "h-2 flex-1 rounded-full",
    index <= filledSegments ? chanceData.value.color : "bg-neutral-200",
  ];
};

const getChanceTextClass = computed(() => [
  "text-xs font-semibold",
  chanceData.value.color.replace("bg-", "text-"), // Adapte la couleur du texte à la barre
]);

const chanceText = computed(() => chanceData.value.text);
const chanceIcon = computed(() => chanceData.value.icon);

const confidenceStars = computed(() => {
  let stars = "";
  for (let i = 0; i < 5; i++) {
    stars += i < props.confidenceLevel ? "⭐" : "☆"; // Utilise des étoiles pleines/vides
  }
  return stars;
});

function toggleDetails() {
  showDetails.value = !showDetails.value;
}
</script>
