class Laptop {
  constructor(name, owner) {
    this.name = name;
    this.owner = owner;
  }
  code() {
    console.log(
      `The ${this.name} is Coding at Lightspeeds in the hands of ${this.owner}`
    );
  }
  getLaptopName() {
    return this.name;
  }
  getOwner() {
    return this.owner;
  }
}

class GamingLaptop extends Laptop {
  constructor(name, owner, manufacture) {
    super(name, owner);
    this.manufacture = manufacture;
  }
  game() {
    console.log(
      `The ${this.manufacture}'s ${this.name} can also be used to play performance demanding games`
    );
  }
  getManufacture() {
    return this.manufacture;
  }
}

class PremiumLaptop extends GamingLaptop {
  constructor({ name, owner, manufacture, price }) {
    super(name, owner, manufacture);
    this.price = price;
  }

  getPrice() {
    const FormattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0
    }).format(this.price);
  }
  expensive() {
    console.log(
      `${this.owner} must've been a rich person, they had a(n) ${this.manufacture}'s ${this.name}, that would've cost atleast ${this.price}`
    );
  }
}

const laptop1 = new PremiumLaptop({
  name: "TUFF",
  owner: "Baim",
  manufacture: "ASUS",
  price: "1000"
});

console.log(laptop1);

laptop1.code();
laptop1.game();
laptop1.expensive();

const gameTime = function(hours) {
  console.log(`${this.owner} has been playing games for ${hours} hours`);
};
console.log("GameTime....(Call Function)");

gameTime.call(laptop1, 20);
