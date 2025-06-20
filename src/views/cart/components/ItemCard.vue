<template>
  <div class="item-card">
    <div class="item-card-header">
      <h2>{{ item.name }}</h2>
      <IconButton
        @click="onRemoveFromCartPressed(item)"
        icon="fa-solid fa-xmark"
      />
    </div>
    <div class="item-card-price">
      <div class="item-card-price-row">
        <font-awesome-icon :icon="['fas', 'dollar-sign']" />
        <p>{{ totalPrice.toFixed(2) }} €</p>
      </div>
      <div class="item-card-price-row">
        <font-awesome-icon :icon="['fas', 'weight']" />
        <p>{{ item.quantity }} kg</p>
      </div>
    </div>
  </div>
</template>

<script>
import IconButton from "../../core/IconButton.vue";
export default {
  name: "ItemCard",
  components: {
    IconButton,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    onRemoveFromCartPressed: {
      type: Function,
      required: true,
    },
    onQuantityChanged: {
      type: Function,
      required: true,
    },
  },
  computed: {
    totalPrice() {
      return this.item.price * this.item.quantity;
    },
  },
};
</script>

<style scoped>
.item-card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 10px 16px;
  display: flex;
  gap: 10px;
  max-width: 300px;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-surface-light);
}
.item-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}
.item-card-header h2 {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text);
}
.item-card-price {
  font-size: 14px;
  color: var(--color-text);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
.item-card-price span {
  font-size: 12px;
  color: var(--color-text-disabled);
}
.item-card-actions {
  display: flex;
  align-items: center;
  max-width: 100%;
  gap: 10px;
  max-width: fit-content;
}
.item-card-price-row {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 10px 16px;
}
</style>
