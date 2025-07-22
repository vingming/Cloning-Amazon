class Car{
  #brand;
  #model;
  speed;
  isTrunkOpen;

  constructor(brand, model){
    this.#brand = brand;
    this.#model = model;
    this.speed = 0;
    this.isTrunkOpen = false;
  }

  displayInfo(){
    console.log(`${this.#brand} ${this.#model}, 
      Trunk: ${this.isTrunkOpen ? 'Open' : 'Closed'}, 
      Speed: ${this.speed} km/h`);
  }

  go(){
    if (!this.isTrunkOpen && this.speed >= 0 && this.speed < 200){
      this.speed += 5;
    }
  }

  brake(){
    if (this.speed > 0 && this.speed <= 200){
      this.speed -= 5;
    }
  }

  openTrunk(){
    if(this.speed === 0){
      this.isTrunkOpen = true;
    }
  }

  closeTrunk(){
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car{
  acceleration;

  constructor(brand, model, acceleration){
    super(brand, model);
    this.acceleration = acceleration;
  }

  go(){
    if (!this.isTrunkOpen && this.speed >= 0 && this.speed < 300){
      this.speed += this.acceleration;
    }
  }
  
  openTrunk(){
    this.isTrunkOpen = false;
  }

  closeTrunk(){
    this.isTrunkOpen = false;
  }
}

const car1 = new Car('Toyota', 'Corolla');
const car2 = new Car('Tesla', 'Model 3');
const car3 = new RaceCar('McLaren', 'F1', 20);

//example 1
console.log('Example 1 (speed)');
car1.go();
car1.displayInfo();
car1.brake();
car1.displayInfo();

car2.go();
car2.displayInfo();
car2.brake();
car2.displayInfo();

//example 2
console.log('Example 2 (speed)');
car1.openTrunk();
car1.displayInfo();

car1.go();
car1.displayInfo();

car1.closeTrunk();
car1.displayInfo();

car1.go();
car1.displayInfo();

//example 3
console.log('Example 3 (raceCar)');
car3.displayInfo();

car3.go();
car3.displayInfo();

car3.openTrunk();
car3.displayInfo();

car3.go();
car3.displayInfo();

car3.closeTrunk();
car3.displayInfo();

for(let i=1; i<=8; i++){
  car3.brake();
  car3.displayInfo();
}

//example 4 (private access)
