// ts Member Type
// public private protected
// 未聲明的屬性，預設為 public
// private 私人的，只有自己可以使用，但僅有開發階段可以應用，compile to js 時仍會顯示屬性
class memberInfo {
  id: number;
  private name: string = "Karen";
  protected address: string = "text......";
  // use function return private variable
  getName() {
    return this.name;
  }
}

const member1 = new memberInfo();
console.log(1, member1);
// allow to use, but can's edit private variable
console.log(2, member1.getName());

// protected can use extends to get variable, but private cann't
class StreamInfo extends memberInfo {
  hello() {
    console.log(3, this.address);
  }
}

const stream1 = new StreamInfo();
stream1.hello();

// // vanilla js member private(2020)
// class vanillaInfo {
//   // 需要針對 tsconfig 設定 target 為 es6
//   #name: string = "Hello";
//   getName() {
//     return this.#name;
//   }
// }

// const vanilla1 = new vanillaInfo();
// console.log(4, vanilla1.getName());
