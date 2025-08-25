<script setup>
const props = defineProps({
  form: {
    type: Object,
    required: true
  },
  editMode: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits([
  'update:form',
  'submit',
  'close'
])

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

const updateValue = (name, value) => {
  emit('update:form', { name, value })
}

const handleCancel = () => {
  emit('close')
}

const handleSave = () => {
  emit('submit')
}
</script>

<template>
  <v-form @submit.prevent="handleSave()">
    <v-row>
      <v-col
        v-if="!props.editMode"
        cols="12"
        lg="6"
        class="py-1">
        <label for="user-form-username"> Username </label>
        <v-text-field
          id="user-form-username"
          :model-value="props.form.username"
          density="compact"
          variant="outlined"
          @update:model-value="updateValue('username', $event)" />
      </v-col>
      <v-col
        v-if="!props.editMode"
        cols="12"
        lg="6"
        class="py-1">
        <label for="user-form-password"> Password </label>
        <v-text-field
          id="user-form-password"
          :model-value="props.form.password"
          type="password"
          density="compact"
          variant="outlined"
          @update:model-value="updateValue('password', $event)" />
      </v-col>
      <v-col
        cols="12"
        lg="6"
        class="py-1">
        <label for="user-form-first-name"> First Name </label>
        <v-text-field
          id="user-form-first-name"
          :model-value="props.form.firstName"
          density="compact"
          variant="outlined"
          @update:model-value="updateValue('firstName', $event)" />
      </v-col>
      <v-col
        cols="12"
        lg="6"
        class="py-1">
        <label for="user-form-last-name"> Last Name </label>
        <v-text-field
          id="user-form-last-name"
          :model-value="props.form.lastName"
          density="compact"
          variant="outlined"
          @update:model-value="updateValue('lastName', $event)" />
      </v-col>
      <v-col
        cols="12"
        class="py-1">
        <label for="user-form-email"> Email </label>
        <v-text-field
          id="user-form-email"
          :model-value="props.form.email"
          density="compact"
          variant="outlined"
          @update:model-value="updateValue('email', $event)" />
      </v-col>
      <v-col
        cols="12"
        class="py-1">
        <label for="user-form-role"> Role </label>
        <v-autocomplete
          id="user-form-role"
          :model-value="props.form.role"
          :items="roleItems"
          item-title="title"
          item-value="value"
          density="compact"
          variant="outlined"
          @update:model-value="updateValue('role', $event)" />
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
