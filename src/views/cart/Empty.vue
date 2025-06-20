<template>
  <div class="cart-empty">
    <h1>Cart is empty !</h1>
    <p>Add items to your cart to get started</p>
    <MainButton @click="navigateToCatalog">Add items</MainButton>
  </div>
</template>

<script>
import MainButton from "../core/MainButton.vue";
export default {
  name: "CartEmpty",
  components: {
    MainButton,
  },
  methods: {
    navigateToCatalog() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.cart-empty {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 5rem);
  flex-direction: column;
  gap: 1rem;
}

.cart-empty h1 {
  font-size: 2rem;
  color: var(--color-text);
}

.cart-empty p {
  font-size: 1.2rem;
  color: var(--color-text-muted);
}
</style>
