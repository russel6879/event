import { _ as __nuxt_component_0 } from "./client-only-CNnwE-2c.js";
import { ref, watch, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "hookable";
const _sfc_main = {
  __name: "Editor",
  __ssrInlineRender: true,
  props: {
    content: {
      type: String,
      default: ""
    }
  },
  emits: ["update:content"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const localContent = ref(props.content);
    watch(
      () => props.content,
      (newContent) => {
        localContent.value = newContent;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Editor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Editor-C-ab6AWX.js.map
