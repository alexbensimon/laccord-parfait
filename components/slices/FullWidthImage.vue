<template>
  <section class="full-width-image content-section flex justify-center">
    <prismic-image :field="slice.primary.image" />
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

/* eslint-disable camelcase */
type FullWidthImageSliceType = {
  primary: {
    image: Record<string, unknown>;
  };
};

@Component
export default class FullWidthImage extends Vue {
  @Prop({ required: true }) slice!: FullWidthImageSliceType;
}
</script>

<style lang="sass" scoped>
@media (max-width: 767px)
  .content-section
    margin-bottom: 2rem
</style>
