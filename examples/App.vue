<template>
  <div id="app">
    <img alt="Vue logo" src="./logo.png" />
    <div><router-link to="/">Home</router-link> | <router-link to="/jsx">JSX</router-link> | <router-link to="/loading">loading组件</router-link></div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img {
  widows: 200px;
  height: 100px;
}
</style>
