<template>
  <transition name="fade" v-if="isVisible">
    <div class="menu-floating">
      <div class="menu-floating-header">
        <span class="header-title" v-if="title">{{ title }}</span>
        <slot name="title"></slot>
        <close-button @click="clickOutside" />
      </div>
      <div class="menu-floating-body">
        <slot name="menu-body" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "MenuFloating",
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    }
  },
  methods: {
    clickOutside() {
      if (this.isVisible) {
        this.$emit("click-outside");
      }
    }
  },
  watch: {
    isVisible: function (current, old) {
      // if (old === false) {
      //   setTimeout(() => {
      //     document.addEventListener("click", this.clickOutside, false);
      //   }, 250);
      // } else {
      //   document.removeEventListener("click", this.clickOutside, false);
      // }
    }
  }
};
</script>

<style scoped>
.menu-floating {
  position: absolute;
  top: 130%;
  box-shadow: 0 8px 16px -4px rgb(9 30 66 / 25%), 0 0 0 1px rgb(9 30 66 / 8%);
  border-radius: 3px;
  min-width: 250px;
  min-height: 50px;
  background: #fff;
  padding: 15px 10px;
}
.menu-floating-header {
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid #091e4221;
  justify-content: space-between;
  align-items: center;
}
.header-title {
  text-align: center;
  font-size: 14px;
  width: 90%;
  display: block;
  color: #5e6c84;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans,
    Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
.menu-floating-body {
  width: 100%;
  padding: 25px 2px 0;
}
</style>
