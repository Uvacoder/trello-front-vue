<template>
  <button class="user-account">
    <span> {{ userName }}</span>
  </button>
</template>

<script>
export default {
  computed: {
    userName() {
      return "ll".toUpperCase();
    },
  },
};
</script>

<style>
.user-account {
  outline: none;
  padding: 2px;
  border: 0px solid transparent;
  min-width: 32px;
  min-height: 32px;
  border-radius: 100%;
  background: #ffffff63;
  transition: 0.1s linear;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  letter-spacing: 1.2px;
}
.user-account:hover {
  background: #57575763;
}
.user-account > span {
  padding-left: 3px;
  font-size: 15px;
}
.title {
  margin: 0 5px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans,
    Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: 700;
}
</style>
