<template>
  <div class="container-app">
    <header>
      <div class="topHead">
        <Profile />
        <SearchBox />
        <Acc />
      </div>
      <MenuItem />
    </header>
    <RouterView />
    <!-- <PageCategory /> -->
     <!-- <DetailPage/> -->
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
import MenuItem from "@/components/MenuItem.vue";
import Acc from "@/components/Account.vue";
import Profile from "@/components/Profile.vue";
import DetailPage from "./views/DetailPage.vue";
// import PageCategory from "@/views/PageCategory.vue";

export default {
  components: {
    SearchBox,
    MenuItem,
    Acc,
    Profile,
    // PageCategory,
    DetailPage,
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  padding: 20px;
  margin: 40px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

main {
  padding: 20px;
}
.topHead{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
}
/* .container-app{
  width: 80wv;
} */
</style>