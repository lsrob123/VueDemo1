<template>
  <div class="highlights">
      <h2>Highlights at {{currentDateTime}}</h2>
      <div class="highlights-item" style="color: red;">Count Local: {{count}}</div>
      <div class="highlights-item">
        <button v-on:click="refresh(1)">Refresh</button>
      </div>
  </div>
</template>

<script>
export default {
  //name: "highlights",
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
.highlights {
  margin: 10px;
  background-color: aquamarine;
}

.highlights .highlights-item {
  padding: 10px 20px;
}

</style>

