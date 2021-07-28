<template>
  <form class="login" @submit.prevent>
      <button @click="login">login</button>
  </form>
</template>

<script>
import {login} from '../auth/auth';
export default {
    methods: {
        login
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
</style>