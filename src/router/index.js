import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import CartView from "../views/cart/View.vue";
import CatalogView from "../views/catalog/View.vue";
import CheckoutView from "../views/checkout/View.vue";
const routes = [
  {
    path: "/",
    name: "catalog",
    component: CatalogView,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckoutView,
    beforeEnter: (_, __, next) => {
      const cartItems = store.state.cart.cartItems;
      if (cartItems.length === 0) {
        next({ path: "/cart" });
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
