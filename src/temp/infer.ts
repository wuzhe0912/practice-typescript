// 預設 type 型態為 array
function sliceArray<T extends Array<T>>(a: T) {
  console.log(a.length);
}

// 當條件被滿足時，infer 才會被觸發
type TT7<T> = T extends Array<infer U> ? U : never;
// 無法 extends，因為 string !== Array
type R1 = TT7<"string">;
// 滿足條件，infer 自動推斷 Array 中帶有哪些類別
type R2 = TT7<["string", 100]>;

type ParamType<T> = T extends (param1: infer U) => any ? U : never;
type R3 = ParamType<(uuid: number) => void>;

interface UserCard {
  name: string;
}
type R4 = ParamType<(a: UserCard) => void>;

type R5 = ParamType<[]>;
