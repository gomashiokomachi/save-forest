<template>
  <header class="header">
    <h1 class="logo"><img src="../assets/sitelogo.png" alt="Save Forest"></h1>
  </header>
</template>

<style lang="scss">
.logo {
  position: fixed;
  top: 24px;
  left: 24px;
  z-index: 10;
  & img {
    width: 280px;
  }
  @media screen and (min-width: 1024px){
    left: calc(50% - 488px);
  }
}
</style>
