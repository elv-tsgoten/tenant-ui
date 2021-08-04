<template>
  <div class="sidebar-item">
    <img :src="require(`../assets/${icon}`)" :alt="icon" />
    <h1>{{name}}</h1>
  </div>
</template>

<script>
export default {
  name: "SideBarItem",
  props: {
    name: String,
    icon: String,
  }
}
</script>

<style scoped>
.sidebar-item {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-left: 5px;
}
img {
  width: 20px;
  height: 20px;
  padding: 10px;
  opacity: 0.5;
}
h1 {
  /* position: absolute; */
  height: 20px;
  left: 72px;
  right: 24px;
  /* top: calc(50% - 20px/2); */

  /* Reg 16 (0.2 px) */
  font-family: Mulish;
  font-style: normal;
  font-weight: lighter;
  font-size: 18px;
  line-height: 15px;
  /* identical to box height */
  letter-spacing: 0.2px;

  /* sidebar / gray */
  color: #A4A6B3;
}
</style>