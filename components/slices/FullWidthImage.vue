<template>
  <section class="full-width-image content-section mt-20">
    <prismic-image :field="slice.primary.image" />
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "image-caption-slice",
};
</script>

<style lang="sass" scoped>
@media (max-width: 767px)
  .content-section
    margin-bottom: 2rem
</style>
