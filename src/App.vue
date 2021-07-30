<template>
  <Header/>
  <div class="main-container">
    <router-view>
    </router-view>
  </div>
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
  @import url('https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); /* 'Exo', sans-serif;*/
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap'); /* 'Pacifico', cursive; */

  :root {
    --back-color: #fff;
    --back-darker-color: #F0F2F0;
    --font-light-color: #fff;
    --grey: #10151d;
    --font-dark-color: #000;
    --brand-color: #3a7bd5;
    --brand-back-color: #eaf1fa;
    --main-font: 'Exo', sans-serif;
    --logo-font: 'Pacifico', cursive; 
  }

  * {
    font-family: var(--main-font);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--font-dark-color);
  }

  body {
    background-color: var(--back-color);
    overflow-x: hidden;
  }

  .main-container {
    width: 100%;
    padding: 4rem 10rem;
  }
</style>
