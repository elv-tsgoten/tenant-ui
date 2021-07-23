<template>
  <div class="Transactions">
    <TopHeader title="Transactions"/>
    <h1>This will be a transactions page.</h1>
    <ChartsCard title="Transactions"/>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'
import ChartsCard from '@/components/ChartsCard.vue'

export default {
  name: "Transactions",
  components: {
    TopHeader,
    ChartsCard
  }
}
</script>

<style scoped>

</style>
