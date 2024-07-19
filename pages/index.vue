<template>
    <div>
        <p v-if="status === 'pending'"> {{ status }}</p>
        <p v-if="data">{{ data[1].title }}</p>
        <p v-else>{{ error }}</p>
    </div>
</template>

<script setup lang="ts">
import getProducts from '@/data/repository/getProducts'
import { type TProduct } from '~/types/data/product';

const { data, error, status } = await useLazyAsyncData('get-products', async () => {
    const { data, error } = await getProducts<TProduct[]>('/api/products')
        if (error) {
            throw error
        } else return data
})

</script>

<style scoped>

</style>
