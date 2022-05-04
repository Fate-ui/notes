<template>
  <div class="mx-4 px-4 py-8 bg-neutral-50 rounded-2xl">
    <h2 class="text-3xl font-bold mb-6">一些值得收藏的软件</h2>
    <ol>
      <li v-for="(item, index) in data" class="mt-4">
        <div class="text-xl">{{ ++index }}. {{ item.title }}</div>
        <span v-for="info in item.items" class="leading-10">
          <a
            @click="handleLink(info.href, info.password)"
            :title="info.password && '跳转链接，密码将自动复制'"
            class="mr-4 text-blue cursor-pointer"
            >{{ info.name }}</a
          >
          <span v-if="info.password" class="mr-6">密码：{{ info.password }}</span>
          <div v-if="info.describe" v-html="info.describe"></div>
        </span>
      </li>
    </ol>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss"></style>
