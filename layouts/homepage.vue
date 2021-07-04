<template>
  <div class="homepage">
    <header-prismic />
    <nuxt />
  </div>
</template>

<script>
import HeaderPrismic from "~/components/HeaderPrismic.vue";

export default {
  components: {
    HeaderPrismic,
  },
  head() {
    return {
      title: "L'accord parfait",
    };
  },
  // Called before rendering the layout (even for error page)
  async middleware({ store, $prismic }) {
    await store.dispatch("fetchMenu", $prismic);
  },
};
</script>
