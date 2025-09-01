<script setup>
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useAuthStore } from '../../../stores/auth';
import { useNotificationStore } from '../../../stores/notification';

const router = useRouter()
const authStore = useAuthStore()
const notificationStore = useNotificationStore()

const loading = ref(false)
const form = reactive({
  username: '',
  password: ''
})

const handleLogin = async () => {
  loading.value = true
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, form)
    authStore.setUser(response.data.data)
    router.push({ name: 'UserPage' })
  } catch (error) {
    console.error('[ERROR] login - handle login :', error?.message || error)
    notificationStore.showMessage(error?.message || error, 'error')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <v-container class="d-flex justify-center align-center h-screen">
    <v-card
      variant="outlined"
      width="350"
      class="pa-4">
      <h1 class="mb-4"> Login </h1>
      <v-form @submit.prevent="handleLogin()">
        <v-row>
          <v-col
            cols="12"
            class="py-1">
            <label for="login-username"> Username </label>
            <v-text-field
              v-model="form.username"
              id="login-username"
              density="compact"
              variant="outlined" />
          </v-col>
          <v-col
            cols="12"
            class="py-1">
            <label for="login-password"> Password </label>
            <v-text-field
              v-model="form.password"
              id="login-password"
              type="password"
              density="compact"
              variant="outlined" />
          </v-col>
        </v-row>
        <v-btn
          :loading="loading"
          type="submit"
          variant="flat"
          color="primary"
          block>
          Login
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<style scoped>
</style>
