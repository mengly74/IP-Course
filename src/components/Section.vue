<template>
    <div class="base">
      <h3>This is Section {{ sectionId }} of {{ currentPage }}</h3>
      <div>
        <h3>Messages:</h3>
        <ul>
          <li v-for="(msg, index) in messages" :key="index">{{ msg }}</li>
        </ul>
      </div>
      <div>
        <p>Add a Message:</p>
        <input v-model="message" placeholder="Enter your message" />
        <button @click="addMessage">Add Message</button>
      </div>
    </div>
  </template>
  
  <script>
  import { messageStore } from '../stores/store.js'
  
  export default {
    data() {
      return {
        message: '',
      };
    },
    computed: {
      sectionId() {
        return this.$route.params.id;
      },
      currentPage() {
        const pageMatch = this.$route.path.match(/\/page(\d+)/);
        return pageMatch ? `Page ${pageMatch[1]}` : 'Unknown Page';
      },
      messages() {
        return messageStore.messages;
      },
    },
    methods: {
      addMessage() {
        if (this.message.trim() !== '') {
          messageStore.addMessage(
            `The message is from ${this.currentPage} Section ${this.sectionId}: ${this.message}`
          );
          this.message = '';
        }
      },
    },
  };
  </script>
  <style scoped>
  .base{
    margin:10px;
  }
  input{
    border:1px solid hsla(160, 100%, 37%, 1);
    padding: 5px;
    border-radius: 5px;
    outline-color: rgb(0, 144, 96);
  }
  button{
    border:1px solid hsla(160, 100%, 37%, 1);
    padding: 5px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin: 5px;
    cursor: pointer;
  }
  button:hover{
    background-color: #FFFFFF;
  }
  </style>
