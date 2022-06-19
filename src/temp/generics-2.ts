// interface with generics
interface Card<T> {
  title: string;
  desc: T;
}

// TT 即 function 傳過來的 parameters
function printCardInfo<TT>(desc: TT): Card<TT> {
  const data: Card<TT> = {
    title: "Mary",
    desc: desc, // 前後名稱一致時，也可以縮寫，例如僅 desc
  };
  return data;
}

console.log(printCardInfo<number>(200));

// class
interface CarProps<T> {
  name: T;
}

class Car<TT> implements CarProps<TT> {
  name: TT;

  constructor(value: TT) {
    this.name = value;
    console.log(1, this.name);
  }
}

const stringCar = new Car<string>("Amigo");
stringCar.name = "Katy";
console.log(2, stringCar.name);
