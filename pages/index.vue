<template>
  <section>
    <!-- Banner component -->
    <homepage-banner :banner="banner" />
    <!-- Slices block component -->
    <slices-block :slices="slices" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
// Imports for all components
import HomepageBanner from "~/components/HomepageBanner.vue";
import SlicesBlock from "~/components/SlicesBlock.vue";

@Component({
  components: {
    HomepageBanner,
    SlicesBlock,
  },
  layout: "homepage",
  head() {
    return {
      title: "L'accord parfait",
    };
  },
  async asyncData({ $prismic, error }) {
    try {
      // Query to get the home page content
      const homepage = (await $prismic.api.getSingle("homepage")).data;

      return {
        // Page content
        banner: homepage.homepage_banner[0],
        // Set slices as variable
        slices: homepage.page_content,
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
})
export default class Home extends Vue {}
</script>
