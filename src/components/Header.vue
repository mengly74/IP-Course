<template>
    <div class="header">
        <h1>Home</h1>
        <div class="item">
            <router-link to="/" class="link" :class="{ active: $route.path === '/' }">Page 1</router-link>
            <router-link to="/page2" class="link" :class="{ active: $route.path === '/page2' }">Page 2</router-link>
            <router-link to="/page3" class="link" :class="{ active: $route.path === '/page3' }">Page 3</router-link>
        </div>
    </div>
</template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
  }
  .item{
    display: flex;
    justify-content: space-evenly;
    width: 250px;
    font-size: larger;
  }
  .nav-links {
    display: flex;
    list-style: none;
    gap: 20px;
    padding: 0;
    margin: 0;
  }
  
  .link {
    text-decoration: none;
    color: black;
  }
  
  .active {
    color: red;
    font-weight: bold;
  }
  </style>
  