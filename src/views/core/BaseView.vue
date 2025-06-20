<template>
  <div class="base-view">
    <Header :title="title" class="header" :showBackButton="showBackButton">
      <template #trailing>
        <slot name="headerTrailing"></slot>
      </template>
    </Header>
    <slot name="content"></slot>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "BaseView",
  components: {
    Header,
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
};
</script>

<style scoped>
.base-view {
  height: 100%;
  width: 100%;
  background: var(--color-bg);
}
</style>
