<script setup>
defineProps({
    text: String,
})
</script>
<template>
    <p class="item">{{ text }}</p>
</template>
<style scoped>
.item {
    font-weight: 500;
}
</style>