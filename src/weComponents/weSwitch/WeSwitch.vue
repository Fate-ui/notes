<template>
  <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
</template>

<script lang="scss" setup></script>

<style scoped>
input[type='checkbox'] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 100px;
  height: 50px;
  background: grey;
  display: block;
  border-radius: 50px;
  position: relative;
}

label:after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 45px;
  height: 45px;
  background: #fff;
  border-radius: 45px;
  transition: 0.3s;
}

input:checked + label {
  background: #bada55;
}

input:checked + label:after {
  left: calc(100% - 3px);
  transform: translateX(-100%);
}

label:active:after {
  width: 65px;
}
</style>
