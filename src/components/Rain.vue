<template>
  <div class="rain"
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
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
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
.rain {
  $rain_drop_height: 20vh;

  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  & > div {
    animation: rain 500ms linear infinite;
    background-color: rgba(gray, 0.25);
    position: absolute;
    top: -$rain_drop_height;
    left: 0;
    width: 1px;
    height: $rain_drop_height;
    transform-origin: center center;
  }
  @for $i from 1 through 25 {
    & > div:nth-child(#{$i}) {
      animation-delay: #{$i * 100}ms;
      animation-duration: random(250) + 375ms;
      left: random(100) + vw;
    }
  }
  @keyframes rain {
    from {transform: rotate(-5deg) translateY(-$rain_drop_height);}
    to {transform: rotate(-5deg) translateY(100vh + $rain_drop_height);}
  }
}
</style>
