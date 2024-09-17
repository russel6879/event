import { d as defineNuxtRouteMiddleware } from './server.mjs';
import 'vue';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'sweetalert2';
import 'vue3-toastify';

const auth = defineNuxtRouteMiddleware((to, from) => {
  return;
});

export { auth as default };
//# sourceMappingURL=auth-C00PNeTz.mjs.map
