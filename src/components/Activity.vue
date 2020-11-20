<template>
  <h2 class="activityTitle">私たちにできること</h2>
    <ul class="activityList">
      <li class="activityItem">紙の消費を控える</li>
      <li class="activityItem">エコバッグの持参</li>
      <li class="activityItem">リサイクル品の購入</li>
      <li class="activityItem">国産木材の利用</li>
      <li class="activityItem">森林保全活動への参加</li>
    </ul>
</template>

<style lang="scss">
.activityTitle {
  margin-top: 64px;
  text-align: center;
  font-size: 36px;
  font-family: '手札体-简';
}
.activityList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0 auto;
  max-width: 1024px;
}
.activityItem {
  margin-top: 64px;
  width: 30%;
  height: 216px;
  background-image: url(../assets/leafImg.png);
  background-size: 216px;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 24px;
  font-family: '手札体-简';
  text-align: center;
  line-height: 216px;
}
</style>
