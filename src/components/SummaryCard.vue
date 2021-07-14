<template>
  <div class="summary-card">
    <h1>{{title}}</h1>
    <h2>Tenants: {{tenants}}</h2>
    <router-link :to="link">
      <p>View all</p> 
    </router-link>
    <div id="summary-list">
      <ul>
        <li v-for="val in keys"
        :key="val">
        {{val}}: {{info[val]}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SummaryCard",
  props: {
    title: String, 
    tenants: String,
    link: String,
    info: Object,
    keys: Array,
  }
}
</script>

<style scoped>
.summary-card {
  /* position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px; */
  height: 300px;
  width: 550px;
  margin: 10px;

  /* grayscale / white */
  background: #FFFFFF;
  /* grayscale / divider */
  border: 1px solid #DFE0EB;
  box-sizing: border-box;
  border-radius: 8px;
}

h1 {
  /* Bold 19 (0.4 px) */
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 24px;
  /* identical to box height */
  letter-spacing: 0.4px;
  /* grayscale / black */
  color: #252733;
}

h2 {
  /* position: absolute;
  height: 16px;
  left: 32px;
  right: 178px;
  top: 64px; */

  /* Reg 12 (0.1 px) */
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */
  letter-spacing: 0.1px;
  /* grayscale / gray */
  color: #9FA2B4;
}
</style>
