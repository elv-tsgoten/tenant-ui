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
          <div id="summary-list-item">
            <h3>{{val}}</h3>
            <h4>{{info[val]}}</h4>
          </div>
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
  height: 300px;
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

h3 { 
  font-family: Mulish;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: #252733;  
}

h4 {
  font-family: Mulish;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 10px;
  text-align: right;
  letter-spacing: 0.2px;
  color: #9FA2B4;
}

p {
  font-family: Mulish;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 10px;
  text-align: right;
  letter-spacing: 0.2px;
  color: #3751FF;
}

a {
  text-decoration: none;
}

ul {
  padding: 0px;
  list-style-type: none;
}
 
li {
  text-align: left;
}

#summary-list-item {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #DFE0EB;
}
</style>
