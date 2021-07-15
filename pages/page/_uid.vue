<template>
  <section>
    <!-- Slices block component -->
    <slices-block :slices="slices" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
// Imports for Prismic Slice components
import SlicesBlock from "~/components/SlicesBlock.vue";

@Component({
  components: {
    SlicesBlock,
  },
  head() {
    return {
      title: "L'accord parfait",
    };
  },
  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get post content
      const document = (await $prismic.api.getByUID("page", params.uid)).data;

      return {
        // Set slices as variable
        slices: document.page_content,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  },
})
export default class Page extends Vue {}
</script>
