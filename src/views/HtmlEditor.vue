<script setup lang="ts">
import Ctrl from '@/components/htmleditor/Ctrl.vue';
import Page from '@/components/htmleditor/Page.vue';


</script>

<template>
  
  <div class=" grow-1 shrink-1 w-full h-full overflow-scroll">
    <Page class=""></Page>
</div>
<div class=" shrink-0 grow-0 z-0 border-0 border-dashed border-blue-100 shadow-md p-2 w-96">
  <Ctrl></Ctrl>
</div>
    
</template>
