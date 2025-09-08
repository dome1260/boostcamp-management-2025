<script setup>
import { computed } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'

const authStore = useAuthStore()
const router = useRouter()
const displayBreakpoint = useDisplay()

const handelLogout = () => {
  authStore.clearUser()
  router.push({ name: 'LoginPage' })
}

const isMobile = computed(() => displayBreakpoint.mobile.value)
</script>

<template>
  <v-app-bar>
    <template #prepend>
      <v-app-bar-nav-icon v-if="isMobile" />
    </template>
    <v-container class="d-flex justify-space-between align-center ga-2">
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
