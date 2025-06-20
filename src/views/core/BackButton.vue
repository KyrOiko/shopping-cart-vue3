<template>
  <button @click="goBack" class="back-button-button">
    <font-awesome-icon :icon="['fas', 'arrow-left']" class="back-button-icon" />
  </button>
</template>

<script>
export default {
  name: "BackButton",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.back-button-button {
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  background-color: transparent;
  border: 1px solid var(--color-text);
}

.back-button-icon {
  color: var(--color-text);
}
</style>
