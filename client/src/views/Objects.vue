<template>
  <div class="Objects">
    <TopHeader title="Objects"/>
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
  name: "Objects",
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
          "Libraries": await counts.getLibrariesCount("all"),
          "Content Objects": await counts.getContentCount("all"),
          "Content Types": await counts.getContentTypeCount("all"),
          "Content Spaces": await counts.getContentSpacesCount("all"),
        },
        keys: ["Libraries", "Content Objects", "Content Types", "Content Spaces"]
      };
      this.All = All;
      const Day = {
        info: {
          // TODO: Change back to 1, just for demo
          "Libraries": await counts.getLibrariesCount("17"),
          "Content Objects": await counts.getContentCount("17"),
          "Content Types": await counts.getContentTypeCount("17"),
          "Content Spaces": await counts.getContentSpacesCount("17"),
        },
        keys: ["Libraries", "Content Objects", "Content Types", "Content Spaces"]
      };
      this.Day = Day;
      const Week = {
        info: {
          // TODO: Change back to 7, just for demo
          "Libraries": await counts.getLibrariesCount("24"),
          "Content Objects": await counts.getContentCount("24"),
          "Content Types": await counts.getContentTypeCount("24"),
          "Content Spaces": await counts.getContentSpacesCount("24"),
        },
        keys: ["Libraries", "Content Objects", "Content Types", "Content Spaces"]
      };
      this.Week = Week;
      const Month = {
        info: {
          "Libraries": await counts.getLibrariesCount("30"),
          "Content Objects": await counts.getContentCount("30"),
          "Content Types": await counts.getContentTypeCount("30"),
          "Content Spaces": await counts.getContentSpacesCount("30"),
        },
        keys: ["Libraries", "Content Objects", "Content Types", "Content Spaces"]
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
