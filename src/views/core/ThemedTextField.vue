<template>
  <input
    class="themed-text-field"
    :value="value"
    :class="{ invalid: !isValid }"
    v-bind="$attrs"
  />
  <span class="error-message" v-if="!isValid">{{ rules.errorMessage }}</span>
</template>

<script>
export default {
  name: "ThemedTextField",
  computed: {
    isValid() {
      if (this.value.length === 0 || this.rules === null) {
        return true;
      }
      return this.rules.validate(this.value);
    },
  },
  props: {
    rules: {
      type: Object,
      default: null,
    },
    value: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.themed-text-field {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 10px 8px;
  font-size: 14px;
  color: var(--color-text);
  height: 30px;
}

.themed-text-field:hover {
  border-color: var(--color-secondary-light);
}

.themed-text-field:focus {
  border-color: var(--color-secondary);
}

.invalid:hover,
.invalid:focus,
.invalid {
  border-color: var(--color-error);
  color: var(--color-error);
}

.error-message {
  color: var(--color-error);
  font-size: 12px;
  margin-top: 4px;
}
</style>
