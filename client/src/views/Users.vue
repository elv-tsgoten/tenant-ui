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

import counts from '@/scripts/TimeSpecificCounts.js'

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
  },
  async created() {
    try {
      const All = {
        info: {
          "Tenants": await counts.getTenantCount("all"),
          "Users": await counts.getUsersCount("all"),
          "Groups": await counts.getGroupsCount("all"),
        },
        keys: ["Tenants", "Users", "Groups"],
      };
      this.All = All;
      const Day = {
        info: {
          "Tenants": await counts.getTenantCount("10"),
          "Users": await counts.getUsersCount("10"),
          "Groups": await counts.getGroupsCount("10"),
        },
        keys: ["Tenants", "Users", "Groups"],
      };
      this.Day = Day;
      const Week = {
        info: {
          "Tenants": await counts.getTenantCount("17"),
          "Users": await counts.getUsersCount("17"),
          "Groups": await counts.getGroupsCount("17"),
        },
        keys: ["Tenants", "Users", "Groups"],
      };
      this.Week = Week;
      const Month = {
        info: {
          "Tenants": await counts.getTenantCount("30"),
          "Users": await counts.getUsersCount("30"),
          "Groups": await counts.getGroupsCount("30"),
        },
        keys: ["Tenants", "Users", "Groups"],
      };
      this.Month = Month;
    } catch (err) {
      console.error(err.message);
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
