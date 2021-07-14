<template>
  <div id="sidebar"> 
    <side-bar/>
  </div>
  <div id="body">
    <router-view/>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue"

export default {
  name: "App",
  components: {
    SideBar,
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
}

#body {
  position: absolute;
  left: 240px;
  width: 85%;
  height: 100%;
  background: #F7F8FC;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
