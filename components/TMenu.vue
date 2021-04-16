<template>
  <div class="relative">
    <t-button
      :icon-name="iconName"
      icon-size="20px"
      icon-color="#fff"
      m=" 0 5px 0 0"
      @click="click"
      :title="title"
      :titleColor="titleColor"
      :text-transform="textTransform"
      :titleMenu="titleMenu"
    />

    <menu-floating
      @click-outside="clickOut"
      :title="titleMenu"
      :isVisible="isOpen"
    >
      <template v-slot:menu-body>
        <slot />
      </template>
    </menu-floating>
  </div>
</template>

<script>
export default {
  name: "TMenu",
  props: {
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
    },
    titleMenu: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    click() {
      this.$emit("click");
      this.isOpen = !this.isOpen;
    },
    clickOut() {
      this.isOpen = false;
    }
  }
};
</script>

<style scoped></style>
