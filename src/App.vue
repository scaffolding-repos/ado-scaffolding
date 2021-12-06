<template>
  <div id="app" style="height:100%">
    <MainPanel/>
  </div>
</template>

<script>
import MainPanel from './components/MainPanel.vue'

export default {
  name: 'App',
  components: {
    MainPanel
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 20px;
  font-size: 0.8em !important
}
</style>
