<template>
  <div class="dashboard flex h-full">
    <div class="left grow-0 w-64 shrink-1 bg-[#f7f7f7] dark:bg-[red] h-full">
      <div class="user-info">
        <img
          src="../../assets/images/avatar.jpg"
          alt="用户头像"
          class="avatar mt-8 mx-auto w-20 h-20 rounded-full"
        />
        <div class="message pt-4 ml-20 text-gray-500 text-sm">
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
      <div class="menu pt-8 px-8 tracking-wider">
        <div class="title text-xl font-bold">菜单</div>
        <ul class="menu-item pt-4">
          <li
            v-for="item in menuItems"
            :class="{ active: currentMenu === MENU_ITEM[item.icon] }"
            @click="handleClick(MENU_ITEM[item.icon])"
          >
            <div class="icon">
              <svg-icon :name="item.icon" :size="1.5"></svg-icon>
            </div>
            <span class="category">{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <div class="bottom">
        <WeSwitch></WeSwitch>
      </div>
    </div>
    <div class="right grow shrink-1 bg-indigo-300 h-full"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import WeSwitch from '@/weComponents/weSwitch/WeSwitch.vue'

const MENU_ITEM = {
  home: 'HOME',
  share: 'SHARE',
  project: 'PROJECT'
} as const
type ValueOf<T> = T[keyof T]
type StatusVal = ValueOf<typeof MENU_ITEM>

const menuItems = [
  {
    name: '首页',
    icon: 'home',
    path: '/'
  },
  {
    name: '个人分享',
    icon: 'share',
    path: '/share'
  },
  {
    name: '项目',
    icon: 'project',
    path: '/project'
  }
]
const currentMenu = ref<StatusVal>(MENU_ITEM.home)

function handleClick(item: StatusVal) {
  currentMenu.value = item
}

onMounted(() => {
  // document.documentElement.classList.add('dark')
})
</script>

<style scoped lang="scss">
.menu-item {
  color: rgb(163 163 163);

  li {
    display: flex;
    align-items: center;
    line-height: 3rem;
    cursor: pointer;

    &.active {
      color: #fff;

      .icon {
        background-color: rgb(56 189 248);
        box-shadow: inset 4px 4px 8px #34aee4, inset -4px -4px 8px #3cccff;
      }

      .category {
        color: #000;
        font-weight: bold;
      }
    }
  }

  .icon {
    display: inline-grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 0.7rem;
    background-color: #f7f7f7;
    box-shadow: 4px 4px 8px #e3e3e3, -4px -4px 8px #ffffff;
    margin-right: 1rem;
  }
}
</style>
