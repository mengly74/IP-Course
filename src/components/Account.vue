<template>
    <div v-on:click="" class="header">
      <div class="icon-bar">
        <div class="icon-item">  
          <span><font-awesome-icon icon="user" /> Account</span>
        </div>
        <div class="icon-item">
          <span><font-awesome-icon icon="rotate" /> Compare</span>
        </div>
        <div class="icon-item"> 
          <span><font-awesome-icon icon="heart" />Wishlist</span>
        </div>
        <div class="icon-item">  
          <span><font-awesome-icon icon="cart-shopping" />Cart</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Acc",
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    align-items: center;
    padding: 10px 20px;
  }
  
  .icon-bar {
    display: flex;
    gap: 20px;
    
  }
  
  .icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 17px;
    color: #333;
  }
  .icon-item:hover {
    color: #3BB77E;
    cursor: pointer;
  }
  </style>
  