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
        <div class="icon-menu-container">
          <div class="icon-menu">
            <c-icon name="jiraSoftware" size="25px" color="rgb(255 255 255)" />
          </div>
          <div class="icon-menu-content">
            <span class="icon-menu-content-title">Jira software</span>
          </div>
        </div>

        <div class="icon-menu-container">
          <div class="icon-menu">
            <c-icon
              name="jiraServiceManager"
              size="25px"
              color="rgb(255 255 255)"
            />
          </div>
          <div class="icon-menu-content">
            <span class="icon-menu-content-title">Jira Service Management</span>
          </div>
        </div>

        <div class="icon-menu-container">
          <div class="icon-menu">
            <c-icon
              name="trelloGradient"
              size="25px"
              color="rgb(255 255 255)"
            />
          </div>
          <div class="icon-menu-content">
            <span class="icon-menu-content-title">trello</span>
          </div>
        </div>

        <div class="title-section">
          <h1 class="title">join</h1>
        </div>

        <div class="icon-menu-container">
          <div class="icon-menu">
            <c-icon name="confluence" size="25px" color="rgb(255 255 255)" />
          </div>
          <div class="icon-menu-content">
            <span class="icon-menu-content-title">Confluence</span>
            <span class="icon-menu-content-subtitle"
              >suporteguaranisistemas</span
            >
          </div>
        </div>

        <div class="title-section">
          <h1 class="title">Discover</h1>
        </div>

        <div class="icon-menu-container">
          <div class="icon-menu" style="background: rgb(235 236 240)">
            <c-icon name="safari" size="25px" color="rgb(87 100 123)" />
          </div>
          <div class="icon-menu-content">
            <span class="icon-menu-content-title">More Atlassian products</span>
          </div>
        </div>
      </div>
    </div>
  </t-menu>
</template>

<script>
export default {
  name: "ButtonDotsHeader"
};
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
  background: #0052cc;
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
