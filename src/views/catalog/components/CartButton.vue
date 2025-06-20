<template>
  <div class="cart-button">
    <div class="cart-button-icon-container">
      <IconButton
        @click="onClick"
        icon="fa-solid fa-cart-shopping"
        class="cart-button-icon"
        :size="25"
      />
      <div class="cart-button-badge" v-if="totalItems > 0">
        {{ totalItems }}
      </div>
    </div>
    <IconButton
      @click="onClick"
      icon="fa-solid fa-arrow-right"
      class="go-to-cart-button"
      :size="12"
    />
  </div>
</template>

<script>
import IconButton from "../../core/IconButton.vue";
export default {
  name: "CartButton",
  components: {
    IconButton,
  },
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    totalItems: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.cart-button {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cart-button-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: var(--color-error);
  color: var(--color-text);
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
}

.cart-button-icon {
  width: 35px;
  height: 35px;
}

.cart-button-icon-container {
  position: relative;
}

.go-to-cart-button {
  color: var(--color-text);
  font-size: 12px;
  font-weight: 600;
}
</style>
