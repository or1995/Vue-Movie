<template>
  <h1>loading</h1>
</template>

<script>
export default {
    beforeMount() {
        this.$auth.logout();
    }
}
</script>

<style>

</style>