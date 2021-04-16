<template>
  <div>
    <div v-show="typeItemSelected" class="icon-menu-container">
      <div class="icon-menu" :style="{ background: iconColorBackground }">
        <c-icon :name="iconName" :size="iconSize" :color="iconColor" />
      </div>
      <div class="icon-menu-content">
        <span class="icon-menu-content-title">{{ title }}</span>
        <span class="icon-menu-content-subtitle">{{ subTitle }}</span>
      </div>
    </div>

    <div v-show="typeSectionSelected" class="title-section">
      <h1 class="title">{{ titleSection }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonMenuDotsItems",
  props: {
    typeItem: {
      type: String,
      default: "item"
    },
    titleSection: {
      type: String,
      default: ""
    },
    iconName: {
      type: String,
      default: ""
    },
    iconColor: {
      type: String,
      default: "rgb(255, 255, 255)"
    },
    iconSize: {
      type: String,
      default: "25px"
    },
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    iconColorBackground: {
      type: String,
      default: "#0052cc"
    }

  },
  computed: {
    typeSectionSelected() {
      console.log("typeSectionSelected", this.typeItem)
      return this.typeItem === "section" ? true : false
    },
    typeItemSelected() {
      return this.typeItem === "item" ? true : false
    }
  }

}
</script>

<style scoped>
.icon-menu-container {
  display: flex;
  padding: 8px 8px;
  align-items: center;
  border-radius: 3px;
}
.icon-menu-container:hover {
  background-color: rgb(224, 226, 229);
  color: rgb(23, 43, 77);
  fill: rgb(224, 226, 229);
  text-decoration: none;
}
.icon-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  min-height: 32px;
  margin-right: 10px;
  border-radius: 8px;
}
.icon-menu-content {
  display: flex;
  flex-direction: column;
}
.icon-menu-content-title {
  color: #172b4d;
  font-size: 14px;
  line-height: 15px;
  font-weight: 400;
  text-transform: capitalize;
}
.icon-menu-content-subtitle {
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(94, 108, 132);
  font-size: 11px;
  line-height: 1.27273;
  padding-bottom: 1px;
}
.title-section {
  margin-top: 30px;
  padding: 0 10px;
}
.title-section > .title {
  font-size: 11px;
  font-style: inherit;
  line-height: 1.45455;
  color: rgb(107, 119, 140);
  font-weight: 700;
  margin-top: 16px;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
}
</style>