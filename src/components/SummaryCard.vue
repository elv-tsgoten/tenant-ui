<template>
  <div class="summary-card">
    <h1>{{title}}</h1>
    <h2>Tenants: {{tenants}}</h2>
    
  </div>
</template>

<script>
export default {
  name: "SummaryCard",
  props: {
    title: String, 
    keys: Array,
    Values: Array,
  }
}
</script>

<style scoped>
.summary-card {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;

  /* grayscale / white */

  background: #FFFFFF;
  /* grayscale / divider */

  border: 1px solid #DFE0EB;
  box-sizing: border-box;
  border-radius: 8px;
}
</style>
