<template>
  <div class="text-with-icon">
    <font-awesome-icon :icon="icon" />
    <span class="text">
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  name: "TextWithIcon",
  props: {
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.text-with-icon {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-text);
}

.text-with-icon .icon {
  margin-right: 8px;
}

.text {
  color: var(--color-text);
  font-size: 14px;
}
</style>
