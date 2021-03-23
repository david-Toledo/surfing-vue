<template>
  <div class="">
    <!-- <h1>{{ msg }}</h1> -->


    <div class="alert alert-success text-center" role="alert">
      <h2 class="alert-heading">Welcome to my Surfsite!</h2>
      <p>If you like surfing the net and the waves feel free to look around</p>
      <!-- <hr> -->

      </p>
    </div>
    <div class="">
      <img src="@/assets/favorites/4.jpg">

    </div>
      <br>

    <div class="alert alert-success text-right" role="">
      <!-- <h2 class="alert-heading">Welcome to my website!</h2> -->
      <p class="mb-0">and remember <strong> "The best surfer out there is the one having the most fun." </strong>
        <footer class="blockquote-footer">Phil Edwards</footer>
      </p>
    </div>


  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      // msg: 'Hola!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
  font-weight: normal;
} */
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
/* a {
  color: #42b983;
} */
img{
  width: 1100px;
}
</style>
