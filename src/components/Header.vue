<template>
    <div v-if="$auth.isAuthenticated.value" class="head">
        <div class="logo">Movies</div>
        <div class="links">
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/genres">Genres</router-link>
            <router-link class="link" to="/movies">Movies</router-link>
            <router-link class="link" to="/tv">Tv</router-link>
            <router-link class="link" to="/logout">Logout</router-link>
            <div></div>
        </div>
    </div>
    <div v-else>
        klhflhdgklhsdlghsdklhgkl
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
        width: 100%;
        height: 4rem;
        background-color: var(--back-color);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 5rem;
        z-index: 1000000;
        border-bottom: 1px solid var(--back-darker-color);
    }
    .logo {
        color: #F7F7FF;
        font-family: var(--logo-font);
        font-size: 2.7rem;
        font-weight: 500;
        color: var(--brand-color);
    }

    .links {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    .link {
        color: var(--grey);;
        text-decoration: none;
        font-size: 1.6rem;
        font-weight: 300;
        opacity: .7;
    }
</style>