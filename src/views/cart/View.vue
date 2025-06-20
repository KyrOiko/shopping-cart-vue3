<template>
  <BaseView title="Cart" :showBackButton="true">
    <template #content>
      <CartSuccess v-if="cartItems.length > 0" />
      <CartEmpty v-else />
    </template>
  </BaseView>
</template>

<script>
import { mapState } from "vuex";
import BaseView from "../core/BaseView.vue";
import CartEmpty from "./Empty.vue";
import CartSuccess from "./Success.vue";
export default {
  name: "CartView",
  components: {
    BaseView,
    CartEmpty,
    CartSuccess,
  },
  computed: {
    ...mapState("cart", ["cartItems"]),
  },
};
</script>
