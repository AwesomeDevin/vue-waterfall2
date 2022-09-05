<template>
  <div id="app">
    <!-- <keep-alive> -->
    <router-view />
    <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  height: 100%;
  width: 100%;
  overflow: hidden;
  /*margin-top: 60px;*/
}
body {
  /* width: 100vw;
  height: 100vh; */
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  box-sizing: border-box;
}
</style>
