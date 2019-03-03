<template>
  <div>
    <h1>VUE demo app loaded {{ timeLoaded }}</h1>
    <highlights/>
    <listings/>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      timeLoaded: new Date()
    };
  }
};
</script>