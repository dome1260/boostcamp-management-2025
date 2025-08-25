<script setup>
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const handelLogout = () => {
  authStore.clearUser()
  router.push({ name: 'LoginPage' })
}
</script>

<template>
  <v-app-bar>
    <v-container class="d-flex justify-space-between align-center ga-2">
      <template #prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>  Navbar </v-app-bar-title>
      <v-menu width="150">
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            variant="flat"
            icon>
            <v-icon>
              mdi-chevron-down
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="handelLogout()">
            Logout
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
</style>
