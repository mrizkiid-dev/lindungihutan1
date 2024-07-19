<template>
    <div>
        <p>{{ data }}</p>
    </div>
</template>

<script setup lang="ts">
import getProducts from '~/data/repository/getProducts';
import { type TProduct } from '~/types/data/product';

const route = useRoute()

if (!(route.query && 'title' in route.query)) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page Not Found'
    })
}

const { data, error, status } = await useLazyAsyncData('get-search-products', async () => {
    console.log('data = /api/products?title=',route.query.title);
    
    const { data, error } = await getProducts<TProduct[]>(`/api/products?title=`+route.query.title)
    console.log('data newewew = ',data);
    
        if (error) {
            throw error
        } else return data
})

</script>

<style scoped>

</style>