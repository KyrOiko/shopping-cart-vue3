<template>
  <div class="header">
    <div class="header-title">
      <BackButton v-if="showBackButton" />
      {{ title }}
    </div>
    <div class="header-actions">
      <IconButton
        :icon="themeIcon"
        @click="toggleTheme"
        class="theme-icon"
        :size="24"
      />
      <slot name="trailing"></slot>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BackButton from "./BackButton.vue";
import IconButton from "./IconButton.vue";
export default {
  name: "Header",
  components: {
    IconButton,
    BackButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    showBackButton: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(["theme"]),
    themeIcon() {
      return this.theme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun";
    },
  },
  methods: {
    toggleTheme() {
      this.$store.commit("setTheme", this.theme === "dark" ? "light" : "dark");
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.header {
  background: var(--color-secondary) !important;
  padding: 10px 16px;
  height: 5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}
.header-title {
  font-size: 32px;
  font-weight: bold;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 10px;
}
.theme-icon {
  cursor: pointer;
  font-size: 24px;
  color: var(--color-text);
}
</style>
