<template>
  <div class="overview">
    <TopHeader title="Overview"/>
    <div id="cards">
      <div class="twocards">
        <SummaryCard title="Users Summary" tenants="All" link="/users" :info=Users.info :keys=Users.keys />
        <SummaryCard title="Objects" tenants="All" link="/objects" :info=Objects.info :keys=Objects.keys />
      </div>
      <div class="twocards">
        <ChartsCard title="Transactions" />
      </div>
      <div class="twocards">
        <SummaryCard title="Usage" tenants="" link="/usage"/>
        <SummaryCard title="Marketplace" tenants="All" link="/marketplace" :info=Marketplace.info :keys=Marketplace.keys />
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'
import SummaryCard from '@/components/SummaryCard.vue'
import ChartsCard from '@/components/ChartsCard.vue'

import { getTenantInfo } from '@/scripts/UsersRequests.js'

export default {
  name: 'Overview',
  components: {
    TopHeader,
    SummaryCard,
    ChartsCard
  }, 
  data() {
    return {
      Users: {
        info: {
          "Tenants": "95",
          "Users": "1005",
          "Groups": "3"
        },
        keys: ["Tenants", "Users", "Groups"],
        dump: this.getTenants(),
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
      Marketplace: {
        info: {
          "NFTs": "4",
          "Sites": "3",
          "NTPs": "9",
          "Events": "10" 
        },
        keys: ["NFTs", "Sites", "NTPs", "Events"]
      },
    }
  },
  methods: {
    async getTenants() {
      let tid = "iteniSQ8XYv7WBKGxmFwHPFz5mwnZDz";
      console.log(await getTenantInfo(tid));
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
