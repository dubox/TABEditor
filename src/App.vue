<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TabRow from './components/TabRow.vue';
import type router from './router';

</script>

<template>
  <div class="grid grid-cols-12 gap-4 w-full">
  <header class="col-span-2 bg-slate-800">
    <div class="wrapper ">

      <nav v-for="route in $router.getRoutes()">
        <RouterLink :to="route.path">{{route.name}}</RouterLink>
      </nav>
    </div>
  </header>
  <div class="col-span-10 border-0 border-red-400">
  <RouterView />
  </div>
</div>
</template>

<style scoped>



</style>
