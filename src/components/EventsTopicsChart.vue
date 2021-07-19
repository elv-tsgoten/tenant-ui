
<script>
import { HorizontalBar } from 'vue3-chart-v2'

export default {
  name: 'EventsTopicsChart',
  extends: HorizontalBar,
  data () {
    return {
      state: {
        chartData: {
            labels: ['Data'],
            datasets: [
              {
                label: 'AccessRequest',
                data: [796],
              },
              {
                label: 'CommitPending',
                data: [738],

              },
              {
                label: 'GetAccessWallet',
                data: [156]
              },
              {
                label: 'RightsChanged',
                data: [477]
              },
              {
                label: 'UpdateRequest',
                data: [448]
              },
              {
                label: 'VersionConfirm',
                data: [742]
              },
            ]
        },
        chartOptions: {
          responsive: false,
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.state.chartData, this.state.chartOptions)
  }
}
</script>
