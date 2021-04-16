<template>
  <button
    :class="hasClass"
    :style="{
      margin: m,
      textTransform: textTransform
    }"
    @click="$emit('click')"
  >
    <c-icon
      v-if="hasIcon"
      :name="iconName"
      :size="iconSize"
      :color="iconColor"
    />
    <span
      v-if="title"
      :class="{ title }"
      :style="{ color: titleColor, fontSize: titleSize }"
      >{{ title }}</span
    >
  </button>
</template>

<script>
export default {
  name: "TButton",
  props: {
    bg: {
      type: String,
      default: "#ffffff63"
    },
    iconName: {
      type: String,
      default: ""
    },
    iconSize: {
      type: String,
      default: "24px"
    },
    iconColor: {
      type: String,
      default: "#000"
    },
    classCustom: {
      type: String,
      default: "t-button"
    },

    title: {
      type: String,
      default: ""
    },
    titleColor: {
      type: String,
      default: "000"
    },

    titleSize: {
      type: String,
      default: "15px"
    },
    m: {
      type: String,
      default: ""
    },
    textTransform: {
      type: String,
      default: "initial"
    }
  },
  computed: {
    hasIcon() {
      return this.iconName === "" ? false : true;
    },
    hasClass() {
      return this.classCustom === "t-button"
        ? "t-button"
        : `${this.classCustom}`;
    }
  }
};
</script>

<style scoped>
.t-button {
  outline: none;
  padding: 2px;
  border: 0px solid transparent;
  min-width: 32px;
  min-height: 32px;
  border-radius: 3px;
  background: #ffffff63;
  transition: 0.1s linear;
  display: flex;
  align-items: center;
  justify-content: center;
}
.t-button:hover {
  background: #4d4d4d8c;
}
.title {
  margin: 0 5px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans,
    Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: 700;
}
</style>
