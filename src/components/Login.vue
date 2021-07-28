<template>
  <h1>loading</h1>
</template>

<script>
export default {
    beforeMount() {
        this.$auth.loginWithRedirect();
    }
}
</script>

<style scoped>
    .login {
        height: 20rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .login button {
        background-color: red;
    }
</style>