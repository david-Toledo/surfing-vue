<template>
  <div class="text-center">
    <h2>Wipeout</h2>
    <h3>{{ msg }}</h3>

    <hr>


    <img src="@/assets/Safety/wipeout.gif">

    <!-- <hr> -->





  </div>
</template>

<script>
export default {
  name: 'Rips',
  data () {
    return {
      msg: 'Be Careful!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img{
  width: 700px !important;
  /* display: flex!important; */
}
</style>
