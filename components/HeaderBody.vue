<template>
  <div class="header-body-container">
    <div class="row">
      <t-button
        icon-name="menuDots"
        icon-size="20px"
        icon-color="#fff"
        m=" 0 5px 0 0"
      />
      <t-button
        icon-name="home"
        icon-size="20px"
        icon-color="#fff"
        m=" 0 5px 0 0"
      />
      <t-button
        icon-name="trello"
        icon-size="20px"
        icon-color="#fff"
        m=" 0 5px 0 0"
        title="quadros"
        titleColor="#fff"
        text-transform="capitalize"
        class="hide-mobile"
      />
    </div>

    <div class="row jc-center">
      <header-link-trello />
    </div>

    <div class="row" style="justify-content: flex-end">
      <t-button
        icon-name="plus"
        icon-size="20px"
        icon-color="#fff"
        m=" 0 5px 0 0"
      />
      <t-button
        icon-name="warning"
        icon-size="20px"
        icon-color="#fff"
        m=" 0 5px 0 0"
        class="hide-mobile"
      />
      <t-button
        icon-name="alert"
        icon-size="20px"
        icon-color="#fff"
        m=" 0 5px 0 0"
      />
      <user-account />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBoby",
};
</script>

<style>
.header-body-container {
  width: 100%;
  min-height: 40px;
  background: #4949495e;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 5px 5px;
}

@media (max-width: 768px) {
  .hide-mobile {
    display: none !important;
  }
}
@media (max-width: 425) {
}
@media (max-width: 375) {
}
</style>
