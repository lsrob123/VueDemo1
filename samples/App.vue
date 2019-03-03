<style>
.hello {
  color: violet;
}
</style>

<script>
export default {
  data() {
    return {
      currentDateTime: `Someone5 ${new Date()}`,
    };
  }
};
</script>

<template>
  <div>
    <h1>
      <span class="hello">Hello World {{currentDateTime}}</span>
    </h1>

    <!-- TODO: Find out why not working -->
    <!--<div v-component="date-time-view"></div>-->
    
    <date-time-view />
  </div>
</template>

