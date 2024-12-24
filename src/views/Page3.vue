<template>
  <div class="page">
    <aside>
      <h3>Menu</h3>
      <ul>
        <li><router-link to="/page3/section/1">Section 1</router-link></li>
        <li><router-link to="/page3/section/2">Section 2</router-link></li>
        <li><router-link to="/page3/section/3">Section 3</router-link></li>
        <li><router-link to="/page3/section/4">Section 4</router-link></li>
      </ul>
    </aside>
    <section>
      <h2>Welcome to Page 3</h2>
      <div v-if="!isSectionActive">
        <h3 class="messages">Messages:</h3>
        <ul>
          <li v-for="(msg, index) in messages" :key="index">{{ msg }}</li>
        </ul>
      </div>
      <div v-if="!isSectionActive">
        <p>Add a Message:</p>
        <input v-model="message" placeholder="Enter your message" />
        <button @click="addMessage">Add Message</button>
      </div>
      <router-view />
    </section>
  </div>
</template>

<script>
import { messageStore } from '../stores/store.js';

export default {
  data() {
    return {
      message: '',
    };
  },
  computed: {
    messages() {
      return messageStore.messages;
    },
    isSectionActive() {
      return this.$route.path.includes('/section/');
    },
  },
  methods: {
    addMessage() {
      if (this.message.trim() !== '') {
        messageStore.addMessage(`The message is from Page 2: ${this.message}`);
        this.message = '';
      }
    },
  },
};
</script>

<style scoped>
.page {
  display: flex;
  height: 100%;
  width: 100%;
}

aside {
  width: 20%;
  background-color: #FFFFFF;
  border-right: 1px solid #ddd;
  padding: 10px;
  box-sizing: border-box;
}

aside ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

aside li {
  margin: 5px 0;
}

aside li a {
  display: block;
  padding: 5px 10px;
  border: 1px solid transparent;
  border-radius: 4px;
}

aside li a:hover {
  background-color: #FFFFFF;
  border-color: #1890ff;
}

aside li a.active {
  background-color: #FFFFFF;
  border-color: #1890ff;
  font-weight: bold;
}

section {
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  margin-bottom: 10px;
}

h3 {
  margin-top: 10px;
  color: #333;
  font-size: 18px;
  text-align: left;
}

p {
  margin: 10px;
}

.messages {
  display: flex;
  align-items: baseline;
}

input {
  border: 1px solid hsla(160, 100%, 37%, 1);
  padding: 5px;
  border-radius: 5px;
  outline-color: rgb(0, 144, 96);
}

button {
  border: 1px solid hsla(160, 100%, 37%, 1);
  padding: 5px;
  border-radius: 5px;
  background-color: #FFFFFF;
  margin: 5px;
}

button:hover {
  background-color: #FFFFFF;
}
</style>
