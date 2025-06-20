<template>
  <transition name="fade">
    <div v-if="isVisible" class="snackbar">
      <p>{{ message }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Snackbar",
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    showSnackbar(duration = 3000) {
      this.isVisible = true;
      setTimeout(() => {
        this.isVisible = false;
      }, duration);
    },
  },
};
</script>

<style scoped>
.snackbar {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-success);
  padding: 16px;
  color: var(--color-text);
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  border-radius: 10px;
  width: 50%;
}
</style>
