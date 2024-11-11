class Car {
    constructor(regNumber, name, year, maxMileage) {
        this.regNumber = regNumber;
        this.name = name;
        this.year = year;
        this.engineStarted = false;
        this.mileage = 0;
        this.maxMileage = maxMileage;
    }

    getAge() {
        const today = new Date();
        return today.getFullYear() - this.year;
    }

    startEngine() {
        if (this.engineStarted == false) {
            this.engineStarted = true;
            console.log('Engine started');
        }
        else {
            console.log('Engine already started');
        }
    }


    stopEngine() {

        if (this.engineStarted == false) {
            console.log("Engine has already stopped");

        }
        else {
            this.engineStarted = false;
            console.log("Engine stopped");
        }
    }

    drive(drove) {
        if (drove + this.mileage > this.maxMileage) {
            console.log("i need more fuel");
            this.engineStarted = false
            return;
        }

        if (this.engineStarted == true) {
            this.mileage = this.mileage + drove;
            console.log('Car drove', this.mileage, 'mile');

        }
        else {
            console.log(' Cannot drive the car.The engine has stopped');


        }

    }
}



    const carA = new Car("123", "Ford", 1991, 100);
    const carB = new Car("123456", "BMW", 2024, 10000);