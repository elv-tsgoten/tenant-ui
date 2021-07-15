<template>
  <div class="charts-card">
    <h1>{{title}} chart will be here.</h1>
    <div id="chart">
      <SportChart />
    </div>
  </div>
</template>

<script>
import SportChart from './SportChart.vue'

export default {
  components: { SportChart },
  name: "ChartsCard",
  props: {
    title: String,
  }
}
</script>

<style scoped>
.charts-card {
  height: 350px;
  width: 1020px;
  margin: 10px;
  background: #FFFFFF;
  border: 1px solid #DFE0EB;
  box-sizing: border-box;
  border-radius: 16px;
}
#chart {
  max-width: 200px;
}
</style>