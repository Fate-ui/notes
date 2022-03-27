<template>
  <svg aria-hidden="true" :style="{ width: size + 'rem', height: size + 'rem' }">
    <use :xlink:href="symbolId" sytle="fill: currentColor;" />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 1
  }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<style lang="scss" scoped>
svg {
  display: inline-block;
  fill: currentColor;
}
</style>
