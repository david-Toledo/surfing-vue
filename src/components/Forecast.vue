<template>
  <div class="text-center">
    <h2>Forecast</h2>
    <!-- <h3>{{ msg }}</h3> -->

    <hr>

    <a href="https://www.coastalwatch.com/surf-cams-surf-reports/nsw/cronulla" target="_blank"> Coastalwatch</a>

    <img src="@/assets/Safety/forecast.png">



  </div>
</template>

<script>
export default {
  name: 'Wax',
  data () {
    return {
      msg: 'Different kinds of wax'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img{
  width: 700px !important;
}
</style>
