<template>
    <div class="product">
        <img :src="imageSrc" :alt="`img `+ title" width="200px" height="200px">
        <p>{{ title }}</p>
        <p>{{ price }}</p>
    </div>
</template>

<script setup lang="ts">
// Menampilkan setiap produk dalam format kartu dengan nama produk, gambar, dan harga.

import type {TProductProps} from './types/typeProduct'

const { title, imageSrc, price } = defineProps<TProductProps>()
</script>

<style scoped>
.product {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    width: 300px;
    height: 400px;
    /* border: 1px solid black; */
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>