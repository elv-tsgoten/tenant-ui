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

import counts from '@/scripts/OverviewCounts.js'

export default {
  name: 'Overview',
  components: {
    TopHeader,
    SummaryCard,
    ChartsCard
  }, 
  data() {
    return {
      Users: {},
      Objects: {},
      Marketplace: {},
    }
  },
  async created() {
    try {
      const Users = {
        info: {
          "Tenants": await counts.getTenantCount(),
          "Users": await counts.getUsersCount(),
          "Groups": await counts.getGroupsCount(),
        },
        keys: ["Tenants", "Users", "Groups"],
      };
      this.Users = Users;
      const Objects = {
        info: {
          "Libraries": await counts.getLibrariesCount(),
          "Content Objects": await counts.getContentCount(),
          "Content Types": await counts.getContentTypeCount(),
          "Content Spaces": await counts.getContentSpacesCount(),
        },
        keys: ["Libraries", "Content Objects", "Content Types", "Content Spaces"]
      };
      this.Objects = Objects;
      const Marketplace = {
        info: {
          "Tokens": await counts.getTokenCount(),
          "Sites": "?",
          "NTPs": "?",
          "Events": "?" 
        },
        keys: ["Tokens", "Sites", "NTPs", "Events"]
      }
      this.Marketplace = Marketplace;
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
