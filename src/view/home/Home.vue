<template>
  <div class="home h-full bg-sky-300">
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <Three></Three>
  </div>
</template>

<script lang="ts" setup>
import { useHomeStore } from '@/store/home'
import Three from '@/baseComponents/Three/Three.vue'

const homeStore = useHomeStore()
const name = homeStore.name
console.log(name)
</script>

<style lang="scss" scoped></style>
