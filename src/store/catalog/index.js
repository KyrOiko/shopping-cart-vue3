import productsService from "@/services/products";

function getDefaultState() {
  return {
    products: [],
    loading: true,
    error: null,
  };
}

const state = getDefaultState();

const mutations = {
  setLoadingState(state) {
    state.loading = true;
    state.error = null;
  },
  setSuccessState(state, products) {
    state.loading = false;
    state.error = null;
    state.products = products;
  },
  setErrorState(state, error) {
    state.loading = false;
    state.error = error;
  },
  setQuantity(state, { product, quantity }) {
    console.log(product, quantity);
    const productIndex = state.products.findIndex((p) => p.id === product.id);
    if (productIndex !== -1) {
      state.products[productIndex].quantity = quantity;
    }
  },
};

const actions = {
  async fetchProducts({ commit }) {
    try {
      commit("setLoadingState");
      const products = await productsService.getProducts();
      const productsWithQuantity = products.map((product) => ({
        ...product,
        quantity: 0,
      }));
      commit("setSuccessState", productsWithQuantity);
    } catch (error) {
      commit("setErrorState", error);
    }
  },
  addItemToCart({ commit }, item) {
    commit("cart/addItem", item, { root: true });
  },
};

const getters = {};

const catalogModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default catalogModule;
