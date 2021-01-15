<template>
  <figure class="cloudImg2"
    v-parallax-fit="[
      {
        start: start - 50,
        end: start + 50,
        toStyle: {
          opacity: 1
        },
      },
      {
        start: end - 50,
        end: end + 50,
        toStyle: {
          opacity: 0
        },
      }
    ]"
  >
    <img src="../assets/cloudImg2.png" alt="cloudImg">
    <img src="../assets/cloudImg2.png" alt="cloudImg">
    <img src="../assets/cloudImg2.png" alt="cloudImg">
    <img src="../assets/cloudImg2.png" alt="cloudImg">
    <img src="../assets/cloudImg2.png" alt="cloudImg">
  </figure>
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
.cloudImg2 {
  opacity: 0;
  & img {
    width: 240px;
    position: fixed;
    top: 0;
    &:nth-of-type(1) {
      right: 0%;
    }
    &:nth-of-type(2) {
      right: 20%;
    }
    &:nth-of-type(3) {
      right: 40%;
    }
    &:nth-of-type(4) {
      right: 60%;
    }
    &:nth-of-type(5) {
      right: 80%;
    }
  }
}
</style>
