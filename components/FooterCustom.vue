<template>
  <div class="bg-gray-100 w-full py-10">
    <footer>
      <div class="flex justify-between space-x-4 items-center">
        <div>
          <h3>Marques partenaires</h3>
          <div class="flex space-x-2">
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
        <div class="flex space-x-4">
          <a
            href="https://www.facebook.com/avbinstituts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img width="24" height="24" src="~/assets/img/facebook.svg" />
          </a>
          <a
            href="https://www.instagram.com/lamanucuredeparis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img width="24" height="24" src="~/assets/img/instagram.svg" />
          </a>
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
