import { cardNumberRegex, cvvRegex, nameRegex } from "../utils/regxs";
export default class CardInformation {
  constructor(name, cardNumber, expirationDate, cvv) {
    this.name = name;
    this.cardNumber = cardNumber;
    this.expirationDate = expirationDate;
    this.cvv = cvv;
  }

  static default() {
    return new CardInformation("", "", "", "");
  }

  isValid() {
    return (
      this.isNameValid() &&
      this.isCardNumberValid() &&
      this.isExpirationDateValid() &&
      this.isCvvValid()
    );
  }

  isNameValid() {
    return nameRegex.test(this.name) && this.name.length > 0;
  }

  isCardNumberValid() {
    return cardNumberRegex.test(this.cardNumber) && this.cardNumber.length > 0;
  }

  isExpirationDateValid() {
    const [month, year] = this.expirationDate.split("/").map(Number);
    const currentDate = new Date();
    const expirationDate = new Date(year + 2000, month - 1, 1);
    return expirationDate > currentDate;
  }

  isCvvValid() {
    return cvvRegex.test(this.cvv) && this.cvv.length > 0;
  }
}
