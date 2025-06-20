<template>
  <BaseView title="Checkout" :showBackButton="true">
    <template #content>
      <div class="checkout-container">
        <div class="checkout-form">
          <div class="form-fields">
            <span class="form-fields-title">Payment Information</span>
            <TitledTextField
              title="Name"
              placeholder="Nick Kaloutsos"
              @input="updateName"
              :isValid="isNameValid"
              :rules="nameRules"
              :value="cardInformation.name"
            />
            <TitledTextField
              title="Card Number"
              placeholder="Card Number"
              @input="updateCardNumber"
              :isValid="isCardNumberValid"
              :rules="cardNumberRules"
              :value="cardInformation.cardNumber"
            />
            <div class="card-number-container">
              <TitledTextField
                title="Expiration Date"
                placeholder="MM/YY"
                @input="updateExpirationDate"
                :isValid="isExpirationDateValid"
                :rules="expirationDateRules"
                :value="cardInformation.expirationDate"
              />
              <TitledTextField
                title="CVV"
                placeholder="CVV"
                @input="updateCvv"
                :isValid="isCvvValid"
                :rules="cvvRules"
                :value="cardInformation.cvv"
              />
            </div>
          </div>
          <MainButton
            class="pay-button"
            :onClick="pay"
            :isLoading="loading"
            :disabled="!isCardInformationValid"
          >
            Pay
          </MainButton>
        </div>
        <Snackbar
          message="Successfully paid"
          :duration="3000"
          :isVisible="success"
          ref="snackbar"
        />
      </div>
    </template>
  </BaseView>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import ValidationClass from "../../utils/rule";
import BaseView from "../core/BaseView.vue";
import MainButton from "../core/MainButton.vue";
import Snackbar from "../core/Snackbar.vue";
import TitledTextField from "../core/TitledTextField.vue";
import {
  cardNumberRegex,
  expirationDateRegex,
  cvvRegex,
  nameRegex,
} from "../../utils/regxs";
export default {
  name: "CheckoutView",
  components: {
    TitledTextField,
    BaseView,
    MainButton,
    Snackbar,
  },
  data() {
    return {
      nameRules: new ValidationClass(
        [(value) => nameRegex.test(value)],
        "Insert a valid name"
      ),
      cardNumberRules: new ValidationClass(
        [(value) => cardNumberRegex.test(value)],
        "Insert a valid card number"
      ),
      expirationDateRules: new ValidationClass(
        [(value) => expirationDateRegex.test(value)],
        "Insert a valid expiration date"
      ),
      cvvRules: new ValidationClass(
        [(value) => cvvRegex.test(value)],
        "Insert a valid CVV"
      ),
    };
  },
  computed: {
    ...mapState("checkout", ["loading", "error", "success", "cardInformation"]),
    ...mapGetters("checkout", [
      "isCardInformationValid",
      "isNameValid",
      "isCardNumberValid",
      "isExpirationDateValid",
      "isCvvValid",
    ]),
  },
  methods: {
    pay() {
      this.$store.dispatch("checkout/checkout");
    },
    _updateCardInformation(key, value) {
      this.$store.commit("checkout/setCardInformationByField", { key, value });
    },
    updateName(event) {
      this._updateCardInformation("name", event.target.value);
    },
    updateCardNumber(event) {
      this._updateCardInformation("cardNumber", event.target.value);
    },
    updateExpirationDate(event) {
      this._updateCardInformation("expirationDate", event.target.value);
    },
    updateCvv(event) {
      this._updateCardInformation("cvv", event.target.value);
    },
  },
  watch: {
    success(newVal) {
      if (newVal) {
        this.$refs.snackbar.showSnackbar();
      }
    },
  },
};
</script>

<style scoped>
.checkout-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 5em);
  background-color: var(--color-bg);
  position: relative;
}

.checkout-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  max-width: 500px;
  height: 50%;
  min-height: 500px;
  background-color: var(--color-surface-light);
  border-radius: 16px;
  padding: 16px 16px;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-fields-title {
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--color-text);
}

.card-number-container {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
}
</style>
