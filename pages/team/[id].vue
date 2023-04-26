<template>
  <b>{{ route.params.id }}</b>
  <div>ola</div>
</template>

<script lang="ts" setup>
const route = useRoute()

console.log(route)
</script>

<style scoped>

</style>
