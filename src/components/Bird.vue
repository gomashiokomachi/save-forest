<template>
  <figure class="birdImg"
    v-parallax-fit="[
      {
        start: 0,
        end: 0 + 50,
        fromStyle: {
          top: `300px`,
          right: `0%`,
          opacity: 0
        },
        toStyle: {
          top: `400px`,
          right: `25%`,
          opacity: 1
        },
      },
      {
        start: 400 - 50,
        end: 400 + 50,
        fromStyle: {
          top: `400px`,
          right: `25%`
        },
        toStyle: {
          top: `300px`,
          right: `50%`
        },
      },
      {
        start: 800 - 50,
        end: 800 + 50,
        fromStyle: {
          top: `300px`,
          right: `50%`
        },
        toStyle: {
          top: `400px`,
          right: `75%`
        },
      },
      {
        start: 1200 - 50,
        end: 1200 + 50,
        fromStyle: {
          top: `400px`,
          right: `75%`
        },
        toStyle: {
          top: `300px`,
          right: `100%`
        },
      }
    ]"
  ><img src="../assets/birdImg.png" alt="bird"></figure>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.birdImg {
  position: fixed;
}
.birdImg img {
  width: 48px;
}
</style>
