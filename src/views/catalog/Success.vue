<template>
  <div class="content">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      :onAddToCartPressed="onAddToCartPressed"
      :onQuantityChanged="onQuantityChanged"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ProductCard from "./components/ProductCard.vue";
export default {
  name: "CatalogView",
  components: {
    ProductCard,
  },
  computed: {
    ...mapState("catalog", ["products"]),
  },
  methods: {
    ...mapActions("catalog", ["addItemToCart"]),
    onAddToCartPressed(product) {
      const item = {
        ...product,
        item_id: crypto.randomUUID(),
      };
      this.addItemToCart(item);
    },
    onQuantityChanged(product, event) {
      this.$store.commit("catalog/setQuantity", {
        product,
        quantity: Number(event.target.value),
      });
    },
    onCartIconPressed() {
      this.$router.push("/cart");
    },
  },
};
</script>

<style scoped>
.product {
  border: 1px solid #ccc;
  padding: 0;
  margin: 0;
}
.content {
  padding: 16px;
  overflow-y: auto;
  max-height: calc(100% - 5em);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}
</style>
