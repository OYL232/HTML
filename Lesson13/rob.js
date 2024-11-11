class Robot {
    constructor(name, age, maxEnergy, maxBullet) {
        this.age = age;
        this.maxEnergy = maxEnergy;
        this.name = name;
        this.maxBullet = maxBullet;
        this.battery = false;

    }
    TurnOn() {
        if (this.battery == false) {
            this.battery = true;
            console.log('You have turned on the robot');
        }
        else {
            console.log('The robot has already turned on');
        }
    }


    TurnOff() {

        if (this.battery == true) {
            this.battery = false;
            console.log('You have turned off the robot');
        }
        else {
            console.log('The robot has already turned off');
        }
    }

    Shoot() {
        if (this.maxBullet < 1) {
            console.log('out of ammo, cannot shoot')
            return;
        }

        if (this.battery == true) {
            console.log('shot bullet')
            this.maxBullet = this.maxBullet - 1;
            console.log(this.maxBullet + ' bullets left')
        }
        else {
            this.battery = false;
            console.log('Robot is off, Cannot shoot')
        }
    }




    Walk() {
        console.log("Walking");

    }

}


const Bob = new Robot(10, "Bob", 12, 2);

Bob.TurnOn();
Bob.Shoot();
Bob.Shoot();
Bob.Shoot();
Bob.Shoot();
Bob.Shoot();





