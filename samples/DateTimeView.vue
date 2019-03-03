<template>
  <div class="date-time-block">
      <div>
          From DateTimeView something = {{currentDateTime}}
      </div>
      <div style="color: red;">Count Local: {{count}}</div>
      <p>
        <button v-on:click="increment(1)">Increment</button>
      </p>
  </div>
</template>

<script>
export default {
  name: "date-time-view",
  data() {
    return {
      currentDateTime: new Date(),
      count: 0
    };
  },

  methods: {
    increment(countIncrement){
      this.count+=countIncrement;
    }
  },

  computed: {}
};
</script>

<style scoped>
.date-time-block {
  margin: 10px;
  padding: 10px;
  background-color: blue;
  color: wheat;
}
</style>

