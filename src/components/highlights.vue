<script>
import store from "../store-modules/store";

export default {
  data() {
    return {
      currentDateTime: new Date()
    };
  },

  methods: {
    refresh(countIncrement) {
      this.currentDateTime = new Date();

      // Simplest way to set global state
      store.commit("increment", { increment: 2 });
    }
  },

  computed: {
    globalCountLocally() {
      // Simplest way to get global state
      return store.state.globalCount;
    }
  }
};
</script>

<template>
  <div class="highlights">
    <h2>Highlights at {{currentDateTime}}</h2>
    <div class="highlights-item" style="color: red;">Count Local: {{globalCountLocally}}</div>
    <div class="highlights-item">
      <button v-on:click="refresh(1)">Refresh</button>
    </div>
  </div>
</template>

<style scoped>
.highlights {
  margin: 10px;
  background-color: aquamarine;
}

.highlights .highlights-item {
  padding: 10px 20px;
}
</style>

