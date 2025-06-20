import { createStore } from "vuex";
import cartModule from "./cart";
import catalogModule from "./catalog";
import checkoutModule from "./checkout";
export default createStore({
  state: {
    theme: "dark",
  },
  getters: {},
  mutations: {
    setTheme(state, theme) {
      state.theme = theme;
    },
  },
  actions: {},
  modules: {
    catalog: catalogModule,
    cart: cartModule,
    checkout: checkoutModule,
  },
});
