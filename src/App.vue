<template>
  <div class="">

    <Nav />
    <div class="container">

      <h1 class="display-2 text-center"> Surfing is for life </h1>

      <router-view/>

    </div>

    <br>
    <br>

    <!-- <footer class="bg-dark text-white pt-5 pb-4">
      <div class="container text-center text-md-left">
        Tiger
      </div>
    </footer> -->
    <Footer />


  </div>
</template>

<script>
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
export default {
  name: 'App',
  components:{Nav,Footer}
}
</script>

<style>


/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

</style>
