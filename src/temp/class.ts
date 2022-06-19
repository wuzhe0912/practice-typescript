// user system
// include name, age, address, email
// crud => add, update, delete

// design object
class User {
  // constructor -> change the default value of property -> build object
  constructor(nameValue: string, ageValue: number, addressValue: string) {
    this.name = nameValue;
    this.age = ageValue;
    this.address = addressValue;
  }

  // 成員
  // property(variable)
  name: string;
  age: number;
  address: string;

  // 功能(function)
  add() {}
  update() {}
  delete() {}
}

const user1 = new User("Frank", 20, "aaa");
const user2 = new User("RayMond", 30, "bbb");
const user3 = new User("Karen", 22, "ccc");

console.log(1, user1);
console.log(2, user2);
console.log(3, user3);

interface UserInterface {
  uid: number;
  name: string;
  age: number;
  address: string;

  add: (data: unknown) => void;
  update: (uid: number) => boolean;
  delete: (uid: number) => boolean;
}

class LiveUser implements UserInterface {
  uid: number;
  name: string;
  age: number;
  address: string;

  add(data: unknown) {
    console.log(data);
  }

  update(uid: number) {
    // ...
    return true;
  }

  delete(uid: number) {
    // ...
    return true;
  }

  startLive() {}
  closeLive() {}
}
