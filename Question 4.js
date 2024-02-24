/* write a class to calculate the Uber price.


class Uber {
    constructor(distance in km, duration, baseFare, costPerMile, costPerMinute) {
      this.distance in km = distance;
      this.duration = duration;
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
    }

    totalPrice() {
      return this.baseFare + (this.distance in km * this.costPerMile) + (this.duration * this.costPerMinute);
    }
  }

  const myUber = new Uber(8,10,5,5,4);
  console.log(myUber.totalPrice());

  //OUTPUT: 
      85//

      
      */