<template>
  <div class="item-summary-card">
    <span class="item-summary-card-name">{{ itemName }}</span>

    <TextWithIcon
      icon="fa-solid fa-weight"
      :text="`Total quantity: ${totalItems} kg`"
    />
    <TextWithIcon
      icon="fa-solid fa-dollar-sign"
      :text="`Total price: ${totalPrice.toFixed(2)} €`"
    />
    <TextWithIcon
      icon="fa-solid fa-cart-shopping"
      :text="`Split into ${totalOrders} orders`"
    />
  </div>
</template>

<script>
import TextWithIcon from "../../core/TextWithIcon.vue";
export default {
  name: "ItemSummaryCard",
  components: {
    TextWithIcon,
  },
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    totalOrders: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.item-summary-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  align-items: start;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 16px 16px;
  background-color: var(--color-surface-light);
}
.item-summary-card-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text);
}
.item-summary-card-total-items {
  font-size: 14px;
  color: var(--color-text);
}
.item-summary-card-total-price {
  font-size: 14px;
  color: var(--color-text);
}
</style>
