<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body,div,input,form,p,span,h1,h2,h3,h4,ul,li,a {
  padding: 0;
  margin: 0;
}
a {
  list-style: none;
  text-decoration: none;
  color: #000;
}
li {
  list-style: none;
}
</style>
