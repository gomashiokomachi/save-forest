<template>
  <section class="item"
    v-parallax-fit="[
      {
        start: start,
        end: start + 50,
        fromStyle: {
          opacity: 0
        },
        toStyle: {
          opacity: 1
        },
      },
      {
        start: end - 50,
        end: end,
        fromStyle: {
          opacity: 1
        },
        toStyle: {
          opacity: 0
        },
      }
    ]"
  >
    <slot /> 
  </section>
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
.item {
  overflow: hidden;
  background: #f5f5dc8a;
  width: 100vw;
  height: 100vh;
}
</style>
