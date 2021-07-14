<template>
  <div class="sidebar">
    <h1>Eluvio Tenancy Dashboard</h1>
    <div id="nav-items">
      <router-link to="/">
        <div class="item">
          <SideBarItem name="Overview"/>
        </div>
      </router-link>
      <router-link to="/users">
        <div class="item">
          <SideBarItem name="Users"/>
        </div>
      </router-link>
      <router-link to="/objects">
        <div class="item">
          <SideBarItem name="Objects"/>
        </div>
      </router-link>
      <router-link to="/Transactions">
        <div class="item">
          <SideBarItem name="Transactions"/>
        </div>
      </router-link>
      <router-link to="/usage">
        <div class="item">
          <SideBarItem name="Usage"/>
        </div>
      </router-link>
      <router-link to="/marketplace">
        <div class="item">
          <SideBarItem name="Marketplace"/>
        </div>
      </router-link>
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
  width: 240px;
  height: 110%;
  left: -2px;
  top: -2px;
  /* sidebar / bg */
  background: #363740;
}

#nav-items a .item:hover {
  background: #2e2e33;
}

#nav-items a.router-link-exact-active .item {
  background: #424246;
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