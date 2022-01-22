<template>
  <h2>Home Page</h2>
</template>

<script lang="ts" setup>
  import { useHomeStore } from '@/store/home'
  const homeStore = useHomeStore()
  const name = homeStore.name
  console.log(name);

</script>

<style lang="scss" scoped></style>
