<template>
  <section class="content-section">
    <prismic-rich-text :field="slice.primary.gallery_title" />
    <div class="px-3 flex flex-wrap justify-between">
      <div v-for="item in slice.items" :key="item.id" class="w-72 h-96">
        <component
          :is="item.link.id ? 'prismic-link' : 'div'"
          :field="item.link"
        >
          <prismic-image class="w-72 h-72" :field="item.image" />
          <!-- <prismic-rich-text :field="item.image_description" /> -->
          <p class="uppercase text-center mt-2">
            {{ $prismic.asText(item.link_label) }}
          </p>
        </component>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import { Link, RichText } from "~/types/prismic";

/* eslint-disable camelcase */
type ImageGallerySliceType = {
  primary: {
    gallery_title: RichText;
  };
  items: Array<{
    id: string;
    image: Record<string, unknown>;
    image_description: RichText;
    link: Link;
    link_label: RichText;
  }>;
};

@Component
export default class ImageGallery extends Vue {
  @Prop({ required: true }) slice!: ImageGallerySliceType;
}
</script>
