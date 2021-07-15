<template>
  <header
    class="site-header flex items-center mt-5"
    :class="isRootRoute ? 'justify-end' : 'justify-between'"
  >
    <nuxt-link v-if="!isRootRoute" to="/">
      <img class="w-72 inline-block mt-5" :src="$store.state.menu.logo.url" />
    </nuxt-link>
    <nav>
      <ul>
        <li v-for="menuLink in $store.state.menu.menu_links" :key="menuLink.id">
          <prismic-link :field="menuLink.link">{{
            $prismic.asText(menuLink.label)
          }}</prismic-link>
        </li>
      </ul>
    </nav>
  </header>
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
  height: 30px
  padding: 20px 0
  color: #484d52
  font-weight: 700
  a
    color: #1A1919
    font-weight: 700
  nav a:hover
    color: #72767B

.site-header
  nav
    float: right
    ul
      margin: 0
      padding-left: 0
    li
      display: inline-block
      margin-left: 40px

@media (max-width: 1060px)
  .site-header
    padding-left: 20px
    padding-right: 20px

@media (max-width: 767px)
  .site-header
    height: auto

  .homepage .site-header
    position: absolute
    left: 0
    right: 0

  .site-header
    .logo
      display: block
      text-align: center
    nav
      float: none
      text-align: center
      li
        display: inline-block
        margin-left: 10px
        margin-right: 10px
</style>
