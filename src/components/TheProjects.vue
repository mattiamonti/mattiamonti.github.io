<script setup>
import AppProject from './AppProject.vue';
</script>
<template>
    <section id="projects">
        <AppProject title="MarkdownEditor" imgsrc="/src/assets/project-images/MarkdownEditor.png"></AppProject>
        <AppProject title="Car dealer" imgsrc="/src/assets/project-images/MarkdownEditor.png"></AppProject>
        <AppProject title="nuovo?" imgsrc="/src/assets/project-images/MarkdownEditor.png"></AppProject>
    </section>
</template>
<style scoped>
section {
    padding: 1rem var(--padding-side);
    width: auto;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}
</style>