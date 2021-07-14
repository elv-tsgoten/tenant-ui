<template>
  <div class="overview">
    <TopHeader title="Overview"/>
    <div id="cards">
      <div class="twocards">
        <SummaryCard title="Users Summary" tenants="All" link="/users" :info=info :keys=keys />
        <SummaryCard title="Objects" link=""/>
      </div>
      <div class="twocards">
        <SummaryCard title="Usage" link=""/>
        <SummaryCard title="Marketplace" link=""/>
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
      info: {
        "Tenants": "95",
        "Users": "1005",
        "Groups": "3"
      },
      keys: ["Tenants", "Users", "Groups"]
    }
  }
}
</script>

<style scoped>
/* .overview {
} */
.twocards {
  display: flex;
}

</style>
