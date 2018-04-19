var coffeeShop = {
  beans: 40,
  money: 20,
  drinkRequirements: {
    latte: {
      mats: 10,
     price: 2},
    americano: {
      mats: 5,
     price: 1},
    doubleShot: {
      mats: 15,
     price: 3},
    frenchPress:{
      mats: 12,
     price: 4}
  },
  makeDrink: function (drinkType) {
    if (this.drinkRequirements[drinkType] && this.drinkRequirements[drinkType][this.mats] < this.beans) {
      this.beans = this.beans - this.drinkRequirements[drinkType][this.mats];
      console.log("Here is your " + drinkType + " we have " + this.beans + " beans left");
      return true;
    }
    else if (this.drinkRequirements[drinkType] && this.drinkRequirements[drinkType][this.mats] > this.beans ) {
      console.log("Out of beans all we have left is " + this.beans + " beans");
    }
    else {console.log("We don't make that drink we have " + this.beans + " beans left");}
  },
  buySupplies: function(amount) {
    this.money -= amount;
    this.beans += amount;
    console.log("Amount of money left is " + this.money + " you just bought " + amount + " beans. You now have " + this.beans + "  beans");
  },
    buyDrink: function(drinkType){
      if (this.drinkRequirements[drinkType].mats && this.drinkRequirements[drinkType].mats < this.beans) {
        this.money += this.drinkRequirements[drinkType]price;
        console.log("Thank you for your order " + drinkType + " is $" + this.drinkRequirements[drinkType]price + "We now have $" + this.money);
      }
    }
};

// coffeeShop.makeDrink('latte');
// coffeeShop.makeDrink('americano');
// coffeeShop.makeDrink('doubleShot');
// coffeeShop.makeDrink('frenchPress');
// coffeeShop.buySupplies(5);
// coffeeShop.makeDrink('frenchPress');
coffeeShop.buyDrink("latte")
