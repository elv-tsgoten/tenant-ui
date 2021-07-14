<template>
  <div class="sidebar">
    <div id="nav-items">
      <h1>Eluvio Tenancy Dashboard</h1>
      <router-link to="/">
        <side-bar-item name="Overview"/>
      </router-link>
      <router-link to="/about">
        <side-bar-item name="Users"/>
      </router-link>
      <side-bar-item name="Objects"/>
      <side-bar-item name="Transactions"/>
      <side-bar-item name="Usage"/>
      <side-bar-item name="Marketplace"/>
    </div>
  </div>
</template>

<script>
import SideBarItem from "@/components/SideBarItem.vue"

export default {
  name: "SideBar",
  components: {
    SideBarItem
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@700&display=swap');

.sidebar {
  display: flexbox;
  position: absolute;
  width: 255px;
  height: 110%;
  left: -2px;
  top: -2px;
  /* sidebar / bg */
  background: #363740;
}

#navitems {
  position: absolute;
  display: flexbox;
  top: 70px;
}

h1 {
  /* position: relative; */
  text-align: center;
  width: 155px;
  height: 50px;
  /* top: 41px; */

  /* Bold 19 (0.4 px) */
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.4px;

  /* sidebar / gray */
  color: #A4A6B3;

  opacity: 0.7;
}

</style>