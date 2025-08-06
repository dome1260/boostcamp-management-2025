<script setup>
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
    <h1> User Page </h1>
    <v-data-table
      :headers="headers"
      :items="items">
      <template #[`item.fullName`]="{ item }">
        {{ item.firstName }} {{ item.lastName }}
      </template>
      <template #[`item.age`]="{ item }">
        {{ item.age }} year
      </template>
    </v-data-table>
  </v-container>
</template>

<style scoped>
</style>
