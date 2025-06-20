<template>
  <button class="icon-button" @click="onClick" :disabled="disabled">
    <font-awesome-icon
      :icon="icon"
      class="icon-button-icon"
      :style="{
        width: iconSize,
        height: iconSize,
      }"
    />
  </button>
</template>

<script>
export default {
  name: "IconButton",
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
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "10px",
    },
  },
  computed: {
    iconSize() {
      return this.size;
    },
  },
};
</script>

<style scoped>
.icon-button {
  background: var(--color-secondary);
  color: var(--color-text);
  border: none;
  padding: 4px 8px;
  border-radius: 5px;
  cursor: pointer;
}

.icon-button:disabled {
  background: var(--color-neutral);
  color: var(--color-text-muted);
}
</style>
