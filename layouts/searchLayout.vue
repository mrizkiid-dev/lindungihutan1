<template>
    <nav>
        <div class="search-bar">
            <input type="text" class="input-text" v-model="searchInput" @keyup.enter="onSearch"/>
            <button @click="onSearch">
                <span class="material-symbols-outlined">
                    search
                </span>
            </button>
        </div>
    </nav>
    <div class="space" />
    <slot />
    
</template>

<script setup lang="ts">
const searchInput = ref<string>('')

const onSearch = () => {
    navigateTo({
        path: '/search',
        query: {
            title: searchInput.value
        }
    })
}
</script>

<style scoped>

.space {
    height: 90px;
}

nav {
    display: flex;
    width: 100%;
    background-color: #fff;
    padding: 10px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
}

.search-bar {
    width: 700px;
    height: 50px;
    border: 1px solid black;
    margin: 0 auto;
    display: flex;
    justify-items: center;
    border-radius: 50px;
    overflow: hidden;
}

input[type="text"] {
    flex-grow: 9;
    border: none;
    overflow: hidden;
    padding-left: 30px;
}

input[type="text"]:focus {
    border: none;
    outline: none;
}

button {
    background: #fff;
    border: none;
    flex-grow: 1;
    cursor: pointer;
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
</style>