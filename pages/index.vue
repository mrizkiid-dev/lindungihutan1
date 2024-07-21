<template>
    <div>
        <button @click="onTap">
            STUDI KASUS 1
        </button>
    </div>
</template>

<script setup lang="ts">

const onTap = () => {
    navigateTo({
        path: '/search',
    },{
        external: true
    })
}
</script>

<style scoped>
button {
    background: greenyellow;
}
</style>