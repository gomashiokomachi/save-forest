<template>
  <div class="canvasContainer">
    <div id="p5Canvas"></div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import p5 from 'p5'
import AnimationObject from '@/utils/p5Flowers'
export default {
  setup() {
    const dots = [];
    const count = 200;
    const init = (p5) => {
      p5.setup = () => {
        const canvas = p5.createCanvas(window.innerWidth, window.innerHeight);
        canvas.parent('p5Canvas');

        const images = [{
            img: p5.loadImage(require('@/assets/flowerImg01.png')),
            width: 440
          },
          {
            img: p5.loadImage(require('@/assets/flowerImg02.png')),
            width: 360
          },
          {
            img: p5.loadImage(require('@/assets/flowerImg03.png')),
            width: 280
          },
          {
            img: p5.loadImage(require('@/assets/flowerImg04.png')),
            width: 280
          },
          {
            img: p5.loadImage(require('@/assets/flowerImg05.png')),
            width: 240
          },
          {
            img: p5.loadImage(require('@/assets/flowerImg06.png')),
            width: 160
          },
          {
            img: p5.loadImage(require('@/assets/flowerImg07.png')),
            width: 160
          },
          {
            img: p5.loadImage(require('@/assets/flowerImg08.png')),
            width: 120
          },
          {
            img: p5.loadImage(require('@/assets/flowerImg09.png')),
            width: 120
          }
        ]

        setTimeout(() => {
          dots.forEach((v) => {
            v.isShow = false
            v.delay = p5._lastFrameTime + Math.random() * 500
          })
        }, 2600)

        console.log(p5._lastFrameTime)

        for (var i = 0; i < count; i++) {
          dots[i] = new AnimationObject(p5, images, p5._lastFrameTime + Math.random() * 5000);
        }
      }

      p5.draw = () => {
        p5.erase();
        p5.rect(0,0,window.innerWidth, window.innerHeight);
        p5.noErase();
        for (var i = 0; i < dots.length; i++) {
          dots[i].drawMe();
          dots[i].updateValue();
        }
      }
    }
    onMounted(()=> {
      new p5(init)
    })
  }
}
</script>

<style lang="scss">
.canvasContainer {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
