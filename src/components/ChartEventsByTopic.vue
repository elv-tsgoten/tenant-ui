<script>
import { HorizontalBar } from 'vue3-chart-v2'

export default {
  name: 'EventsTopicsChart',
  extends: HorizontalBar,
  data () {
    return {
      state: {
        chartData: {
           labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
            datasets: [
              {
                label: 'Running',
                data: [20]
              },
              {
                label: 'Swimming',
                data: [10]
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
