<template>
  <div id="app" class="container">
    <card
      data-image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
    >
      <template #header>
        <h1>Canyons</h1>
      </template>
      <template #content>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </template>
    </card>
    <card
      data-image="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
    >
      <template #header>
        <h1>Canyons</h1>
      </template>
      <template #content>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </template>
    </card>
    <card
      data-image="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
    >
      <template #header>
        <h1>Canyons</h1>
      </template>
      <template #content>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </template>
    </card>
    <card
      data-image="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop="
    >
      <template #header>
        <h1>Canyons</h1>
      </template>
      <template #content>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </template>
    </card>
  </div>
</template>

<script lang="ts" setup>
import Card from './Card.vue'
</script>

<style scoped lang="scss">
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);
:deep(.card-info) {
  p {
    opacity: 0;
    text-shadow: rgba(black, 1) 0 2px 3px;
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  * {
    position: relative;
    z-index: 1;
  }
  h1 {
    font-family: 'Playfair Display';
    font-size: 36px;
    font-weight: 700;
    text-shadow: rgba(black, 0.5) 0 10px 10px;
  }
}
:deep(.card-wrap) {
  &:hover {
    .card-info p {
      opacity: 1;
    }
    .card-info p {
      transition: 0.6s $hoverEasing;
    }
  }
}
</style>
