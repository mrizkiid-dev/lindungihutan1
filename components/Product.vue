<template>
    <li class="search-bar">
        <img :src="imgSrc" :alt="`img `+ title">
        <p>{{ title }}</p>
        <p>{{ price }}</p>
    </li>
</template>

<script setup lang="ts">
// Menampilkan setiap produk dalam format kartu dengan nama produk, gambar, dan harga.

import type {TProductProps} from './types/typeProdut'

const { title, imgSrc, price } = defineProps<TProductProps>()
</script>

<style scoped>
.search-bar {
    display: flex;
    flex-direction: column;
    padding: 10px;
}
</style>