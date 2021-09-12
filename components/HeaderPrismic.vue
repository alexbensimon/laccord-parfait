<template>
  <div class="pb-5 pt-4 bg-tundora" :class="{ 'md:p-0': !isRootRoute }">
    <header
      class="
        site-header
        flex flex-col
        items-center
        justify-center
        text-center
        md:flex-row
      "
      :class="isRootRoute ? 'sm:justify-end' : 'sm:justify-between'"
    >
      <nuxt-link v-if="!isRootRoute" to="/">
        <img
          class="inline-block w-72 md:mt-3"
          :src="$store.state.menu.logo.url"
        />
      </nuxt-link>
      <nav>
        <ul class="space-x-5 sm:space-x-10">
          <li
            v-for="menuLink in $store.state.menu.menu_links"
            :key="menuLink.id"
          >
            <prismic-link :field="menuLink.link">{{
              $prismic.asText(menuLink.label)
            }}</prismic-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class HeaderPrismic extends Vue {
  isRootRoute = this.$nuxt.$route.path === "/";
}
</script>

<style lang="sass">
.site-header
  color: #484d52
  font-weight: 700
  a
    color: #fff
    font-weight: 700
  nav a:hover
    color: #c4a35d

.site-header
  nav
    float: right
    ul
      margin: 0
      padding-left: 0
    li
      display: inline-block

@media (max-width: 1060px)
  .site-header
    padding-left: 20px
    padding-right: 20px
</style>
