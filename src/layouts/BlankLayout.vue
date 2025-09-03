<script setup>
import Snackbar from '../components/Snackbar.vue';
</script>

<template>
  <v-app>
    <Snackbar />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
</style>
