<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import UserCreate from './components/UserCreate.vue';
import UserEdit from './components/UserEdit.vue';
import axios from 'axios';
import { useAuthStore } from '../../stores/auth';

import ConsentDelete from '../../components/ConsentDelete.vue'

const authStore = useAuthStore()

const headers = [
  {
    title: 'Name',
    value: 'fullName'
  },
  {
    title: 'E-mail',
    value: 'email'
  },
  {
    title: 'Role',
    value: 'role'
  },
  {
    title: '',
    value: 'actions'
  }
]
const items = ref([])
const loading = ref(false)
const filter = reactive({
  page: 1,
  limit: 10,
  totalPages: 1
})

const userAccessToken = computed(() => authStore.userAccessToken)

const getUserByPaginate = async () => {
  loading.value = true
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/users`, {
      headers: {
        Authorization: `Bearer ${userAccessToken.value}`
      }
    })
    items.value = response.data.data.docs
    filter.totalPages = response.data.data.totalPages
  } catch (error) {
    console.error('[ERROR] user - get user by paginate', error?.message || error)
  } finally {
    loading.value = false
  }
}

const deleteUser = async (id) => {
  loading.value = true
  try {
    await axios.delete(`${import.meta.env.VITE_API_URL}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${userAccessToken.value}`
      }
    })
    getUserByPaginate()
  } catch (error) {
    console.error('[ERROR] user - delete user', error?.message || error)
  } finally {
    loading.value = false
  }
}

const handleChangePage = () => {
  getUserByPaginate()
}

onMounted(() => {
  getUserByPaginate()
})
</script>

<template>
  <v-container>
    <div class="d-flex align-center gap-2">
      <h1> User Page </h1>
      <v-spacer />
      <UserCreate @refetch="getUserByPaginate()" />
    </div>
    <v-data-table
      :loading="loading"
      :headers="headers"
      :items="items"
      :items-per-page="-1">
      <template #[`item.fullName`]="{ item }">
        {{ item.firstName }} {{ item.lastName }}
      </template>
      <template #[`item.actions`]="{ item }">
        <div class="d-flex ga-2">
          <UserEdit
            :id="item._id"
            @refetch="getUserByPaginate()" />
          <ConsentDelete @confirm="deleteUser(item._id)" />
        </div>
      </template>
      <template #bottom>
        <div class="d-flex justify-end">
          <v-pagination
            v-model="filter.page"
            :length="filter.totalPages"
            :total-visible="5"
            @update:model-value="handleChangePage" />
        </div>
      </template>
    </v-data-table>
  </v-container>
</template>

<style scoped>
</style>
