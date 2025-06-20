<template>
  <BaseView title="Catalog">
    <template #content>
      <Success v-if="!loading" />
      <Loading v-else />
    </template>
    <template #headerTrailing>
      <CartButton @click="onCartIconPressed" :totalItems="cartItems.length" />
    </template>
  </BaseView>
</template>

<script>
import { mapActions, mapState } from "vuex";
import BaseView from "../core/BaseView.vue";
import CartButton from "./components/CartButton.vue";
import Loading from "./Loading.vue";
import Success from "./Success.vue";
export default {
  name: "CatalogView",
  components: {
    BaseView,
    CartButton,
    Loading,
    Success,
  },
  computed: {
    ...mapState("catalog", ["products", "loading"]),
    ...mapState("cart", ["cartItems"]),
  },
  methods: {
    ...mapActions("catalog", ["fetchProducts"]),
    onCartIconPressed() {
      this.$router.push("/cart");
    },
  },
  mounted() {
    if (this.products.length === 0) {
      this.fetchProducts();
    }
  },
};
</script>
