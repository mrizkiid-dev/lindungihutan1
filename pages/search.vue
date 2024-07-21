<template>
    <div>
        <p v-if="status === 'pending'"> Loading ... </p>
        <p v-else-if="data">
            <ol class="products">
                <li v-for="product in data">
                    <Product :title="product.title" :image-src="product.imageSrc" :price="product.price"/>
                </li>
            </ol>
        </p>
    </div>
</template>

<script setup lang="ts">
import getProducts from '~/data/repository/getProducts';
import { type TProduct } from '~/types/data/product';

definePageMeta({
    layout: 'search-layout'
})

const route = useRoute()

if ((Object.keys(route.query).length > 0 && !('title' in route.query))) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page Not Found'
    })
}

const { data, error, status, refresh } = await useLazyAsyncData('get-search-products', async () => {
    if (route.query.title) {
        const { data, error } = await getProducts<TProduct[]>(`/api/products?title=`+route.query.title)
        if (error) {
            throw error
        } else return data
    } else {
        const { data, error } = await getProducts<TProduct[]>('/api/products')
        if (error) {
            throw error
        } else return data
    }
})

if (error && !data.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page Not Found'
    }) 
}

watch(() => route.query.title, () => {
    refresh()
})

</script>

<style scoped>
.products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
}

li {
    list-style: none;
}
</style>
