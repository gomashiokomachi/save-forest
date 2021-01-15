<template>
  <figure class="rainbowImg"
    v-parallax-fit="[
      {
        start: start - 50,
        end: start + 50,
        toStyle: {
          opacity: 1
        },
      }
    ]"
  ><img src="../assets/rainbowImg.png" alt="rainbowImg"></figure>
</template>

<script>
export default {
  props: {
    start: Number,
    end: Number,
  } 
}
</script>

<style lang="scss">
.rainbowImg {
  opacity: 0;
  position: fixed;
  top: -88px;
  right: 400px;
  & img {
    width: 400px;
  }
  @media screen and (min-width: 1024px){
    right: calc(50% - 112px);
  }
}
</style>
