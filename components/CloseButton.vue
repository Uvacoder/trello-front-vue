<template>
  <button class="button-close" @click="$emit('click')">
    <c-icon name="close" size="10px" color="#6b778c" />
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button-close {
  outline: none;
  background: transparent;
  border: none;
  border-radius: 100%;
  transition: 0.1s linear;
  width: 20px;
  height: 20px;
}
.button-close:hover {
  background: #8f8f8f2a;
}
</style>
