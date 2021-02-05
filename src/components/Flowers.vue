<template>
  <figure v-for="i of 3" :key="i" class="flower no01" :style="{transitionDelay: randomDelay()}"><img src="../assets/flowerImg01.png" alt="花01"></figure>
  <figure v-for="i of 4" :key="i" class="flower no02" :style="{transitionDelay: randomDelay()}"><img src="../assets/flowerImg02.png" alt="花02"></figure>
  <figure v-for="i of 4" :key="i" class="flower no03" :style="{transitionDelay: randomDelay()}"><img src="../assets/flowerImg03.png" alt="花03"></figure>
  <figure v-for="i of 4" :key="i" class="flower no04" :style="{transitionDelay: randomDelay()}"><img src="../assets/flowerImg04.png" alt="花04"></figure>
  <figure v-for="i of 5" :key="i" class="flower no05" :style="{transitionDelay: randomDelay()}"><img src="../assets/flowerImg05.png" alt="花05"></figure>
  <figure v-for="i of 5" :key="i" class="flower no06" :style="{transitionDelay: randomDelay()}"><img src="../assets/flowerImg06.png" alt="花06"></figure>
  <figure v-for="i of 5" :key="i" class="flower no07" :style="{transitionDelay: randomDelay()}"><img src="../assets/flowerImg07.png" alt="花07"></figure>
  <figure v-for="i of 7" :key="i" class="flower no08" :style="{transitionDelay: randomDelay()}"><img src="../assets/flowerImg08.png" alt="花08"></figure>
  <figure v-for="i of 7" :key="i" class="flower no09" :style="{transitionDelay: randomDelay()}"><img src="../assets/flowerImg09.png" alt="花09"></figure>

  <figure v-for="i in randomImageNumbers" :key="i" class="flower randomFlower" :style="{transitionDelay: randomDelay(), ...randomPosition()}"><img :src="getImage(i).path" :width="getImage(i).width"></figure>
</template>

<script>
export default {
  setup() {
    const width = window.innerWidth
    const height = window.innerHeight
    const randomImageNumbers = [...Array(50)].map(() =>  Math.floor(Math.random() * 9))

    const images = [
      {
        path: require('@/assets/flowerImg01.png'),
        width: 440
      },
      {
        path: require('@/assets/flowerImg02.png'),
        width: 360
      },
      {
        path: require('@/assets/flowerImg03.png'),
        width: 280
      },
      {
        path: require('@/assets/flowerImg04.png'),
        width: 280
      },
      {
        path: require('@/assets/flowerImg05.png'),
        width: 240
      },
      {
        path: require('@/assets/flowerImg06.png'),
        width: 160
      },
      {
        path: require('@/assets/flowerImg07.png'),
        width: 160
      },
      {
        path: require('@/assets/flowerImg08.png'),
        width: 120
      },
      {
        path: require('@/assets/flowerImg09.png'),
        width: 120
      },
    ]

    const randomDelay = () => `${(Math.floor(Math.random() * 4) + 1) * 0.1}s`

    const randomPosition = () => {
      return {
        left: `${Math.floor(Math.random() * width) - (Math.random() * 200) + (Math.random() * 100)}px`,
        top:  `${Math.floor(Math.random() * height) - (Math.random() * 200) + (Math.random() * 100)}px`
      }
    }

    const getImage = (i) => {
      return images[i]
    }

    return {
      randomDelay,
      randomPosition,
      getImage,
      randomImageNumbers
    }
  }
}
</script>

<style lang="scss">
.flower {
  z-index: 20;
  position: absolute;
  transition-duration: 0.4s;
  transform: scale(0.4);
  opacity: 0;
  &.no01 {
    & img {width: 440px;}
    &:nth-of-type(1) {top: -80px;right: calc(50% - 600px);}
    &:nth-of-type(2) {top: 80px;right: calc(50% + 240px);}
    &:nth-of-type(3) {top: 440px;right: calc(50% - 0px);}
  }
  &.no02 {
    & img {width: 360px;}
    &:nth-of-type(4) {top: 40px;right: calc(50% - 80px);}
    &:nth-of-type(5) {top: 200px;right: calc(50% - 680px);}
    &:nth-of-type(6) {top: 320px;right: calc(50% + 280px);}
    &:nth-of-type(7) {top: 360px;right: calc(50% - 320px);}
  }
  &.no03 {
    & img {width: 280px;}
    &:nth-of-type(8) {top: -40px;right: calc(50% - 280px);}
    &:nth-of-type(9) {top: 160px;right: calc(50% + 160px);}
    &:nth-of-type(10) {top: 200px;right: calc(50% - 240px);}
    &:nth-of-type(11) {top: 560px;right: calc(50% - 440px);}
  }
  &.no04 {
    & img {width: 280px;}
    &:nth-of-type(12) {top: -40px;right: calc(50% + 280px);}
    &:nth-of-type(13) {top: 320px;right: calc(50% - 80px);}
    &:nth-of-type(14) {top: 360px;right: calc(50% - 560px);}
    &:nth-of-type(15) {top: 560px;right: calc(50% + 280px);}
  }
  &.no05 {
    & img {width: 240px;}
    &:nth-of-type(16) {top: -80px;right: calc(50% + 40px);}
    &:nth-of-type(17) {top: 160px;right: calc(50% + 360px);}
    &:nth-of-type(18) {top: 200px;right: calc(50% - 400px);}
    &:nth-of-type(19) {top: 560px;right: calc(50% - 160px);}
    &:nth-of-type(20) {top: 600px;right: calc(50% - 600px);}
  }
  &.no06 {
    & img {width: 160px;}
    &:nth-of-type(21) {top: 80px;right: calc(50% + 240px);}
    &:nth-of-type(22) {top: 120px;right: calc(50% - 160px);}
    &:nth-of-type(23) {top: 240px;right: calc(50% - 520px);}
    &:nth-of-type(24) {top: 360px;right: calc(50% + 240px);}
    &:nth-of-type(25) {top: 680px;right: calc(50% - 0px);}
  }
  &.no07 {
    & img {width: 160px;}
    &:nth-of-type(26) {top: -40px;right: calc(50% - 80px);}
    &:nth-of-type(27) {top: 160px;right: calc(50% + 280px);}
    &:nth-of-type(28) {top: 320px;right: calc(50% + 120px);}
    &:nth-of-type(29) {top: 400px;right: calc(50% - 360px);}
    &:nth-of-type(30) {top: 680px;right: calc(50% - 240px);}
  }
  &.no08 {
    & img {width: 120px;}
    &:nth-of-type(31) {top: 80px;right: calc(50% + 200px);}
    &:nth-of-type(32) {top: 80px;right: calc(50% - 640px);}
    &:nth-of-type(33) {top: 40px;right: calc(50% - 120px);}
    &:nth-of-type(34) {top: 120px;right: calc(50% - 280px);}
    &:nth-of-type(35) {top: 520px;right: calc(50% - 0px);}
    &:nth-of-type(36) {top: 560px;right: calc(50% - 480px);}
    &:nth-of-type(37) {top: 600px;right: calc(50% + 500px);}
  }
  &.no09 {
    & img {width: 120px;}
    &:nth-of-type(38) {top: 0px;right: calc(50% + 240px);}
    &:nth-of-type(39) {top: 40px;right: calc(50% + 500px);}
    &:nth-of-type(40) {top: 160px;right: calc(50% - 240px);}
    &:nth-of-type(41) {top: 320px;right: calc(50% - 560px);}
    &:nth-of-type(42) {top: 400px;right: calc(50% + 160px);}
    &:nth-of-type(43) {top: 520px;right: calc(50% - 400px);}
    &:nth-of-type(44) {top: 520px;right: calc(50% - 640px);}
  }
}
.on .flower {
  transition-duration: 0.4s;
  transform: scale(1);
  opacity: 1;
}
.randomFlower {
  z-index: 10;
  position: fixed;
}
</style>
