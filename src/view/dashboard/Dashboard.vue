<template>
  <div class="dashboard flex h-full">
    <div
      class="left flex flex-col justify-between grow-0 w-64 shrink-1 bg-[#f7f7f7] dark:bg-[red] h-full"
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
        <ul class="menu-item pt-4">
          <li
            v-for="item in menuItems"
            :class="{ active: currentMenu === item.icon }"
            @click="handleClick(item.icon)"
          >
            <div class="icon">
              <svg-icon :name="item.icon" :size="1.5"></svg-icon>
            </div>
            <span v-show="showText" class="category">{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <div class="bottom flex flex-col h-32">
        <div class="switch pb-4 text-center">
          <WeSwitch class="px-4" @change="handleChange"></WeSwitch>
          <span v-show="showText">深夜模式</span>
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
    <div class="right grow shrink-1 bg-indigo-300 h-full"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import WeSwitch from '@/weComponents/weSwitch/WeSwitch.vue'

//icons文件下图标名称
type Icon = 'home' | 'share' | 'project' | 'exchange' | 'resource' | 'about'

interface IMenuItem {
  name: string
  icon: Icon
  path: string
}
//菜单项配置
const menuItems: IMenuItem[] = [
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
  },
  {
    name: '技术交流',
    icon: 'exchange',
    path: '/exchange'
  },
  {
    name: '资源下载',
    icon: 'resource',
    path: '/resource'
  },
  {
    name: '关于',
    icon: 'about',
    path: '/about'
  }
]

//点击菜单项
const currentMenu = ref<Icon>('home')
function handleClick(item: Icon) {
  currentMenu.value = item
}

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
.left {
  transition: width 0.3s ease-out;
}
.menu-item {
  color: rgb(163 163 163);

  li {
    display: flex;
    align-items: center;
    height: 3rem;
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
.bottom {
  .fold {
    box-shadow: 0 -1px 0 0 #dcd3d3;
  }
}
</style>
