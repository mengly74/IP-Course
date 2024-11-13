<template>
    <div class="list-cate">
        <h3>{{ name }}</h3>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.list-cate {
    padding: 10px;
    width: 100px;
    cursor: pointer;
    /* background-color: #f0f0f0; */
    /* border-radius: 8px; */
}

.list-cate:hover {
    background-color: #e0e0e0;
}

.name {
    font-weight: bold;
}
</style>
