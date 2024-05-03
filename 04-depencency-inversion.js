class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity);
    // this.stripe.makePayment(200 * quantity * 100);
  }

  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity);
    // this.stripe.makePayment(15 * quantity * 100);
  }
}

class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }

  pay(amountInGil) {
    this.stripe.makePayment(amountInGil * 100);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(
      `${this.user} made payment of Gil${amountInCents / 100} with Stripe`
    );
  }
}

class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new Paypal();
  }

  pay(amountInGil) {
    this.paypal.makePayment(this.user, amountInGil);
  }
}

class Paypal {
  makePayment(user, amountInGil) {
    console.log(`${user} made payment of Gil${amountInGil} with Paypal`);
  }
}

const store = new Store(new StripePaymentProcessor("Blue"));
store.purchaseBike(2);
store.purchaseHelmet(2);

const store2 = new Store(new PaypalPaymentProcessor("Blue"));
store.purchaseBike(2);
store.purchaseHelmet(2);

// Any higher classes should always depend upon the abstraction of the class rather than the detail
