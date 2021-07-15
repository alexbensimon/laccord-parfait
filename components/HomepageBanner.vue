<template>
  <section
    class="homepage-banner mb-20 -mt-16 pt-20 pb-20 space-y-4"
    :style="{
      backgroundImage: 'url(' + banner.image.url + ')',
    }"
  >
    <img class="max-w-lg inline-block" :src="$store.state.menu.logo.url" />

    <!-- Template for page title. -->
    <div class="banner-content container">
      <h2 class="banner-title">
        {{ $prismic.asText(banner.title) }}
      </h2>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component
export default class HomepageBanner extends Vue {
  @Prop({ required: true }) banner!: Record<string, unknown>;
}
</script>

<style lang="sass" scoped>
.homepage-banner
  background-position: center center
  background-size: cover
  color: #ffffff
  line-height: 1.75
  text-align: center

.banner-content
  text-align: center

.banner-title, .banner-description
  width: 90%
  max-width: 800px
  margin-left: auto
  margin-right: auto

.banner-title
  color: #1A1919
  font-size: 70px
  font-weight: 900
  line-height: 70px

.banner-button
  background: #AA9461
  border-radius: 7px
  color: #fff
  font-size: 14px
  font-weight: 700
  padding: 15px 40px
  &:hover
    background: #c8c9cb

@media (max-width: 767px)
  .homepage-banner
    margin: 0 0 40px
    padding: 10em 0 6em
  .banner-title
    font-size: 50px
    line-height: 50px
</style>
