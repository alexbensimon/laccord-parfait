<template>
  <div class="container">
    <!-- Slice section template -->
    <section v-for="(slice, index) in slices" :key="'slice-' + index">
      <!-- Text slice component -->
      <template v-if="slice.slice_type === 'text_section'">
        <text-slice :slice="slice" />
      </template>
      <!-- Quote slice component -->
      <template v-else-if="slice.slice_type === 'quote'">
        <quote-slice :slice="slice" />
      </template>
      <!-- Full Width Image slice component -->
      <template v-else-if="slice.slice_type === 'full_width_image'">
        <full-width-image :slice="slice" />
      </template>
      <!-- Image Gallery slice component -->
      <template v-else-if="slice.slice_type === 'image_gallery'">
        <image-gallery :slice="slice" />
      </template>
      <!-- Image Highlight slice component -->
      <template v-else-if="slice.slice_type === 'image_highlight'">
        <image-highlight :slice="slice" />
      </template>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

// Imports for all slices
const TextSlice = () => import("./slices/TextSlice.vue");
const QuoteSlice = () => import("./slices/QuoteSlice.vue");
const FullWidthImage = () => import("./slices/FullWidthImage.vue");
const ImageGallery = () => import("./slices/ImageGallery.vue");
const ImageHighlight = () => import("./slices/ImageHighlight.vue");

export type Slice = {
  // eslint-disable-next-line camelcase
  slice_type:
    | "text_section"
    | "quote"
    | "full_width_image"
    | "image_gallery"
    | "image_highlight";
};

@Component({
  components: {
    TextSlice,
    QuoteSlice,
    FullWidthImage,
    ImageGallery,
    ImageHighlight,
  },
})
export default class SlicesBlock extends Vue {
  @Prop({ required: true }) slices!: Array<Slice>;
}
</script>
