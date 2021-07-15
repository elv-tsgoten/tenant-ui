<template>
  <div class="top-header">
    <h1>{{title}}</h1>
    <h1>{{user}}</h1>
  </div>
</template>

<script>
export default {
  name: "TopHeader",
  props: {
    title: String, 
  }
}
</script>

<style scoped>
.top-header {
  margin: 20px;
}

h1 {
  margin: 10px;
  display: flex;

  /* Bold 24 (0.3 px) */
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.3px;

  /* grayscale / black */
  color: #252733;
}

</style>