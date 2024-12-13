<script setup>
import { onMounted, computed, ref } from "vue";
import { useProductStore } from "@/stores/productStore";
import Category from "@/components/Category.vue";
import Promotion from "@/components/Promotion.vue";
import MenuComponent from "@/components/MenuComponent.vue";
import Product from "@/components/Product.vue";
import ShowCase from "@/components/ShowCase.vue";

const productStore = useProductStore();
const filteredCategories = computed(() => productStore.filteredCategories);
const categoryByGroup = (group) => {
  productStore.setSelectedGroup(group); 
  console.log("Selected group:", group);
};
const productByGroup = (group) => {
  selectedGroup.value = group;
  console.log("Selected group for products:", group);
};
const selectedGroup = ref("");

onMounted(async () => {
  await productStore.fetchCategories();
  await productStore.fetchPromotions();
  await productStore.fetchGroups();
  await productStore.fetchProducts();
  console.log("Categories loaded:", productStore.categories);
  console.log("Promotions loaded:", productStore.promotions);
  console.log("Products loaded:", productStore.products);
  console.log("Groups loaded:", productStore.groups);
});
const categoryTitle = "Featured Categories";
const productTitle = "Popular Products";
const products = computed(() => {
  if (selectedGroup.value === "") {
    return productStore.products; // Show all products if no group is selected
  }
  return productStore.getProductsByGroup(selectedGroup.value); // Filtered products
});
</script>

<template>
  <div class="app">
    <!-- === Feature Category === -->
    <main>
      <ShowCase />
    </main>
    <div>
      <MenuComponent
      :name = "categoryTitle"
      :group = "productStore.groups"
      @group-select = "categoryByGroup"
      />
    </div>
    <!-- === Catefory === -->
    <div class="category-card">
      <Category v-for="(filter, index) in filteredCategories" 
      :key="index" 
      :image="filter.image" 
      :name="filter.name"
      :productCount="filter.productCount" 
      :color="filter.color"
      />
    </div>
    <!-- === Promotion === -->
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
    <!-- === Popular Product === -->
    <div>
      <MenuComponent
      :name = "productTitle"
      :group = "productStore.groups"
      @group-select = "productByGroup"
      />
    </div>
    <!-- Product -->
    <div>
      <Product
      :products="products"
      />
    </div>
  </div>
</template>

<style scoped>
.app {
  width: 96vw;
  height: auto;
  display: flex;
  flex-direction: column;
}

.container{
  /* background-color: antiquewhite; */
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin-top: 3%;
  margin-bottom: 3%;
}

.name{
  /* justify-content: start;
  align-items: center ; */
  /* padding-right: 24%; */
  color: #253D4E;
  font-weight: bold;
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
