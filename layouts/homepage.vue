<template>
  <div class="homepage">
    <header-prismic />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import HeaderPrismic from "~/components/HeaderPrismic.vue";

@Component({
  components: { HeaderPrismic },
  head() {
    return {
      title: "L'accord parfait",
    };
  },
  // Called before rendering the layout (even for error page)
  async middleware({ store, $prismic }) {
    await store.dispatch("fetchMenu", $prismic);
  },
})
export default class HomepageLayout extends Vue {}
</script>
