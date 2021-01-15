<template>
  <figure class="cloudImg1"
    v-parallax-fit="[
      {
        start: end - 50,
        end: end + 50,
        toStyle: {
          opacity: 0
        },
      }
    ]"
  >
    <img src="../assets/cloudImg1.png" alt="cloudImg">
    <img src="../assets/cloudImg1.png" alt="cloudImg">
    <img src="../assets/cloudImg1.png" alt="cloudImg">
    <img src="../assets/cloudImg1.png" alt="cloudImg">
    <img src="../assets/cloudImg1.png" alt="cloudImg">
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
.cloudImg1 {
  & img {
    width: 200px;
    position: fixed;
    animation: cloud 50s linear infinite;
    &:nth-of-type(1) {
      top: 120px;
    }
    &:nth-of-type(2) {
      top: 200px;
      animation-delay: -10s;
    }
    &:nth-of-type(3) {
      top: 80px;
      animation-delay: -20s;
    }
    &:nth-of-type(4) {
      top: 160px;
      animation-delay: -30s;
    }
    &:nth-of-type(5) {
      top: 40px;
      animation-delay: -40s;
    }
  }
}
@keyframes cloud {
	0% {right: -200px;}
	100% {right: 100%;}
}
</style>
