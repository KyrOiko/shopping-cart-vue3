import CardInformation from "@/domain/card_information";
import productsService from "@/services/products";
function getDefaultState() {
  return {
    loading: false,
    error: null,
    success: null,
    cardInformation: CardInformation.default(),
  };
}

const state = getDefaultState();

const mutations = {
  setLoadingState(state) {
    state.success = null;
    state.loading = true;
    state.error = null;
  },
  setErrorState(state, error) {
    state.loading = false;
    state.error = error;
  },
  setSuccessState(state) {
    state.loading = false;
    state.error = null;
    state.success = true;
  },
  setCardInformationByField(state, { key, value }) {
    state.cardInformation[key] = value;
  },
};

const actions = {
  async checkout({ commit }, productId) {
    commit("setLoadingState");
    try {
      await productsService.checkout(productId);
      commit("setSuccessState");
    } catch (error) {
      commit("setErrorState", error);
    }
  },
};

const getters = {
  isCardInformationValid: (state) => {
    return state.cardInformation.isValid();
  },
  isNameValid: (state) => {
    return state.cardInformation.isNameValid();
  },
  isCardNumberValid: (state) => {
    return state.cardInformation.isCardNumberValid();
  },
  isExpirationDateValid: (state) => {
    return state.cardInformation.isExpirationDateValid();
  },
  isCvvValid: (state) => {
    return state.cardInformation.isCvvValid();
  },
};

const checkoutModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default checkoutModule;
