<template>
  <figure class="mainImg"><img src="../assets/mainImg.png" alt="main image"></figure>
  <div class="textContainer">
    <div class="textOuter">
      <div class="textInner"
        v-for="(item) in items" :key="item.text"
        v-parallax-fit="[
          {
            start: item.start,
            end: item.start + 50,
            fromStyle: {
              opacity: 0
            },
            toStyle: {
              opacity: 1,
            },
          },
          {
            start: item.end - 50,
            end: item.end,
            fromStyle: {
              opacity: 1
            },
            toStyle: {
              opacity: 0,
            },
          }
        ]"
      >
        <p class="text">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
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
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.textContainer {
  height: 4000px;
}
.textOuter {
  height: 100%;
  width: 100%;
  position: fixed;
}
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
.mainImg img {
  position: fixed;
  top: 48px;
  right: 48px;
  width: 600px;
  @media screen and (min-width: 1024px){
    right: calc(50% - 464px);
  }
}
</style>
