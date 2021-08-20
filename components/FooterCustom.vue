<template>
  <div class="px-3 py-10 w-full bg-gray-100">
    <footer>
      <div
        class="
          flex flex-col
          items-center
          justify-between
          space-x-4 space-y-10
          lg:flex-row lg:space-y-0
        "
      >
        <div>
          <h3>Marques partenaires</h3>
          <div class="flex flex-wrap space-x-2">
            <img
              width="120"
              class="object-contain"
              src="~/assets/img/decleor.png"
            />
            <img
              width="120"
              class="object-contain"
              src="~/assets/img/sultane.png"
            />
            <img
              width="120"
              class="object-contain"
              src="~/assets/img/lpg.png"
            />
            <img
              width="120"
              class="object-contain"
              src="~/assets/img/shellac.png"
            />
          </div>
        </div>
        <div class="flex flex-col flex-shrink-0 items-center space-y-2">
          <div class="flex space-x-4">
            <a
              href="https://www.facebook.com/avbinstituts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width="24" height="24" src="~/assets/img/facebook.svg" />
            </a>
            <a
              href="https://www.instagram.com/laccordparfaitinstitut/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width="24" height="24" src="~/assets/img/instagram.svg" />
            </a>
            <a
              href="https://g.page/laccordparfaitinstitut?share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width="24" height="24" src="~/assets/img/google.svg" />
            </a>
          </div>
          <div class="self-center">89 Rue de la Pompe - 75116 Paris</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class FooterCustom extends Vue {}
</script>
