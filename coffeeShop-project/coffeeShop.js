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
      if (this.drinkRequirements[drinkType] && this.drinkRequirements[drinkType].mats < this.beans) {
        this.money += this.drinkRequirements[drinkType].price;
        console.log("Thank you for your order " + drinkType + " is $" + this.drinkRequirements[drinkType].price + " We now have $" + this.money);
        this.beans = this.beans - this.drinkRequirements[drinkType].mats;
        console.log("STOCK OF BEANS: " + this.beans);
      }
      else if (this.drinkRequirements[drinkType] && this.drinkRequirements[drinkType].mats > this.beans) {
        console.log("Hold on buying " + this.drinkRequirements[drinkType].mats + " more beans. I only have " + this.beans + " beans, please try again in a minute" );
        coffeeShop.buySupplies(this.drinkRequirements[drinkType].mats);
        console.log("I now have " + this.beans + " beans. I am ready to make your drink");
      }
      else {console.log("I don't make that. Leave!!!!!!!!")};
    }
};
