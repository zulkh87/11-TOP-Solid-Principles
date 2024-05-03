class Store {
  constructor(user) {
    this.paypal = new Paypal();
    this.user = user;
    // this.stripe = new Stripe(user);
  }

  purchaseBike(quantity) {
    this.paypal.makePayment(this.user, 200 * quantity);
    // this.stripe.makePayment(200 * quantity * 100);
  }

  purchaseHelmet(quantity) {
    this.paypal.makePayment(this.user, 15 * quantity);
    // this.stripe.makePayment(15 * quantity * 100);
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

class Paypal {
  makePayment(user, amountInGil) {
    console.log(`${user} made payment of Gil${amountInGil} with Paypal`);
  }
}

const store = new Store("Blue");
store.purchaseBike(2);
store.purchaseHelmet(2);
