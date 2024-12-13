<template>
    <div class="container-head">
        <span class="coke">Coke & Milk</span>
        <div class="small-letter">
            <span>Home ></span>
            <span>Categories ></span>
            <span>Coke & Milk</span>
        </div>
    </div>
</template>
<script>
export default{
    name: "HeaderComponent",
}
</script>
<style scoped>
.container-head{
    height: 235px;
    display: flex;
    border-radius: 15px;
    flex-direction: column;
    justify-content: center;
    background-color: #3BB77E33;
    padding-left: 50px;
    background-image: url("/src/assets/photo/bg-showcase.png");
}
.coke{
    font-weight: bold;
    font-size: 44px;
    font-family: Arial, sans-serif;
}
.small-letter{
    width: 20%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-family: Arial, sans-serif;
    color: #7E7E7E;
}
</style>