<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const handleLogin = () => {
  router.push({ name: 'UserPage' });
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
              id="login-username"
              density="compact"
              variant="outlined" />
          </v-col>
          <v-col
            cols="12"
            class="py-1">
            <label for="login-password"> Password </label>
            <v-text-field
              id="login-password"
              type="password"
              density="compact"
              variant="outlined" />
          </v-col>
        </v-row>
        <v-btn
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
