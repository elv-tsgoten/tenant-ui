<template>
  <div class="charts-card">
    <div class="chart">
      <ChartEventsByTopic />
    </div>
  </div>
</template>

<script>
import ChartEventsByTopic from '@/components/EventsTopicsChart.vue'

export default {
  components: { 
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
.chart {
  margin: 20px;
  max-width: 1020px;
  max-height: 450px;
}
</style>