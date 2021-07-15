<template>
  <section class="full-width-image content-section mt-20">
    <prismic-image :field="slice.primary.image" />
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component
export default class FullWidthImage extends Vue {
  @Prop({ required: true }) slice!: Record<string, unknown>;
}
</script>

<style lang="sass" scoped>
@media (max-width: 767px)
  .content-section
    margin-bottom: 2rem
</style>
