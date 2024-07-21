<template>
    <p v-if="status === 'pending'">
        <p class="loading">LOADING</p>
    </p>
    <div v-else>
        <div v-if="data" class="container-news">
            <div v-for="article in data" class="card">
                <div>
                    <div class="image-container">
                        <img :src="article.urlToImage" alt="" height="200px">
                    </div>
                    <p class="title">{{ article.title }}</p>
                    <p>{{ article.description }}</p>
                </div>
                <button @click="onTap(article.url)">
                    <span>see on {{ article.source.name }}</span>
                </button>
            </div>
        </div>
        <div v-else>
            kosong
        </div>
    
    </div>
</template>

<script setup lang="ts">
import getArticle from "@/data/repository/getArticle";
import type { TArticleResponse } from "~/types/model/article";
const route = useRoute()
const config = useRuntimeConfig()
const { data, error, status, refresh } = await useLazyAsyncData('get-article',async() => {
    const { data, error } = await getArticle(config)
    console.log('data = ',data);
    console.log('error = ',error);
    if(error) {
        throw error
    }
    return data
}, {
    immediate: true,
})


const onTap = async(url: string) => {
    navigateTo({
        path: url
    }, {
        external: true
    })
}

</script>

<style scoped>
.container-news {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px;
    gap: 20px;
}

p.loading{
    font-size: 50px;
    text-align: center;
    color: black;
}

.card {
    border-radius: 15px;
    background-color: rgb(227, 230, 251);
    overflow: hidden;
    width: 300px;
    max-height: 500px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.image-container {
    width: 300px;
    height: 200px;
}

image{
    object-fit: cover;
}

p.title {
    font-weight: bold;
}

button {
    background-color: black;
    border: none;
    border-radius: 5px;
    padding: 10px;
    color: white;
}
</style>