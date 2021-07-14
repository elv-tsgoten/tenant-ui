<template>
  <div class="overview">
    <TopHeader title="Overview"/>
    <div id="cards">
      <div class="twocards">
        <SummaryCard title="Users Summary"/>
        <SummaryCard title="Objects"/>
      </div>
      <div class="twocards">
        <SummaryCard title="Usage"/>
        <SummaryCard title="Marketplace"/>
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
