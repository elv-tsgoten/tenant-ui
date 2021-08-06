<template>
  <div class="users">
    <TopHeader title="Users"/>
    <div id="cards">
      <div class="twocards">
        <SummaryCard title="Summary Past Day" tenants="All" link="" :info=Day.info :keys=Day.keys />
        <SummaryCard title="Summary Past Week" tenants="All" link="" :info=Week.info :keys=Week.keys />
      </div>
      <div class="twocards">
        <SummaryCard title="Summary Past Month" tenants="Month" link="" :info=Month.info :keys=Month.keys />
        <SummaryCard title="Summary All" tenants="All" link="" :info=All.info :keys=All.keys />
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'
import SummaryCard from '@/components/SummaryCard.vue'

export default {
  name: "Users",
  components: {
    TopHeader,
    SummaryCard
  },
  data() {
    return {
      Day: {},
      Week: {},
      Month: {},
      All: {}
    }
  }
}
</script>

<style scoped>
.twocards {
  display: flex;
  margin-left: 10px;
  justify-content: center;
}
</style>
