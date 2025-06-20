<template>
  <div class="app" :class="`theme-${theme}`">
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["theme"]),
  },
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
}
</style>
