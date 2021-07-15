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
}

#body {
  position: fixed;
  top: 0%;
  left: 200px;
  right: 0%;
  height: 100%;
  background: #F7F8FC;
  overflow: scroll;
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
