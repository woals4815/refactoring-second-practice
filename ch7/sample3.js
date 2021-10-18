class Order {
  constructor(data) {
    this.priority = data.priority;
  }
  get priority() {
    return this._priority;
  }
  set priority(aString) {
    return (this._priority = aString);
  }
}

class Priority {
  constructor(value) {
    this._value = value;
  }
  toString() {
    return this._value;
  }
}
