<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import type router from './router';
import { computed, ref } from 'vue';
const route = useRoute();

function isRouteActive(path: string) {
  return route.path === path;
}
const viewportH = ref(window.innerHeight - 40);
window.onresize = () => {
  viewportH.value = window.innerHeight - 40;
};
</script>

<template>
  <div class="flex w-full max-w-full overflow-hidden" :style="{ 'height': viewportH + 'px' }">
    <RouterView />

  </div>
  <header class=" fixed bottom-0 left-0 w-full h-10 leading-10 bg-gray-100">
    <div class="wrapper flex gap-2 h-full">

      <nav v-for="route in $router.getRoutes()" :class="{ 'bg-blue-200': isRouteActive(route.path) }">
        <RouterLink :to="route.path">{{ route.name }}</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
