// 在條件判斷下，決定繼承內容
// 子類別是否兼容父類別
type T1 = string extends string ? string : number;

interface A {
  name: string;
}

interface B extends A {}

// 子介面是否兼容父介面
type T2 = B extends A ? string : number;

// 判斷兩邊介面能否完全兼容，如果能，則為true，否則為false
// 這個案例中，D extends C，因為 C 的屬性和 D 的屬性都有 name，所以為 true
// 反之，如果 C 的屬性中，多出其他屬性，且為 D 所沒有的屬性，則為 false
interface C {
  name: string;
  // description: string;
}
interface D {
  name: string;
  status: boolean;
}
type T3 = D extends C ? string : number;

// basic generic
// type T4 = "James" extends "James" ? string : number;
type TT1<T> = T extends "James" ? T : number;
type res = TT1<"James">;

// union
// type T5 = "Paul" | "James" extends "James" ? string : number;
type TT2<T> = T extends "James" ? string : number;
type res2 = TT2<"Paul" | "James">;

// 在 union 中使用 generic 會依序執行所有條件，檢查是否符合並返回，即下面的步驟
// 1. 'Paul' -> T return string
// 2. 'James' -> T return number

// never 是所有類型的子類別
// type T6 = never extends "Russell" ? string : number;
type TT3<T> = T extends "Russell" ? string : number;
// 在 ts 中，never 會被視為空的 union，而不回傳任何值
type res3 = TT3<never>;

// 當使用 [] 包裹 generic 時，會被視為要完全符合所有條件
// 因此這個寫法等同於下述寫法
// type TT4 = "Moa" | "Dodo" extends "Dodo" ? string : number;
type TT4<T> = [T] extends ["Dodo"] ? string : number;
type res4 = TT4<"Moa" | "Dodo">;
