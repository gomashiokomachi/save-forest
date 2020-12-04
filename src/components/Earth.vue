<template>
  <figure class="earthImg"><img src="../assets/earthImg.png" alt="earth"></figure>
</template>

<style lang="scss">
.earthImg {
  position: fixed;
  top: 480px;
  right: 432px;
  animation-name: earth;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 1.6s;
  & img {
    width: 48px;
  }
  @media screen and (min-width: 1024px){
    right: calc(50% - 80px);
  }
}
@keyframes earth {
  0% {
    transform: translate(0,0px);
  }
  100% {
    transform: translate(0,-8px);
  }
}
</style>
