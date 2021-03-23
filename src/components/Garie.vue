<template>
  <div class="text-center">
    <h2>Garie Beach</h2>
    <!-- <h3>{{ msg }}</h3> -->


    <b-container>

      <b-carousel
        controls
        indicators
        img-width="1024"
        img-height="480"
        >

        <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10"> </b-carousel-slide> -->


        <b-carousel-slide> <template v-slot:img> <img
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="@/assets/Garie/1.jpg"
          >
        </template>
        </b-carousel-slide>


        <b-carousel-slide> <template v-slot:img> <img
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="@/assets/Garie/2.jpg"
          >
        </template>
        </b-carousel-slide>

        <b-carousel-slide> <template v-slot:img> <img
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="@/assets/Garie/3.jpg"
          >
        </template>
        </b-carousel-slide>

        <b-carousel-slide> <template v-slot:img> <img
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="@/assets/Garie/4.jpg"
          >
        </template>
        </b-carousel-slide>

        <b-carousel-slide> <template v-slot:img> <img
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="@/assets/Garie/5.jpg"
          >
        </template>
        </b-carousel-slide>

        <b-carousel-slide> <template v-slot:img> <img
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="@/assets/Garie/6.jpg"
          >
        </template>
        </b-carousel-slide>

        <b-carousel-slide> <template v-slot:img> <img
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="@/assets/Garie/7.jpg"
          >
        </template>
        </b-carousel-slide>

        <b-carousel-slide> <template v-slot:img> <img
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="@/assets/Garie/8.jpg"
          >
        </template>
        </b-carousel-slide>

        <b-carousel-slide> <template v-slot:img> <img
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="@/assets/Garie/9.jpg"
          >
        </template>
        </b-carousel-slide>

        <b-carousel-slide> <template v-slot:img> <img
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="@/assets/Garie/10.jpg"
          >
        </template>
        </b-carousel-slide>


      </b-carousel>

    </b-container>



  </div>
</template>

<script>
export default {
  name: 'The Farm',
  data () {
    return {
      msg: 'Pictures'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
