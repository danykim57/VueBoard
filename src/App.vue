<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HeaderDef/>
  <router-view/> 
  <FooterDef/>
</template>

<script>
import HeaderDef from './components/common/HeaderDef'

import FooterDef from './components/common/FooterDef'

export default {
  name: 'App',
  components: {
    HeaderDef,
    FooterDef
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
