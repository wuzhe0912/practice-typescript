// class & super
class Animal4 {
  name: string;
  constructor(nameParam: string) {
    this.name = nameParam;
  }
  run() {
    console.log(1, `${this.name} running...`);
  }
}

class Dog4 extends Animal4 {
  run() {
    super.run();
    console.log(2, `dog running...`);
  }
}
class Cat4 extends Animal4 {}

const dog4 = new Dog4("Cyrus");
dog4.run();

// abstract
// 聲明 abstract class，其繼承後必須實作 abstract method
abstract class Animal5 {
  run() {
    console.log(1, `running...`);
  }
  abstract hello(): void;
}

class Dog5 extends Animal5 {
  hello() {
    console.log(2, `hello...`);
  }
}

const dog5 = new Dog5();
dog5.run();
dog5.hello();
