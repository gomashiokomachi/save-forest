<template>
  <div class="textInner"
    v-parallax-fit="[
      {
        start: start,
        end: start + 50,
        fromStyle: {
          opacity: 0
        },
        toStyle: {
          opacity: 1,
        },
      },
      {
        start: end - 50,
        end: end,
        fromStyle: {
          opacity: 1
        },
        toStyle: {
          opacity: 0,
        },
      }
    ]"
  >
    <p class="text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    start: Number,
    end: Number,
    text: String
  } 
} 
</script>

<style lang="scss">
.textInner {
  position: absolute;
  top: 480px;
  right: 600px;
  @media screen and (min-width: 1024px){
    right: calc(50% + 88px);
  }
}
.text {
  width: 250px;
  font-family: '手札体-简';
  text-align: justify;
  line-height: 1.6em;
}
</style>
