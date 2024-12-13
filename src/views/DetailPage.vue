<template>
    <div class="container-pro">
        <div class="prod">
            <ProductDetail/>
        </div>
        <Description/>
    </div>
</template>
<script>
import Description from '@/components/Description.vue';
import ProductDetail from '@/components/ProductDe.vue';

export default{
    name: "DetailPage",
    components:{
        ProductDetail,
        Description,
    }
}
</script>
<style>
.container-pro{
    width: 96vw;
    display: flex;
    flex-direction: column;
}
.prod{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>