<template>
    <header>
    <h1 @click="onTapArticle">ARTICLES</h1>
    <p>|</p>
    <h1 class="about" @click="onTapAbout">ABOUT</h1>
    </header>
    <slot />
</template>

<script setup lang="ts">
const onTapArticle = async() => {
    navigateTo({
        path: '/'
    })
}
const onTapAbout = async() => {
    console.log('click');
    navigateTo({
        path: '/about'
    })
}
</script>

<style>
header{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 24px;
}

h1 {
    font-size: 24px;
}

.about {
    cursor: pointer;
}
</style>