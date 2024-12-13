<template>
    <div class="showcase">
        <div class="showcase-des">
            <h1>Don't miss amazing grocery deals</h1>
            <p>Sign up for the daily newsletter</p>
            <div class="subscribe">
                <input type="email" placeholder="Your email address" class="email-input" />
                <button class="subscribe-button">Subscribe</button>
            </div>
        </div>
        <img src="@/assets/photo/image.png" alt="">
    </div>
  </template>
  
  <script>
  export default {
    name: "ShowCase",
  };
  </script>
  
  <style scoped>
  .showcase {
    display: flex;
    /* text-align: center; */
    /* padding: 40px; */
    background-color: #F0E8D5;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    background-image: url("/src/assets/photo/bg-showcase.png");
  }
  
  h1 {
    /* padding: 30px 0px 0 40px; */
    font-size: 4rem;
    /* margin-bottom: 10px; */
  }
  
  p {
    font-size: 1.2rem;
    color: #7E7E7E;
    margin-bottom: 20px;
  }
  
  .subscribe {
    display: flex;
    justify-content: center;
    /* gap: 10px; */
    margin-bottom: 20px;
  }
  
  .email-input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 300px;
  }
  
  .subscribe-button {
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .subscribe-button:hover {
    background-color: #218838;
  }

  img{
    height: 400px;
  }
  .showcase-des{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding: 60px;
  }
  </style>
  