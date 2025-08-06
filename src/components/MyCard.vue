<script setup>
const componentName = 'My Card'
</script>

<template>
  <div class="card">
    <slot name="title">
      <h1> Title </h1>
    </slot>
    <hr class="my-2">
    <p>
      <slot
        name="body"
        :component-name="componentName">
        Body
      </slot>
    </p>
    <hr class="my-2">
    <p>
      <slot name="footer">
        Footer
      </slot>
    </p>
  </div>
</template>

<style scoped>
.card {
  padding: 16px;
  border: 1px solid black;
  width: fit-content;
}
</style>
