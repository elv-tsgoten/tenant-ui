<template>
  <div class="sidebar-item">
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
  padding: 5px;
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
  line-height: 20px;
  /* identical to box height */
  letter-spacing: 0.2px;

  /* sidebar / gray */
  color: #A4A6B3;
}
</style>