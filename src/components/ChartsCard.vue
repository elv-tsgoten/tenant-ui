<template>
  <div class="charts-card">
    <div id="chart">
      <!-- <SportChart /> -->
      <ChartEventsByTopic :width="1000" />
    </div>
  </div>
</template>

<script>
// import SportChart from './SportChart.vue'
import ChartEventsByTopic from '@/components/EventsTopicsChart.vue'

export default {
  components: { 
    // SportChart,
    ChartEventsByTopic
  },
  name: "ChartsCard",
  props: {
    title: String,
  }
}
</script>

<style scoped>
.charts-card {
  height: 450px;
  width: 1020px;
  margin: 10px;
  background: #FFFFFF;
  border: 1px solid #DFE0EB;
  box-sizing: border-box;
  border-radius: 16px;
}
#chart {
  max-width: 200px;
  max-height: 350px;
}
</style>