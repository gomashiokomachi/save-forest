<template>
  <div class="canvasContainer">
    <div id="p5Canvas"></div>
  </div>
</template>

<script>
import { onMounted, onUpdated } from 'vue'
import p5 from 'p5'
import AnimationObject from '@/utils/p5Flowers'
export default {
  props: {
    isFinish: Boolean
  },
  setup(props) {
    const dots = [];
    let time = 0;
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

        for (var i = 0; i < count; i++) {
          dots[i] = new AnimationObject(p5, images, p5._lastFrameTime + Math.random() * 1000);
        }
      }

      p5.draw = () => {
        time = p5._lastFrameTime
        p5.erase();
        p5.rect(0,0,window.innerWidth, window.innerHeight);
        p5.noErase();
        for (var i = 0; i < dots.length; i++) {
          dots[i].drawMe();
          dots[i].updateValue();
        }
      }
    }
    onUpdated(() => {
      if(props.isFinish) {
        dots.forEach((v) => {
          v.sizeScale = 0
          v.delay = time + Math.random() * 1000;
          v.isShow = true
        })
      } else {
        dots.forEach((v) => {
        console.log(time, time + Math.random() * 1000)
          v.delay = time + Math.random() * 1000
          v.isShow = false
        })
      }
    })
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
