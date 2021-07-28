<template>
    <div class="head">
        <div class="logo">Movies</div>
        <div>
            <router-link to="/">Home</router-link>
            <router-link to="/genres">Genres</router-link>
            <router-link to="/movies">All Movies</router-link>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .head {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 5rem;
        background-color: #292a2c;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2rem;
        z-index: 1000000;
    }
    .logo {
        color: #fff;
        font-size: 2rem;
        font-weight: 500;
    }
</style>