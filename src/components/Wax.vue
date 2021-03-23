<template>
  <div class="text-center">
    <h2>Wax</h2>
    <h3>{{ msg }}</h3>

    <hr>


    <img src="@/assets/wax/wax.png">

    <!-- WHAT IS THE DIFFERENCE BETWEEN HARD & SOFT WAX?

  Softer waxes will be:

Stickier
Easier to apply
More likely to move or rub away at pressure points on your board
  Harder waxes will be:

Less sticky
Somewhat more difficult to apply
More likely to stay in place and not rub off
WHAT SHOULD A GOOD SURF WAX PROVIDE?

Moderate to high levels of stickiness
Stability Underfoot
WHAT IS A SINGLE WAX APPLICATION?

A Single Wax Application is where only one formula of wax is used at a time.
WHAT ARE THE SHORTCOMINGS OF A SINGLE WAX APPLICATION?

Increased Stickiness requires a softer wax which in turn will reduce Stability Under Foot.
SHOULD I CONTINUE USING JUST A SINGLE WAX APPLICATION?

If Single Wax levels of stickiness and stability are adequate for your needs then there is no reason for you to switch to Basecoat/Topcoat combinations.
WHEN SHOULD I USE A BASECOAT/TOPCOAT COMBINATION?

When you want to increase the stickiness you get with your single wax application without sacrificing stability.
HOW DO BASECOAT & TOPCOAT COMBINATIONS WORK?

A harder Basecoat formula provides Stability Under Foot with a long lasting surface texture that can hold the softer Topcoat wax in place and prevent it from moving or rubbing away at strategic points on the deck of your surfboard.
Once you have a firm Basecoat, your Topcoat wax can be much softer and stickier than anything you could use without a Basecoat.
WHAT ARE THE RULES FOR BASECOAT/TOPCOAT COMBINATIONS?

A Basecoat must be sufficiently hard to remain stable at the current water temperature.
You can use anything you want as a Topcoat wax as long as it is softer than your Basecoat wax. -->

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
