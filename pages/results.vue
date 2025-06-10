<template>
  <div>
    <header class="pt-4 mb-4">
      <h1 class="font-bold text-2xl mb-2 px-4">Edumapper*</h1>
      <!-- Barre de progression à 100% pour la page de résultats -->
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

      <!-- Ici viendront les cartes de formation -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function navigateToProfile() {
  router.push("/");
}
</script>
