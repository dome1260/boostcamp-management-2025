<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';
import { useAuthStore } from '../../../stores/auth';

import UserForm from './UserForm.vue';

const authStore = useAuthStore();

const emit = defineEmits(['refetch']);

const loading = ref(false)
const dialog = ref(false)
const form = ref({
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  email: '',
  role: ''
})

const userAccessToken = computed(() => authStore.userAccessToken)

const close = () => {
  dialog.value = false
}

const updateForm = (_event) => {
  form.value[_event.name] = _event.value
}

const createUser = async () => {
  loading.value = true
  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/users`, form.value, {
      headers: {
        Authorization: `Bearer ${userAccessToken.value}`
      }
    })
    emit('refetch')
    close()
  } catch (error) {
    console.error('[ERROR] user - create user:', error?.message || error);
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <v-dialog
    v-model="dialog"
    width="600">
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        variant="flat"
        color="primary">
        <v-icon> mdi-plus </v-icon>
        Create User
      </v-btn>
    </template>
    <v-card
      :loading="loading"
      class="pa-4">
      <h1 class="mb-4"> Create User </h1>
      <UserForm
        :form="form"
        @update:form="updateForm"
        @submit="createUser()"
        @close="close()" />
    </v-card>
  </v-dialog>
</template>

<style scoped>
</style>
