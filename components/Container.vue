<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    full: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style>
.container {
}
</style>
