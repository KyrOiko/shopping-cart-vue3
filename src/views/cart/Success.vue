<template>
  <div class="cart-container" v-if="cartItems.length > 0">
    <div class="order-summary-container">
      <div class="summary-header">
        <h2>Cart Summary</h2>
      </div>
      <div class="summary-container">
        <ItemSummaryCard
          v-for="item in groupedCartItems"
          :key="item.item_id"
          :itemName="item.name"
          :totalItems="item.totalQuantity"
          :totalPrice="item.totalPrice"
          :totalOrders="item.orders"
        />
      </div>
      <div class="coupon-container">
        <ThemedTextField
          type="text"
          @input="onCouponCodeChanged"
          :value="couponCode"
          placeholder="Enter coupon code"
        />
        <MainButton
          @click="onApplyCouponPressed"
          :disabled="applyCouponDisabled"
        >
          {{ couponText }}
        </MainButton>
        <div class="cost-container">
          <TextWithIcon
            icon="fa-solid fa-cart-shopping"
            :text="`Total Items: ${totalItems}`"
          />
          <TextWithIcon
            icon="fa-solid fa-dollar-sign"
            :text="`Gross Item Cost: ${grossItemCost.toFixed(3)} €`"
          />
          <TextWithIcon
            icon="fa-solid fa-dollar-sign"
            :text="`Final Cost: ${cost.toFixed(2)} €`"
          />
        </div>
      </div>
      <MainButton
        @click="onCheckoutPressed"
        :disabled="proceedToCheckoutDisabled"
      >
        Proceed to Checkout
      </MainButton>
    </div>
    <div class="main-cart-view">
      <ItemCard
        v-for="item in cartItems"
        :key="item.item_id"
        :item="item"
        :onRemoveFromCartPressed="onRemoveFromCartPressed"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import MainButton from "../core/MainButton.vue";
import TextWithIcon from "../core/TextWithIcon.vue";
import ThemedTextField from "../core/ThemedTextField.vue";
import ItemCard from "./components/ItemCard.vue";
import ItemSummaryCard from "./components/ItemSummaryCard.vue";
export default {
  name: "CartSuccess",
  components: {
    ThemedTextField,
    MainButton,
    ItemCard,
    ItemSummaryCard,
    TextWithIcon,
  },
  computed: {
    ...mapState("cart", ["cartItems", "couponCode", "couponIsApplied"]),
    ...mapGetters("cart", [
      "grossItemCost",
      "cost",
      "groupedCartItems",
      "couponIsValid",
    ]),
    couponText() {
      if (this.couponIsApplied) {
        return "Clear coupon";
      }
      return "Apply coupon";
    },
    totalItems() {
      return this.cartItems.length;
    },
    applyCouponDisabled() {
      return !this.couponIsValid || this.totalItems.length === 0;
    },
    proceedToCheckoutDisabled() {
      return this.totalItems.length === 0;
    },
  },
  methods: {
    ...mapActions("cart", ["removeItem"]),
    onRemoveFromCartPressed(item) {
      this.removeItem(item.item_id);
    },
    onCouponCodeChanged(event) {
      this.$store.commit("cart/setCouponCode", event.target.value);
    },
    onCheckoutPressed() {
      this.$router.push("/checkout");
    },
    onApplyCouponPressed() {
      if (this.couponIsApplied) {
        this.$store.dispatch("cart/useCoupon");
      } else {
        this.$store.dispatch("cart/applyCoupon");
      }
    },
  },
};
</script>

<style scoped>
.cart-container {
  display: flex;
  flex-direction: row;
  height: calc(100% - 5em);
  width: 100%;
  position: relative;
}

.order-summary-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-bg);
  height: 100%;
  width: 20vw;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: auto;
  align-items: center;
  padding: 16px 16px;
  border-right: 1px solid var(--color-border);
}

.main-cart-view {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 8px;
  background-color: var(--primary-color);
  width: 80vw;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  padding: 16px;
  height: fit-content;
  max-height: 100%;
}

.summary-container {
  height: 100%;
  background-color: var(--color-surface);
  border-radius: 1rem;
  border: 1px solid var(--color-border);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  max-width: 20vw;
  padding: 16px 16px;
}

.coupon-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
}

.summary-header {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-self: flex-start;
}

.summary-header h2 {
  color: var(--color-text);
}

.cost-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-bg);
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid var(--color-border);
  width: 100%;
  background-color: var(--color-surface);
}
</style>
