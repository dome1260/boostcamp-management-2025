import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', () => {
  const user = ref({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    role: ''
  })
  const userAuth = ref({
    accessToken: '',
    expiresIn: 0
  })

  const userAccessToken = computed(() => userAuth.value.accessToken)

  const setUser = (payload) => {
    user.value = payload.user
    userAuth.value.accessToken = payload.accessToken
    userAuth.value.expiresIn = payload.expiresIn
  }

  const clearUser = () => {
    user.value = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      role: ''
    }
    userAuth.value = {
      accessToken: '',
      expiresIn: 0
    }
  }

  return {
    user,
    userAuth,
    userAccessToken,
    setUser,
    clearUser
  }
}, {
  persist: {
    key: 'mgmt_auth'
  }
})
