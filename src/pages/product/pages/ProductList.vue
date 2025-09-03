<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import { useAuthStore } from '../../../stores/auth';
import { useRouter } from 'vue-router';
import axios from 'axios';

const authStore = useAuthStore()
const router = useRouter()

const headers = [
  {
    title: 'Name',
    value: 'name'
  },
  {
    title: 'Price',
    value: 'price'
  },
  {
    title: 'Category',
    key: 'category',
    value: (item) => {
      return item.category.name
    }
  },
  {
    title: 'Tags',
    value: 'tags',
  },
  {
    title: 'Status',
    value: 'status'
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

const getProductByPaginate = async () => {
  loading.value = true
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`, {
      headers: {
        Authorization: `Bearer ${userAccessToken.value}`
      }
    })
    items.value = response.data.data.docs
    filter.totalPages = response.data.data.totalPages
  } catch (error) {
    console.error('[ERROR] product - get product by paginate', error?.message || error)
  } finally {
    loading.value = false
  }
}

const handleChangePage = () => {
  getProductByPaginate()
}

const goToDetail = (_event, { item: { _id } }) => {
  console.log('item id', _id)
  router.push({ name: 'ProductDetail', params: { id: _id } })
}

onMounted(() => {
  getProductByPaginate()
})
</script>

<template>
  <v-container>
    <div class="d-flex align-center gap-2">
      <h1> Product </h1>
      <v-spacer />
      <!-- <TagCreate @refetch="getProductByPaginate()" /> -->
      <v-btn
        :to="{ name: 'ProductCreate' }"
        variant="flat"
        color="primary">
        <v-icon start> mdi-plus </v-icon>
        Create Product
      </v-btn>
    </div>
    <v-data-table
      :loading="loading"
      :headers="headers"
      :items="items"
      :items-per-page="-1"
      @click:row="goToDetail">
      <template #[`item.tags`]="{ item }">
        <div class="d-flex flex-wrap ga-2">
          <v-chip
            v-for="(tag, i) in item.tags"
            :key="i"
            color="primary">
            {{ tag.name }}
          </v-chip>
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
