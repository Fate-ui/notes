<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</template>

<script lang="ts" setup>
import { useHomeStore } from '@/store/home'
const homeStore = useHomeStore()
const name = homeStore.name
console.log(name)
</script>

<style lang="scss" scoped></style>
