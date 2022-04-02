<template>
  <div class="we-switch">
    <input ref="inputRef" type="checkbox" id="we_switch" @change="handleChange" />
    <label for="we_switch">Toggle</label>
  </div>
</template>

<script lang="ts" setup>
const inputRef = $ref<HTMLInputElement | null>(null)

const emits = defineEmits<{
  (e: 'change', checked: boolean): void
}>()
function handleChange() {
  emits('change', inputRef!.checked)
}
</script>

<style scoped>
.we-switch {
  display: inline-block;
}

input[type='checkbox'] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 50px;
  height: 25px;
  background: grey;
  display: block;
  border-radius: 50px;
  position: relative;
}

label:after {
  content: '';
  position: absolute;
  top: 1px;
  left: 1px;
  width: 23px;
  height: 23px;
  background: #fff;
  border-radius: 23px;
  transition: 0.3s;
}

input:checked + label {
  background: #38bdf8;
}

input:checked + label:after {
  left: calc(100% - 1px);
  transform: translateX(-100%);
}

label:active:after {
  width: 33px;
}
</style>
