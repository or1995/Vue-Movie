<template>
    <div class="auth">
        <h1>authenticating</h1>
    </div>
</template>

<script>
import {handleAuth} from '../auth/auth';
export default {
    beforeMount() {
        console.log('hi')
        handleAuth(error => {
            if(error) {
                console.log(error);
                return
            }
            console.log('loggedin');
            this.$router.push('/');
        })
    }
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