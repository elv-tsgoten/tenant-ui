<template>
  <div class="sidebar">
    <div id="app-header">
      <img src="@/assets/logo.png" alt="elv">
      <h1>Eluvio Tenancy Dashboard</h1>
    </div>
    <div id="nav-items">
      <router-link to="/">
        <div class="item">
          <SideBarItem name="Overview" icon="overview.svg"/>
        </div>
      </router-link>
      <router-link to="/users">
        <div class="item">
          <SideBarItem name="Users" icon="users.svg"/>
        </div>
      </router-link>
      <router-link to="/objects">
        <div class="item">
          <SideBarItem name="Objects" icon="objects.svg"/>
        </div>
      </router-link>
      <router-link to="/Transactions">
        <div class="item">
          <SideBarItem name="Transactions" icon="transactions.svg"/>
        </div>
      </router-link>
      <router-link to="/usage">
        <div class="item">
          <SideBarItem name="Usage" icon="usage.svg"/>
        </div>
      </router-link>
      <router-link to="/marketplace">
        <div class="item">
          <SideBarItem name="Marketplace" icon="marketplace.svg"/>
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
  position: fixed;
  width: 255px;
  height: 110%;
  left: -2px;
  top: -2px;
  /* sidebar / bg */
  background: #363740;
  text-decoration: none;
}

#nav-items a .item:hover {
  background: #2e2e33;
}

#nav-items a.router-link-exact-active .item {
  background: #424246;
}

#app-header {
  display: flex;
  margin: 20px;
  align-items: center;
}

img {
  width: 64px;
  height: 64px;
  padding: 5px;
}

h1 {
  /* Bold 19 (0.4 px) */
  text-align: left;
  font-family: Mulish;
  font-style: bold;
  font-weight: bold;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.4px;

  /* sidebar / gray */
  color: #A4A6B3;

  opacity: 0.7;
}

</style>