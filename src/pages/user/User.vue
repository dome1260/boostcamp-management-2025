<script setup>
import UserCreate from './components/UserCreate.vue';
import UserEdit from './components/UserEdit.vue';

const headers = [
  {
    title: 'Name',
    value: 'fullName'
  },
  {
    title: 'Age',
    value: 'age'
  },
  {
    title: 'E-mail',
    value: 'email'
  },
  {
    title: '',
    value: 'actions'
  }
]

const items = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 23,
    email: 'john@mail.com'
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    email: 'jane@mail.com'
  },
  {
    firstName: 'Mark',
    lastName: 'Doe',
    age: 29,
    email: 'mark@mail.com'
  },
  {
    firstName: 'David',
    lastName: 'Doe',
    age: 20,
    email: 'david@mail.com'
  }
]
</script>

<template>
  <v-container>
    <div class="d-flex align-center gap-2">
      <h1> User Page </h1>
      <v-spacer />
      <UserCreate />
    </div>
    <v-data-table
      :headers="headers"
      :items="items">
      <template #[`item.fullName`]="{ item }">
        {{ item.firstName }} {{ item.lastName }}
      </template>
      <template #[`item.age`]="{ item }">
        {{ item.age }} year
      </template>

      <template #[`item.actions`]="{ item}">
        <div class="d-flex ga-4">
          <UserEdit />
          <v-btn
            color="red"
            variant="flat"
            size="32"
            icon>
            <v-icon> mdi-trash-can-outline </v-icon>
          </v-btn>
        </div>
      </template>
    </v-data-table>
  </v-container>
</template>

<style scoped>
</style>
