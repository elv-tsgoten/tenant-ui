<template>
  <div class="home">
    <TopHeader title="Overview"/>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'

export default {
  name: 'Home',
  components: {
    TopHeader
  }
}
</script>
