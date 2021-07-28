<template>
  <form class="login" @submit.prevent> 
      <h1>{{$auth.isAuthenticated.value}}</h1>
      <button v-if="!$auth.isAuthenticated.value" @click="login">login</button>
      <button v-else @click="logout">logout</button>
  </form>
</template>

<script>
export default {
    methods: {
        login() {
        this.$auth.loginWithRedirect();
        },
        // Log the user out
        logout() {
        this.$auth.logout({
            returnTo: window.location.origin
        });
        }
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