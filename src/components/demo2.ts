// <> 泛型，T -> type
function print<T>(data: T) {
  console.log(data);
}

print<string>("Turbo");
print<number>(100);
print<boolean>(true);

// multiple parameters
function printMultiple(...numberList: number[]) {
  console.log(numberList);
}

printMultiple(1, 2, 3, 5, 12, 20, 100);

function calculate(a: number, b: number, c: number, d: number) {
  console.log(a, b, c, d);
}

const numList = [1, 2, 3, 4] as const;
calculate(...numList);
