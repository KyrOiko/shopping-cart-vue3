<template>
  <div class="product-card">
    <div class="product-card-header">
      <h2>{{ product.name }}</h2>
    </div>
    <div class="product-card-price">
      <span>Price</span>
      <p>{{ product.price }}</p>
    </div>
    <div class="product-card-actions">
      <ThemedTextField
        @input="onQuantityChanged(product, $event)"
        type="number"
        :min="0"
        :max="50"
        :value="product.quantity"
        :rules="quantityRules"
      />
      <IconButton
        @click="onAddToCartPressed(product)"
        :disabled="addButtonDisabled"
        icon="fa-solid fa-plus"
      />
    </div>
  </div>
</template>

<script>
import ValidationClass from "../../../utils/rule";
import IconButton from "../../core/IconButton.vue";
import ThemedTextField from "../../core/ThemedTextField.vue";
export default {
  name: "ProductCard",
  components: {
    IconButton,
    ThemedTextField,
  },
  data() {
    return {
      quantityRules: new ValidationClass(
        [(value) => value <= 20],
        "quantity must be less than 20"
      ),
    };
  },
  computed: {
    addButtonDisabled() {
      return this.product.quantity <= 0 || this.product.quantity > 20;
    },
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
    onAddToCartPressed: {
      type: Function,
      required: true,
    },
    onQuantityChanged: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 10px 16px;
  display: flex;
  height: 150px;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  min-width: 300px;
}
.product-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
}
.product-card-header h2 {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text);
}
.product-card-price {
  font-size: 14px;
  color: var(--color-text);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
.product-card-price span {
  font-size: 12px;
  color: var(--color-text-disabled);
}
.product-card-actions {
  display: flex;
  align-items: center;
  max-width: 100%;
  gap: 10px;
  max-width: fit-content;
}
</style>
