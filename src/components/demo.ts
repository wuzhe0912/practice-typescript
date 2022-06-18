// Tuple
// tuple 指定陣列中排序內容，也能用於二維 array
const tuple1: [number, string] = [20, "Hello"];
const tuple2: [number, number][] = [
  [20, 20],
  [110, 110],
];

let num1: number;

num1 = 20;

let obj1 = {
  name: "Yumi",
  age: 20,
};

// ? => options
let obj2: { name: string; age?: number };

obj2 = {
  name: "Nancy",
};

// 斷言，主要應用於手動驗證資料類別的正確性，常見於 call api 的資料
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = (await res.json()) as {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  // 斷言也能用於檢查資料內的屬性
  console.log(1, data);
}

getData();

// unknown & any 兩者非常類似，前者類似於安全 any
/* 
  建立一個聊天室，根據聊天室狀態，決定聊天室名稱
  如果沒有做類型推斷，有可能會在賦值出現型別錯誤
*/

const liveStatus = false;

function getLiveName() {
  let liveName: unknown; // 改用 unknown 可以手動確認資料型別
  if (liveStatus) {
    liveName = "Public";
  } else {
    liveName = null;
  }
  return liveName;
}

const result = getLiveName();
if (typeof result === "string") {
  result.split("123");
}

// never 代表永遠不會發生的錯誤或者執行結果
let liveName: string | number;
liveName = "Open";
liveName = 123;

// 上述中，liveName 被賦值為 number，因此永遠不會進入下面的判斷式，造成錯誤
// if (typeof liveName === "string") {
//   liveName.split();
// }

// 強制斷言
// 變數在多層程式碼中，可能會從原始的 number 想要轉為 string，可以透過先轉為 unknown 斷言，再強制轉換
let liveName2 = 100;

// ...bla bla

let liveName3 = liveName2 as unknown as string;

// 自定義類型
type newType = string | number;
let liveName4: newType;
liveName4 = 123;

type OBJ = { status: boolean; uid: number };
let obj3: OBJ;
obj3 = {
  status: true,
  uid: 123,
};

// interface 乍看之下與 type 類似
interface UserCard {
  name: string;
  age: number;
}

const userCard: UserCard = {
  name: "Nancy",
  age: 20,
};

console.log(1, userCard);

// 擴充
type Animal = {
  name: string;
};

type Dog = Animal & {
  age: number;
};

type Cat = Animal;

let dog: Dog = {
  name: "Gamie",
  age: 2,
};

let cat: Cat = {
  name: "Kant",
};

// use interface 擴充
interface Animal2 {
  name: string;
}

interface Dog2 extends Animal2 {}

let dog2: Dog2 = {
  name: "Tamie",
};

// type 無法重複宣告，但 inteerface 可以
// 當宣告了兩個相同的 interface 時，會自動合併
interface Animal3 {
  name: string;
}

interface Animal3 {
  age: number;
}

let dog3: Animal3 = {
  name: "John",
  age: 6,
};

// enum
enum LiveStatus2 {
  "straming" = 0,
  "closed" = 1,
  "mutiple" = 2,
}

let liveStatus2 = 0;

if (liveStatus2 === LiveStatus2.straming) {
  // ...
}

// function
function getValue(a: string, b: number) {
  return a + b;
}

getValue("123", 123);

// optional parameter
// 回傳參數若為可選，那可能拿到 undefined，因此會提示需先做判斷
function setUser(name: string, age?: string) {
  if (typeof age === "string") {
    return age.split("");
  }
}

// return type
// auto
function getUser() {
  return 10;
}

// manual
function getUser2(): string {
  return "userName";
}

type Info = {
  uid: string;
  name: string;
};

function getInfo(info: Info) {
  console.log(1, info.name);
  return info;
}

function getArray() {
  return [1, 2, "Neirong"] as [number, number, string];
}

const [id, age, playerName] = getArray();
