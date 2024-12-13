<template>
    <div class="menu">
        <div class="menu-list">
            <select v-model="selectedOption" class="select-box">
                <option value="first">Browse Categories</option>
                <option value="second">a</option>
                <option value="third">a</option>
            </select>
            <router-link to="/PageCategory" class="menu-item">
                <span>Hot Deals</span>
            </router-link>
            <router-link to="/" class="menu-item">
                <span class="menu-item">Home</span>
            </router-link>
            <select v-model="selectedFood" class="select-box-1">
                <option value="first">Food</option>
                <option value="second">a</option>
                <option value="third">a</option>
            </select>
            <select v-model="selectedVeg" class="select-box-1">
                <option value="first">Vegetables</option>
                <option value="second">a</option>
                <option value="third">a</option>
            </select>
            <span>Drink</span>
            <span>Cookies</span>
            <select v-model="selectedMeat" class="select-box-1">
                <option value="first">Meat & Seafood</option>
                <option value="second">a</option>
                <option value="third">a</option>
            </select>
            <span>Bakery</span>
        </div>
        <div class="contect">
            <div class="icon">
                <font-awesome-icon icon="headphones" />
            </div>
            <div class="phoneNum">
                <span class="phone">099 777 888</span>
                <span class="des">24/7 Support Center</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MenuItem",
    data() {
        return {
            selectedOption: "first",
            selectedFood: "first",
            selectedVeg: "first",
            selectedMeat: "first",
            // menuItems: ["Home", "Food", "Vegetables", "Drink", "Cookies", "Meat & Seafood", "Bakery"],
        };
    },
};
</script>

<style scoped>
.menu-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
    height: 50px;
}

.menu {
    display: flex;
    justify-content: space-between;
}

.menu-item {
    text-decoration: none;
    color: #333;
    cursor: pointer;
}

.menu-item:hover {
    color: #3BB77E;
}

.select-box {
    border: none;
    border-radius: 5px;
    background-color: #3BB77E;
    /* padding: 8px 12px; */
    padding: 12px;
    color: #ffffff;
    font-size: 14px;
    outline: none;
    cursor: pointer;
    height: 44px;
}

.select-box-1 {
    border: none;
    border-radius: 5px;
    /* background-color: #3BB77E; */
    /* padding: 8px 12px; */
    /* color: #ffffff; */
    font-size: 14px;
    outline: none;
    cursor: pointer;
    height: 44px;
}

.select-box-1:hover {
    color: #3BB77E;
}

.contect {
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon {
    font-size: 37px;
}

.phoneNum {
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}

.phone {
    color: #3BB77E;
    font-size: 24px;
}

.des {
    color: #7E7E7E;
    font-size: 15px;
}
</style>