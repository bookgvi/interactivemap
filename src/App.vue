<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col">
        <router-link to="/hello">HelloWorld</router-link>
      </div>
      <div class="col">
        <router-link to="/leafletMap">Map</router-link>
      </div>
    </div>
    <div class="row justify-center mt-5">
      <div class="col">
        <router-view :msg="hello"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: _ => ({
    hello: 'Holly, Vue!'
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
