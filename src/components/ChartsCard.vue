<template>
  <div class="charts-card">
    <canvas id="planet-chart"></canvas>
    <h1>{{title}} chart will be here.</h1>
  </div>
</template>

<script>
import Chart from 'chart.js'
import planetChartData from '@/scripts/planet-data.js'

export default {
  name: "ChartsCard",
  props: {
    title: String,
  },
  data() {
    return {
      planetchartdata: planetChartData,
    }
  },
  async mounted() {
    const ctx = document.getElementById('planet-chart');
    const chart = await new Chart(ctx, this.planetChartData);  
    console.log(chart)
    console.log(ctx)
  }
}
</script>

<style scoped>
/* .charts-card {
  height: 350px;
  width: 1020px;
  margin: 10px;
  background: #FFFFFF;
  border: 1px solid #DFE0EB;
  box-sizing: border-box;
  border-radius: 16px;
} */
</style>