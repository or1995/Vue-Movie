<template>
    <div class="auth">
        <h1>{{$auth.isAuthenticated.value}}</h1>
        <h1>{{$auth.user.value}}</h1>
        <h1>Loading</h1>
        <h1>Loading</h1>
        <h1>Loading</h1>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .auth {
        height: 30rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>