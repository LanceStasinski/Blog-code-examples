// 'use strict';
function logDefaultThis() {
  console.log(this);
}
logDefaultThis(); // undefined in strict

const dog = {
  breed: "huskie",
  color: "white",
  name: "Fido",
};

function announceDog(location, owner) {
  console.log(
    this.name +
      " is a " +
      this.color +
      " " +
      this.breed +
      " from " +
      location +
      " and is owned by " +
      owner
  );
}

announceDog.call(dog, "Alaska", "Peter"); // logs 'Fido is a white huskie from Alaska and is owned by Peter'

announceDog.apply(dog, ["Alaska", "Peter"]); // logs 'Fido is a white huskie from Alaska and is owned by Peter'

const announceFido = announceDog.bind(dog, "Alaska", "Peter");
announceFido();