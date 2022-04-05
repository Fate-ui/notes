<template>
  <div class="search-bar">
    <div class="flex align-center h-24 p-8">
      <div class="search-input w-96">
        <v-text-field
          hide-details
          :append-inner-icon="mdiMagnify"
          color="success"
          label="搜索"
          variant="outlined"
          bg-color="white"
          @click:append-inner="handleSearch"
        ></v-text-field>
      </div>
      <div class="avatar"></div>
    </div>
    <div
      class="position-fixed top-0 flex align-center w-full h-24 bg-slate-50 p-8 ml-1 z-10"
      :class="[showFixedSearchBar ? 'block' : 'hidden']"
    >
      <div class="search-input w-96">
        <v-text-field
          hide-details
          :append-inner-icon="mdiMagnify"
          color="success"
          label="搜索"
          variant="outlined"
          bg-color="rgb(226 232 240)"
          @click:append-inner="handleSearch"
        ></v-text-field>
      </div>
      <div class="avatar"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { mdiMagnify } from '@mdi/js'

const { showFixedSearchBar = false } = defineProps<{
  showFixedSearchBar: boolean
}>()
//搜索
function handleSearch() {
  console.log('search')
}
</script>

<style scoped lang="scss"></style>
