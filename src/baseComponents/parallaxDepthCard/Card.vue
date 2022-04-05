<template>
  <div
    class="card-wrap"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="card"
  >
    <div class="card" :style="cardStyle">
      <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
      <div class="card-info">
        <slot name="header"></slot>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { dataImage } = defineProps<{
  dataImage: string
}>()
const card = $ref<HTMLDivElement | null>(null)
const cardState = reactive({
  width: 0,
  height: 0,
  mouseX: 0,
  mouseY: 0,
  mouseLeaveDelay: undefined as number | undefined
})
const cardBgImage = computed(() => ({ backgroundImage: `url(${dataImage})` }))
const mousePX = computed(() => cardState.mouseX / cardState.width)
const mousePY = computed(() => cardState.mouseY / cardState.height)
const cardStyle = computed(() => {
  const rX = mousePX.value * 30
  const rY = mousePY.value * -30
  return {
    transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
  }
})
function handleMouseMove(e: MouseEvent) {
  cardState.mouseX = e.pageX - card!.offsetLeft - cardState.width / 2
  cardState.mouseY = e.pageY - card!.offsetTop - cardState.height / 2
}
const cardBgTransform = computed(() => {
  const tX = mousePX.value * -40
  const tY = mousePY.value * -40
  return {
    transform: `translateX(${tX}px) translateY(${tY}px)`
  }
})
function handleMouseEnter() {
  clearTimeout(cardState.mouseLeaveDelay)
}
function handleMouseLeave() {
  cardState.mouseLeaveDelay = setTimeout(() => {
    cardState.mouseX = 0
    cardState.mouseY = 0
  }, 1000)
}

onMounted(() => {
  cardState.width = card!.offsetWidth
  cardState.height = card!.offsetHeight
})
</script>

<style scoped lang="scss">
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

.card-wrap {
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  // background-color: #fff;

  &:hover {
    .card-info {
      transform: translateY(0);
    }
    .card-info p {
      opacity: 1;
    }
    .card-info,
    .card-info p {
      transition: 0.6s $hoverEasing;
    }
    .card-info:after {
      transition: 5s $hoverEasing;
      opacity: 1;
      transform: translateY(0);
    }
    .card-bg {
      transition: 0.6s $hoverEasing, opacity 5s $hoverEasing;
      opacity: 0.8;
    }
    .card {
      transition: 0.6s $hoverEasing, box-shadow 2s $hoverEasing;
      box-shadow: rgba(white, 0.2) 0 0 40px 5px, rgba(white, 1) 0 0 0 1px,
        rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px, inset white 0 0 0 6px;
    }
  }
}

.card {
  position: relative;
  flex: 0 0 240px;
  width: 240px;
  height: 320px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
    inset rgba(white, 0.5) 0 0 0 6px;
  transition: 1s $returnEasing;
}

.card-bg {
  opacity: 0.5;
  position: absolute;
  top: -20px;
  left: -20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 1s $returnEasing, opacity 5s 1s $returnEasing;
  pointer-events: none;
}

.card-info {
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(40%);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, transparent 0%, rgba(#000, 0.6) 100%);
    background-blend-mode: overlay;
    opacity: 0;
    transform: translateY(100%);
    transition: 5s 1s $returnEasing;
  }
}
</style>
