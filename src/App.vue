<template>
  <Header/>
  <router-view>
  </router-view>
</template>

<script>
  import Header from './components/Header.vue';
export default {
  components: {
   Header
  },
  beforeMount() {
    //clearing the cookies
    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400&display=swap');

  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #fff;
  }

  body {
    background-color: #1b1c1d;
  }
</style>
