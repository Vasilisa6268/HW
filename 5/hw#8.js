//#8
let car = new Map([
    ['x', 'y']
  ]);
  for (let name of car.keys ()) {
    console.log(name);
  }
  //'x'
  for (let fuel of car.values()) {
    console.log(fuel);
  }
  //'y'
  for (let elem of car) {
    console.log(elem);
  }
  //['x', 'y']