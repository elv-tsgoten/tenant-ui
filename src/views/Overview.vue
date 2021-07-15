<template>
  <div class="overview">
    <TopHeader title="Overview"/>
    <div id="cards">
      <div class="twocards">
        <SummaryCard title="Users Summary" tenants="All" link="/users" :info=Users.info :keys=Users.keys />
        <SummaryCard title="Objects" tenants="All" link="/objects" :info=Objects.info :keys=Objects.keys />
      </div>
      <div class="twocards">
        <SummaryCard title="Usage" tenants="" link="/usage"/>
        <SummaryCard title="Marketplace" tenants="" link="/marketplace"/>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'
import SummaryCard from '@/components/SummaryCard.vue'

export default {
  name: 'Overview',
  components: {
    TopHeader,
    SummaryCard
  }, 
  data() {
    return {
      Users: {
        info: {
          "Tenants": "95",
          "Users": "1005",
          "Groups": "3"
        },
        keys: ["Tenants", "Users", "Groups"]
      },
      Objects: {
        info: {
          "Libraries": "25",
          "Content Objects": "500",
          "Content Types": "30",
          "Other": "55" 
        },
        keys: ["Libraries", "Content Objects", "Content Types", "Other"]
      },
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
