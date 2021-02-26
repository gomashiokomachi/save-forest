<template>
  <Weather />
  <figure class="mainImg"><img src="../assets/mainImg.png" alt="main image"></figure>
  <Earth />
  <Bird />
  <div class="container">
    <div class="outer">
      <TextArea 
        v-for="(item) in items" :key="item.text"
        :start="item.start"
        :end="item.end"
        :text="item.text"
      />
      <Item :start="2800" :end="3200">
        <Activity />
      </Item>
      <div
        v-parallax-timing
        eventScrollPosition="last" 
        :toggle="timingEvent"
      >
        <Flowers v-if="state.isFinish" />
        <figure class="endlogo"><img src="../assets/endlogo.png" alt="Save Forest"></figure>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import Weather from  '../components/Weather.vue'
import Earth from  '../components/Earth.vue'
import Bird from  '../components/Bird.vue'
import TextArea from  '../components/TextArea.vue' 
import Item from  '../components/Item.vue' 
import Activity from  '../components/Activity.vue'
import Flowers from  '../components/Flowers.vue'

export default {
  components: {
    Weather,
    Earth,
    Bird,
    TextArea,
    Item,
    Activity,
    Flowers
  },
  setup() {
    const state = reactive({
      isFinish: false
    })
    const timingEvent = [
      ({ target }) => {
        target.classList.add('on')
        state.isFinish = true
        const scrollTo = () => {
          state.isFinish = false
          window.scrollTo(0, 0)
        }
        window.setTimeout(scrollTo, 3200)
      },
      ({ target }) => {
        target.classList.remove('on')
        console.log('end')
      }
    ]
    return {
      state,
      timingEvent,
      items:  [
        {
          start: 0,
          end: 400,
          text: "私たちの住む地球は、表面積の約7割が海。残りの約3割が陸。そして陸の1/3すなわち全体の約1割が森林です。"
        },
        {
          start: 400,
          end: 800,
          text: "森林には地球上の野生生物の半分以上が生息していて、その生態系を守っています。"
        },
        {
          start: 800,
          end: 1200,
          text: "そして、その他にも環境を守るための多くの役割を担っています。"
        },
        {
          start: 1200,
          end: 1600,
          text: "しかし、様々な原因によって森林面積は年々減少しています。例えば、火の不始末や放火による森林火災。"
        },
        {
          start: 1600,
          end: 2000,
          text: "また、森林が回復できるスピードに配慮しない農地開発や、木材の過剰摂取・違法伐採などです。"
        },
        {
          start: 2000,
          end: 2400,
          text: "2000年から10年間で失った世界の森林面積は約5200万haです。これは、1分間に東京ドーム約2つ分の森林面積が失われ続けたことになります。"
        },
        {
          start: 2400,
          end: 2800,
          text: "近年は減少のペースが緩やかになりつつも、未だに多くの森林が失われています。"
        },
        {
          start: 3200,
          end: 3600,
          text: "森林を守るためにできることはたくさんあります。そしてそれは、多様な生物の命を守り、地球を守り、私たちの未来を守ることにつながります。"
        },
        {
          start: 3600,
          end: 4000,
          text: "私たち人間が奪ってしまった豊かな森林を、私たち人間の行動で返していきましょう。"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.mainImg img {
  position: fixed;
  top: 48px;
  right: 48px;
  width: 600px;
  @media screen and (min-width: 1024px){
    right: calc(50% - 464px);
  }
}
.container {
  height: 5000px;
}
.outer {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 3;
}
.endlogo {
  & img {
   width: 800px;
  }
  z-index: 30;
  position: absolute;
  top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) scale(0.4);
  transition-duration: 0.8s;
  opacity: 0;
}
.on .endlogo {
  transform: translate(-50%, -50%) scale(1) rotate(360deg);
  transition-duration: 0.8s;
  transition-delay: 1s;
  opacity: 1;
}
</style>
