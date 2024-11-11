let locations = ["Bicester","Reading","Oxford","Witney"];

function printLocations()  {
    console.log("=================")
    for(i= 0; i < locations.length; i++) {
        console.log(locations[i]);
    }
}


printLocations();

locations.push("Milton Keyne")

printLocations();

locations.pop();

printLocations();

let result = locations.find(x => x == "Bicesters");

if (result == undefined) {
    console.log("Bicesters not exist")
}
else{
    console.log("Bicesters exist")
}

let index = locations.findIndex(x => x == "Oxford") ;

console.log(index);

if (index == -1) {
    console.log("location does not exist");
}
else {
    console.log("i have found  the location and is called", locations[index]);
}



let locationsEndWithLetterA =locations.filter(x => x.endsWith("d"))

console.log(locationsEndWithLetterA);

