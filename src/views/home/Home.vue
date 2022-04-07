<template>
  <div class="home px-8 h-full">
    <v-carousel class="rounded-xl" height="400" hide-delimiters progress="primary">
      <v-carousel-item
        v-for="(slide, i) in ['First', 'Second', 'Third', 'Fourth', 'Fifth']"
        :key="i"
      >
        <v-sheet height="100%">
          <div class="flex fill-height justify-center align-center">
            <div class="text-h2">{{ slide }} Slide</div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div class="module-data text-black">
      <div class="title leading-[8rem] text-2xl font-bold">模块数据</div>
      <div class="content h-64 grid grid-cols-4 grid-rows-1 gap-x-6">
        <div class="data relative">
          <div class="total-views">
            <div class="text-4xl font-bold">15251</div>
            <span class="text-sm">总访问量</span>
          </div>
          <div class="today-views mt-8">
            <div class="text-4xl font-bold">28</div>
            <span class="text-sm">今日访问量</span>
          </div>
          <div class="social absolute bottom-0 flex">
            <div
              class="icon border-slate-600 hover:border-[#22bf58] hover:bg-[#22bf58] hover:text-white"
            >
              <SvgIcon name="weiChat" :size="1.3"></SvgIcon>
            </div>
            <a href="https://github.com/Fate-ui?tab=repositories" target="_blank">
              <div class="icon border-slate-600 hover:border-black hover:bg-black hover:text-white">
                <SvgIcon name="github" :size="1.3"></SvgIcon>
              </div>
            </a>
          </div>
        </div>
        <v-hover v-for="i in 3" v-slot="{ isHovering, props }" close-delay="200">
          <v-card
            :elevation="isHovering ? 16 : 2"
            class="h-72 !rounded-2xl"
            :class="{ 'on-hover': isHovering }"
            v-bind="props"
          >
            <div class="flex flex-col justify-between h-full p-4">
              <v-card-title class="flex justify-between text-white">
                <div class="shrink-0 grid place-items-center w-12 h-12 rounded-lg bg-emerald-500">
                  <SvgIcon name="homeShare" :size="2"></SvgIcon>
                </div>
                <span class="text-2xl text-emerald-500">77</span>
              </v-card-title>
              <v-card-title>
                <span class="font-bold">个人分享</span>
              </v-card-title>
              <v-card-subtitle class="">我的日常记录，平时所想、记录旅游、摄影…</v-card-subtitle>
              <v-card-actions class="flex flex-row-reverse !items-end">
                <v-btn
                  type="primary"
                  class="!bg-emerald-400"
                  color="white"
                  :icon="mdiArrowRightBold"
                ></v-btn>
              </v-card-actions>
            </div>
          </v-card>
        </v-hover>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useHomeStore } from '@/store/home'
import { mdiArrowRightBold } from '@mdi/js'

const homeStore = useHomeStore()
const name = homeStore.name
console.log(name)
</script>

<style lang="scss" scoped>
@tailwind components;

@layer components {
  .icon {
    @apply grid place-items-center w-8 h-8 mr-4 rounded-lg border-solid border cursor-pointer;
  }
}
</style>
