<template>
    <div class="list-cate">
        <h3>{{ name }}</h3>
        <div class="group">
            <p v-for="(item, index) in group" :key="index" @click="$emit('group-select', item)">{{ item }}</p>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        group: {
            type: String,
            required: true,
        }
    },
};
</script>

<style scoped>
.list-cate {
    padding: 10px;
    width: 100px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    /* color: #253D4E; */
    /* background-color: #f0f0f0; */
    /* border-radius: 8px; */
}

.list-cate h3 {
    color: #253D4E;
    font-weight: bold;
}

.group{
    display: flex;
    gap: 25px;
    color: #253D4E;
}
/* .name {
    color: #253D4E;
    font-weight: bold;
} */
</style>
