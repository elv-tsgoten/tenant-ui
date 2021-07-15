<template>
  <div class="summary-card">
    <div id="card-header">
      <div id="title-summary">
        <h1>{{title}}</h1>
        <h2>Tenants: {{tenants}}</h2>
      </div>
      <div id="view-all">
        <router-link :to="link"><p>View all</p></router-link>
      </div>
    </div>
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
  height: 250px;
  width: 450px;
  margin: 10px;
  background: #FFFFFF;
  border: 1px solid #DFE0EB;
  box-sizing: border-box;
  border-radius: 16px;
}

#card-header {
  display: flex;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  align-items: left;
  justify-content: space-between;
}

#title-summary {
  align-items: left;
}

h1 {
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: #252733;
  text-align: left;
}

h2 {
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 10px;
  letter-spacing: 0.1px;
  color: #9FA2B4;
  text-align: left;
}

p {
  font-family: Mulish;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: right;
  letter-spacing: 0.2px;
  color: #3751FF;
}

a {
  text-decoration: none;
}

</style>
