<script setup>
const emit = defineEmits(['save', 'cancel'])

const roleItems = [
  {
    title: 'Admin',
    value: 'ADMIN'
  },
  {
    title: 'Sales',
    value: 'SALES'
  }
]

const handleSave = () => {
  emit('save')
}

const handleCancel = () => {
  emit('cancel')
}
</script>

<template>
  <v-form @submit.prevent="handleSave()">
    <v-row>
      <v-col
        cols="12"
        lg="6"
        class="py-1">
        <label for="user-form-username"> Username </label>
        <v-text-field
          density="compact"
          variant="outlined" />
      </v-col>
      <v-col
        cols="12"
        lg="6"
        class="py-1">
        <label for="user-form-password"> Password </label>
        <v-text-field
          type="password"
          density="compact"
          variant="outlined" />
      </v-col>
      <v-col
        cols="12"
        lg="6"
        class="py-1">
        <label for="user-form-first-name"> First Name </label>
        <v-text-field
          density="compact"
          variant="outlined" />
      </v-col>
      <v-col
        cols="12"
        lg="6"
        class="py-1">
        <label for="user-form-last-name"> Last Name </label>
        <v-text-field
          density="compact"
          variant="outlined" />
      </v-col>
      <v-col
        cols="12"
        class="py-1">
        <label for="user-form-email"> Email </label>
        <v-text-field
          density="compact"
          variant="outlined" />
      </v-col>
      <v-col
        cols="12"
        class="py-1">
        <label for="user-form-role"> Role </label>
        <v-autocomplete
          :items="roleItems"
          item-title="title"
          item-value="value"
          density="compact"
          variant="outlined" />
      </v-col>
    </v-row>
    <div class="d-flex ga-4">
      <v-btn
        type="submit"
        color="primary"
        variant="flat">
        Save
      </v-btn>
      <v-btn
        color="grey"
        variant="flat"
        @click="handleCancel()">
        Cancel
      </v-btn>
    </div>
  </v-form>
</template>

<style scoped>
</style>
