<template>
  <div class="layout">
    <layout-header></layout-header>
    <main>
      <router-view />
    </main>
    <layout-footer></layout-footer>
  </div>
</template>
<script lang="ts" setup>
import LayoutHeader from './header.vue';
import LayoutFooter from './footer.vue';
</script>