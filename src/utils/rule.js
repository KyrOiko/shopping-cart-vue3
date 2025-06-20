export default class ValidationClass {
  constructor(rules, errorMessage) {
    this.rules = rules;
    this.errorMessage = errorMessage;
  }

  validate(value) {
    return this.rules.every((rule) => rule(value));
  }
}
