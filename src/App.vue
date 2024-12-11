<template>
  <div class="container">
    <Header />
    <div class="main-content">
      <Menu />
      <router-view /> 
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Menu,
    Footer,
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  height: 500px;
  width: 750px;
}

.main-content {
  display: flex;
  flex: 1;
}

router-view {
  flex: 1;
  padding: 20px;
}
</style>
