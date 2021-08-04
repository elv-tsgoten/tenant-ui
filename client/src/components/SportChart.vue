<script>
import { Radar } from 'vue3-chart-v2'

export default {
  name: 'SportChart',
  extends: Radar,
  data () {
    return {
      state: {
        chartData: {
           labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
            datasets: [
              {
                label: 'Human 1',
                data: [20, 10, 4, 2]
              },
              {
                label: 'Human 2',
                data: [10, 20, 2, 4]
              }
            ]
        },
        chartOptions: {
          responsive: true,
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.state.chartData, this.state.chartOptions)
  }
}
</script>
