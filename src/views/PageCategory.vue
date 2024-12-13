<template>
    <div class="container-cate">
        <HeaderComponent />
    </div>
    
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
export default{
    name: "PageCategory",
    components:{
        HeaderComponent,
    }
}
</script>
<style scoped>
.container-cate{
  width: 96vw;
}
</style>