<template>
  <section class="homepage-banner -mt-16 mb-20 pb-10 pt-14 bg-tundora">
    <div class="inline-block max-w-xl">
      <img class="w-full h-auto" :src="$store.state.menu.logo.url" />
    </div>

    <!-- Template for page title. -->
    <div class="banner-content container px-2">
      <h2 class="text-white text-2xl font-medium">
        {{ $prismic.asText(banner.title) }}
      </h2>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import { RichText } from "~/types/prismic";

export type Banner = {
  title: RichText;
  image: {
    url: string;
  };
};

@Component
export default class HomepageBanner extends Vue {
  @Prop({ required: true }) banner!: Banner;
}
</script>

<style lang="sass" scoped>
.homepage-banner
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

.banner-button
  background: #AA9461
  border-radius: 7px
  color: #fff
  font-size: 14px
  font-weight: 700
  padding: 15px 40px
  &:hover
    background: #c8c9cb
</style>
