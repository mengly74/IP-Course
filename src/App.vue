<script setup>
import { onMounted, computed } from "vue";
import { useProductStore } from "./stores/productStore";
import Category from "./components/Category.vue";
import Promotion from "./components/Promotion.vue";
import FeatureCategory from "./components/FeatureCategory.vue";

const productStore = useProductStore();
const filteredCategories = computed(() => productStore.filteredCategories);
const selectGroup = (group) => {
  productStore.setSelectedGroup(group);
};

onMounted(async () => {
  await productStore.fetchCategories();
  await productStore.fetchPromotions();
  await productStore.fetchGroups();
  console.log("Categories loaded:", productStore.categories);
  console.log("Promotions loaded:", productStore.promotions);
  console.log("Groups loaded:", productStore.groups);
});
</script>

<template>
  <div id="app">
    <div class="container">
      <h1 class="name"> Featured Categories</h1>
      <div  class="list-cate">
        <FeatureCategory v-for="(group, index) in productStore.groups" 
        :key="index" 
        :name="group"
        @click="() => selectGroup(group)" />
      </div>
    </div>

    <div class="category-card">
      <Category v-for="(filter, index) in filteredCategories" 
      :key="index" 
      :image="filter.image" 
      :name="filter.name"
      :productCount="filter.productCount" 
      :color="filter.color"
      />
    </div>

    <div class="promotion-section">
      <Promotion v-for="(promotion, index) in productStore.promotions" 
        :key="index" 
        :title="promotion.title"
        :description="promotion.description"
        :image="promotion.image" 
        :color="promotion.color"
        :width="promotion.width"
        />
    </div>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}

.category-card {
  display: flex;
  padding: 20px;
}

.promotion-section {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-top: 20px;
}

.container {
  margin-top: 20px;
  padding: 20px;
  display: flex;
}

.list-cate {
  display: flex;
  /* gap: 10px; */
  flex-direction: row;
  width: auto;
}
</style>
