function getDefaultState() {
  return {
    cartItems: [],
    couponCode: "",
    validCouponCodes: Object.freeze([
      "HAPPYBIRTHDAY",
      "SUMMER",
      "ILIKEAPPLES",
      "ILIKEPEARS",
      "GREEN",
    ]),
    couponIsApplied: false,
  };
}

const state = getDefaultState();

const getters = {
  grossItemCost(state) {
    return state.cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  },
  couponIsValid(state) {
    return state.validCouponCodes.includes(state.couponCode);
  },
  cost(state, getters) {
    if (getters.couponIsValid && state.couponIsApplied) {
      return _handleCoupon(getters.grossItemCost, state.couponCode);
    }
    return getters.grossItemCost;
  },
  groupedCartItems(state) {
    const groupedItems = {};
    state.cartItems.forEach((item) => {
      if (!groupedItems[item.id]) {
        groupedItems[item.id] = {
          ...item,
          totalQuantity: 0,
          totalPrice: 0,
          orders: 0,
        };
      }
      groupedItems[item.id].totalQuantity += item.quantity;
      groupedItems[item.id].totalPrice += item.price * item.quantity;
      groupedItems[item.id].orders += 1;
    });
    return Object.values(groupedItems);
  },
};

const actions = {
  applyCoupon({ state, getters }) {
    if (getters.couponIsValid) {
      state.couponIsApplied = true;
    }
  },
  useCoupon({ state }) {
    state.couponIsApplied = false;
  },
  removeItem({ state }, id) {
    state.cartItems = state.cartItems.filter((item) => item.item_id !== id);
  },
};

const mutations = {
  addItem(state, item) {
    state.cartItems.push(item);
  },
  removeItem(state, id) {
    state.cartItems = state.cartItems.filter((item) => item.item_id !== id);
  },
  setcartItems(state, cartItems) {
    state.cartItems = cartItems;
  },
  setCouponCode(state, couponCode) {
    state.couponCode = couponCode;
  },
};

function _handleCoupon(grossItemCost, couponCode) {
  if (couponCode === "HAPPYBIRTHDAY") {
    return _handleHappyBirthdayCoupon(grossItemCost);
  }
  if (couponCode === "SUMMER") {
    return _handleSummerCoupon(grossItemCost);
  }
  if (couponCode === "ILIKEPEARS") {
    const pears = state.cartItems.filter((item) => item.name.includes("Pear"));
    return _handleILikePearsCoupon(grossItemCost, pears);
  }
  if (couponCode === "ILIKEAPPLES") {
    const apples = state.cartItems.filter((item) =>
      item.name.includes("Apple")
    );
    return _handleILikeApplesCoupon(grossItemCost, apples);
  }
  if (couponCode === "GREEN") {
    const pears = state.cartItems.filter((item) => item.name.includes("Pear"));
    const avocados = state.cartItems.filter((item) =>
      item.name.includes("Avocado")
    );
    return _handleGreenCoupon(grossItemCost, pears, avocados);
  }
}

function _handleHappyBirthdayCoupon(grossItemCost) {
  return 0.8 * grossItemCost;
}

function _handleSummerCoupon(grossItemCost) {
  return grossItemCost - 200;
}

function _handleILikePearsCoupon(grossItemCost, pears) {
  const totalPearsCost =
    pears.length > 0
      ? pears.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0)
      : 0;
  return grossItemCost - 0.4 * totalPearsCost;
}

function _handleILikeApplesCoupon(grossItemCost, apples) {
  const totalApplesCost =
    apples.length > 0
      ? apples.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0)
      : 0;

  return grossItemCost - 0.6 * totalApplesCost;
}

function _handleGreenCoupon(grossItemCost, pears, avocados) {
  const totalPearsCost =
    pears.length > 0
      ? pears.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0)
      : 0;
  const totalAvocadosCost =
    avocados.length > 0
      ? avocados.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0)
      : 0;
  return grossItemCost - 0.3 * (totalPearsCost + totalAvocadosCost);
}

const cartModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default cartModule;
