<template>
  <div class="listings">
      <h2>Listings at {{currentDateTime}}</h2>
      <div class="listings-item" style="color: red;">Count Local: {{count}}</div>
      <div class="listings-item">
        <button v-on:click="refresh(1)">Refresh</button>
      </div>
  </div>
</template>

<script>
export default {
  //name: "listings",
  data() {
    return {
      currentDateTime: new Date(),
      count: 0
    };
  },

  methods: {
    refresh(countIncrement){
      this.currentDateTime=new Date();
      this.count+=countIncrement;
    }
  },

  computed: {}
};
</script>

<style scoped>
.listings {
  margin: 10px;
  background-color:cadetblue;
}

.listings .listings-item {
  padding: 10px 20px;
}

</style>
