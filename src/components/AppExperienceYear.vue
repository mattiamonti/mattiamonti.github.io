<script setup>
import AppExperienceItem from './AppExperienceItem.vue';
defineProps({
    year: String,
    experiences: [],
})



</script>
<template>
    <div>
        <div class="line"></div>
        <div class="content">
            <div class="date">
                <h3>{{ year }}</h3>
            </div>
            <div class="experience-container">
                <AppExperienceItem v-for="exp in experiences" :text="exp.text"></AppExperienceItem>
            </div>
        </div>
    </div>
</template>
<style scoped>
.line {
    width: 100%;
    height: 0.5rem;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}

.content {
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 2rem;
    margin-top: 0.5rem;
}

.date {
    padding: 0.5rem 1rem;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.05);
    width: fit-content;
    height: fit-content;
}

.experience-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>