<template>
    <router-link to="/" class="cont">
        <div>
            <img src="@/assets/Profile/image.png" alt="Profile">
        </div>
        <div class="span">
            <span class="name">Melon</span>
            <span class="foot">MART & GROCERY</span>
        </div>
    </router-link>
</template>
<script>
export default{
    name: "Profile",
};
</script>
<style scoped>
.cont{
    display: flex;
    align-items: center;
    height: 66px;
}
img{
    height: 60px;
    width: 78px;
    margin-right: 15px;
}
.span{
    display: flex;
    flex-direction: column;
}
.name{
    color: #3BB77E;
    font-size: 40px;
    font-weight: bold;
}
.foot{
    color: #253D4E;
    font-size: 12px;
    margin-bottom: 15px;
}
</style>