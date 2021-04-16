<template>
  <t-menu
    icon-name="menuDots"
    icon-size="20px"
    icon-color="#fff"
    m=" 0 5px 0 0"
    titleMenu="Mais da Atlassian"
  >
    <div class="container">
      <div class="header">
        <span class="title">Switch to</span>
        <a class="title-link">
          Atlassian Start <c-icon name="newTab" size="14px" color="#0052cc"
        /></a>
      </div>

      <div class="body">
        <button-menu-dots-items
          v-for="(item, index) in itemsMenu"
          :key="index"
          :titleSection="item.titleSection"
          :iconName="item.iconName"
          :iconColor="item.iconColor"
          :iconSize="item.iconSize"
          :typeItem="item.type"
          :title="item.title"
          :subTitle="item.subTitle"
          :iconColorBackground="item.iconColorBackground"
        />
      </div>
    </div>
  </t-menu>
</template>

<script>
export default {
  name: "ButtonDotsHeader",
  data() {
    return {
      itemsMenu: [
        {
          iconName: "jiraSoftware",
          title: "Jira software",
        },
        {
          iconName: "jiraServiceManager",
          title: "Jira Service Management",
        },
        {
          iconName: "trelloGradient",
          title: "trello",
        },
        {
          type: "section",
          titleSection: "join"
        },
        {
          iconName: "confluence",
          title: "Confluence",
          subTitle: "suporteguaranisistemas"
        },
        {
          type: "section",
          titleSection: "Discover"
        },
        {
          iconName: "safari",
          iconColor: "rgb(86, 99, 122)",
          iconColorBackground: "#ebecf0",
          title: "More Atlassian products"
        },

      ]
    }
  }
};
</script>

<style scoped>
.container {
  width: 280px;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  padding-bottom: 0;
}
.title {
  font-size: 16px;
  font-style: inherit;
  line-height: 1.25;
  color: #1c2e4d;
  font-weight: 500;
  letter-spacing: -0.006em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
}
.title-link {
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  color: #0052cc;
  text-decoration: none;
  transition: opacity 0.3s ease 0s;
}
.title-link:hover {
  text-decoration: underline;
}
.body {
  margin-top: 30px;
}
</style>
