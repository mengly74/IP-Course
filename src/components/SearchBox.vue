<template>
  <div class="input-select-wrapper">
    <select v-model="selectedOption" class="select-box">
      <option value="all">All Categories</option>
      <option value="vegetables">Vegetables</option>
      <option value="fruits">Fruits</option>
      <option value="bakery">Bakery</option>
    </select>
    <input
      v-model="searchText"
      type="text"
      placeholder="Search for items"
      class="input-box"
    />
    <div class="search">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </div>  
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  data() {
    return {
      selectedOption: "all",
      searchText: "",
    };
  },
};
</script>

<style scoped>
.input-select-wrapper {
  display: flex;
  align-items: center;
  border: 1px solid #0efb1a;
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  height: 50px;
}

.select-box {
  height: 100%;
  border: none;
  background-color: #f9f9f9;
  padding: 8px 12px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
}

.input-box {
  flex: 1;
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  outline: none;
}

.input-box:focus {
  outline: none;
}

.select-box:hover {
  background-color: #f0f0f0;
}
.search{
  padding: 0px 8px;
}
</style>
