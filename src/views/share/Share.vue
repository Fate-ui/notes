<template>
  <div class="share px-4">
    <ul>
      <li class="mb-4">
        <v-hover v-slot="{ isHovering, props }" close-delay="200" class="!mb-8">
          <v-card
            :elevation="isHovering ? 16 : 2"
            :class="{ 'on-hover': isHovering }"
            v-bind="props"
          >
            <router-link to="/share/WinSoftware">
              <div class="card p-3 cursor-pointer">
                <header class="font-bold text-lg">Windows装机必备的一些软件</header>
                <div class="chips">
                  <v-chip color="pink mr-4" size="small">Windows</v-chip>
                  <v-chip color="primary" size="small">必备软件</v-chip>
                </div>
              </div>
            </router-link>
          </v-card>
        </v-hover>
      </li>
      <li class="mb-4">
        <v-hover v-slot="{ isHovering, props }" close-delay="200">
          <v-card
            :elevation="isHovering ? 16 : 2"
            :class="{ 'on-hover': isHovering }"
            v-bind="props"
          >
            <router-link to="/share/usefulWeb">
              <div class="card p-3 cursor-pointer">
                <header class="font-bold text-lg">一些值得收藏的优质软件</header>
                <div class="chips">
                  <v-chip color="green mr-4" size="small">网站</v-chip>
                  <v-chip color="blue" size="small">导航</v-chip>
                </div>
              </div>
            </router-link>
          </v-card>
        </v-hover>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
