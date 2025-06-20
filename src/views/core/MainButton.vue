<template>
  <button class="main-button" @click="onClick" :disabled="disabled">
    <slot v-if="!isLoading"></slot>
    <span v-else class="loading-spinner"></span>
  </button>
</template>

<script>
export default {
  name: "MainButton",
  inheritAttrs: false,
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.main-button {
  background: var(--color-secondary);
  color: var(--color-text);
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
}

.main-button:disabled {
  background: var(--color-neutral);
  color: var(--color-text-muted);
  cursor: auto;
}

.loading-spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-text);
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
