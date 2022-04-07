<template>
  <Dashboard class="h-screen overflow-hidden"></Dashboard>
  <div @scroll="handleScroll" class="main grow bg-slate-200 overflow-y-auto overflow-x-hidden">
    <SearchBar
      id="searchBar"
      :showFixedSearchBar="showFixedSearchBar"
      class="bg-slate-200 z-10"
    ></SearchBar>
    <router-view :key="key" class="grow" v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :key="route.path" :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
    <Footer></Footer>
  </div>
</template>

<script lang="ts" setup>
import Dashboard from '@/views/dashboard/Dashboard.vue'
import SearchBar from '@/baseComponents/searchBar/SearchBar.vue'
import Footer from '@/baseComponents/footer/Footer.vue'

const showFixedSearchBar = ref(false)
const route = useRoute()
const key = computed(() => route.path)
//监听滚动
function handleScroll(e: any) {
  const scrollTop = e.target.scrollTop
  const scrollHeight = document.getElementById('searchBar')!.scrollHeight
  showFixedSearchBar.value = scrollTop >= scrollHeight + 30
}
</script>

<style lang="scss" scoped>
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
