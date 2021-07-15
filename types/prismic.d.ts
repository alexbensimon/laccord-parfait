import { DefaultClient } from "prismic-javascript/types/client";
import ResolvedApi from "prismic-javascript/types/ResolvedApi";

type ThenArg<T> = T extends Promise<infer U> ? U : T;
type PrismicAPIPromise = Promise<ResolvedApi>;
type PrismicAPI = { api: ThenArg<PrismicAPIPromise> };

type ElementType =
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  | "paragraph"
  | "preformatted"
  | "strong"
  | "em"
  | "list-item"
  | "o-list-item"
  | "group-list-item"
  | "group-o-list-item"
  | "image"
  | "embed"
  | "hyperlink"
  | "label"
  | "span";

type Elements = { [key in ElementType]: string };

type HTMLSerializer<T> = (
  type: ElementType,
  element: any,
  text: string | null,
  children: T[],
  index: number
) => T;

interface RichText {
  Elements: Elements;
  asHtml(
    richText: any,
    linkResolver?: (doc: any) => string,
    serializer?: HTMLSerializer<string>
  ): string;
  asText(richText: any, joinString?: string): string;
}

interface Link {
  id?: string;
  url(link: any, linkResolver?: (doc: any) => string): string;
}

interface VuePrismic {
  endpoint: string;
  linkResolver: (doc: any) => string;
  htmlSerializer: HTMLSerializer<string>;
  client: DefaultClient;
  richTextAsPlain: (field: string) => string;
  asHtml: (richText: RichText) => string;
  asText: (richText: RichText) => string;
  asLink: (link: Link) => string;
  asDate: (date: string) => string;
}

type PrismicVue<T> = VuePrismic & T;

declare module "vue/types/vue" {
  interface Vue {
    $prismic: PrismicVue<PrismicAPI>;
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $prismic: PrismicVue<PrismicAPI>;
  }
  interface Context {
    $prismic: PrismicVue<PrismicAPI>;
  }
}

declare module "vuex/types/index" {
  interface Store<S> {
    $prismic: PrismicVue<PrismicAPI>;
  }
}
