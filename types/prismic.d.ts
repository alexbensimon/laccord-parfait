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

<ref *1> Vue {
  _uid: 881,
  _isVue: true,
  '$options': {
    components: Object <Object <Complex prototype>> {},
    directives: Object <Object <Complex prototype>> {},
    filters: Object <Object <Complex prototype>> {},
    _base: [Function: Vue] {
      util: [Object],
      set: [Function: set],
      delete: [Function: del],
      nextTick: [Function: nextTick],
      observable: [Function (anonymous)],
      options: [Object],
      use: [Function (anonymous)],
      mixin: [Function (anonymous)],
      cid: 0,
      extend: [Function (anonymous)],
      component: [Function (anonymous)],
      directive: [Function (anonymous)],
      filter: [Function (anonymous)],
      version: '2.6.14',
      _installedPlugins: [Array],
      __vuemeta_installed: true,
      __nuxt__fetch__mixin__: true,
      __original_use__: [Function (anonymous)],
      __install_times__: 2,
      '__nuxt_$config_installed__': true,
      '__nuxt_$prismic_installed__': true
    },
    beforeCreate: [
      [Function: beforeCreate],
      [Function: vuexInit],
      [Function: beforeCreate]
    ],
    destroyed: [ [Function: destroyed] ],
    created: [ [Function: created] ],
    computed: {
      api: [Function: api],
      apiEndpoint: [Function: apiEndpoint],
      predicates: [Function: predicates],
      dom: [Function: dom]
    },
    methods: {
      asHtml: [Function: asHtml],
      asText: [Function: asText],
      asLink: [Function: asLink],
      asDate: [Function: asDate],
      preview: [AsyncFunction: preview],
      linkResolver: [Function (anonymous)],
      htmlSerializer: [Function (anonymous)]
    }
  },
  _renderProxy: [Circular *1],
  _self: [Circular *1],
  '$parent': undefined,
  '$root': [Circular *1],
  '$children': [],
  '$refs': {},
  _watcher: null,
  _inactive: null,
  _directInactive: false,
  _isMounted: false,
  _isDestroyed: false,
  _isBeingDestroyed: false,
  _events: [Object: null prototype] { 'hook:beforeMount': [ [Function] ] },
  _hasHookEvent: true,
  _vnode: null,
  _staticTrees: null,
  '$vnode': undefined,
  '$slots': {},
  '$scopedSlots': {},
  _c: [Function (anonymous)],
  '$createElement': [Function (anonymous)],
  '$attrs': [Getter/Setter],
  '$listeners': [Getter/Setter],
  _routerRoot: [Circular *1],
  _watchers: [],
  asHtml: [Function: bound asHtml],
  asText: [Function: bound asText],
  asLink: [Function: bound asLink],
  asDate: [Function: bound asDate],
  preview: [Function: bound preview] AsyncFunction,
  linkResolver: [Function: bound ],
  htmlSerializer: [Function: bound ],
  _data: {},
  _computedWatchers: [Object: null prototype] {},
  api: [Getter/Setter],
  apiEndpoint: [Getter/Setter],
  predicates: [Getter/Setter],
  dom: [Getter/Setter]
}
