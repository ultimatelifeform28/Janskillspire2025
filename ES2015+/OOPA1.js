class Car{
    constructor(topSpeed){
        this.topSpeed = topSpeed;
        this.location = 0;

}

printTopSpeed() {
    console.log('Top Speed: ${this.topSpeed} mph');
}

drive() {
    this.location += 10;
    console.log('Current Location: ${this.location} miles');
}

stop() {
    console.log('Car stopped. Final location: ${this.location} miles');
}
}

const myCar = new Car(120);
myCar.printTopSpeed();

mycar.drive();
mycar.drive();
