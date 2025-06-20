<template>
  <div class="titled-text-field">
    <span class="titled-text-field-title">{{ title }}</span>
    <ThemedTextField v-bind="$attrs" />
  </div>
</template>

<script>
import ThemedTextField from "./ThemedTextField.vue";

export default {
  components: { ThemedTextField },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.titled-text-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.titled-text-field-title {
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--color-text);
}
</style>
