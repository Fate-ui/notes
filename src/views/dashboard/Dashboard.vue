<template>
  <div
    class="dashboard flex w-64 flex-col justify-between shrink-0 bg-slate-100 text-[#a3a3a3]"
    :class="{ 'w-24': folded }"
  >
    <div class="user-info">
      <img
        src="../../assets/images/avatar.jpg"
        alt="用户头像"
        class="avatar mt-8 mx-auto w-20 h-20 rounded-full"
      />
      <div v-show="showText" class="message pt-4 ml-20 text-gray-500 text-sm">
        <div class="use-name text-black text-xl">CoderWeen</div>
        <div class="we-chat">
          <span>微信：</span>
          <span>18784889501</span>
        </div>
        <div class="qq">
          <span>QQ：</span>
          <span>228574227</span>
        </div>
      </div>
    </div>
    <div
      class="menu basis-1/2 tracking-wider text-black"
      :class="[folded ? 'flex justify-center' : 'px-8']"
    >
      <div v-show="showText" class="title text-xl font-bold">菜单</div>
      <ul class="menu-item pt-4 text-[#A3A3A3FF]">
        <router-link
          custom
          v-for="item in menuItems"
          :to="item.path"
          v-slot="{ navigate, isActive }"
        >
          <li
            @click="navigate"
            :class="{ active: isActive }"
            class="flex items-center h-12 cursor-pointer"
          >
            <div class="icon inline-grid place-items-center w-8 h-8 mr-4 rounded-xl">
              <svg-icon :name="item.meta?.icon" :size="1.5"></svg-icon>
            </div>
            <span v-show="showText" class="font-bold">{{ item.meta?.title }}</span>
          </li>
        </router-link>
      </ul>
    </div>
    <div class="bottom flex flex-col h-32">
      <div class="flex justify-center items-center switch pb-4 text-center">
        <label class="toggle-theme-btn">
          <input @change="handleChange" type="checkbox" />
          <span class="slider"></span>
        </label>
        <span v-show="showText" class="ml-3">切换主题</span>
      </div>
      <div class="fold grow grid place-items-center">
        <svg-icon
          @click="handleFold"
          :name="folded ? 'unfold' : 'fold'"
          class="cursor-pointer"
          :size="1.5"
        ></svg-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import WeSwitch from '@/baseComponents/weSwitch/WeSwitch.vue'
import { baseRoutes } from '@/router'
import { RouteRecordRaw } from 'vue-router'

//菜单项配置
const menuItems: RouteRecordRaw[] = baseRoutes.filter((route) => !route.hide)

onMounted(() => {
  // document.documentElement.classList.add('dark')
})

//切换深夜模式
function handleChange(checked: boolean) {
  console.log(checked)
}

//折叠侧边栏
const folded = ref(false)
const showText = ref(true)
function handleFold() {
  folded.value = !folded.value
  if (!folded.value) {
    setTimeout(() => {
      showText.value = true
    }, 150)
  } else {
    showText.value = false
  }
}
</script>

<style scoped lang="scss">
.dashboard {
  transition: width 0.3s ease-out;
}
.menu-item {
  li {
    &.active {
      color: #fff;
      .icon {
        background-color: rgb(56 189 248);
        box-shadow: inset 4px 4px 8px #34aee4, inset -4px -4px 8px #3cccff;
      }
      span {
        color: #000;
      }
    }
  }

  .icon {
    background-color: #f7f7f7;
    box-shadow: 4px 4px 8px #e3e3e3, -4px -4px 8px #ffffff;
  }
}
.bottom {
  .fold {
    box-shadow: 0 -1px 0 0 #dcd3d3;
  }
}
</style>
