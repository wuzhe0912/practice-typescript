// T = type 縮寫
// use generics 將相同邏輯的 function 進行合併，又能避免因型別不同而重複建立 function
function Hello<T>(text: T) {
  console.log(text);
}

Hello("test");
Hello(100);

// 多個 parameters
function Hello2<T, U>(text: T, text2: U) {
  console.log(text, text2);
}

Hello2<string, number>("test2", 100);
Hello2<boolean, string>(true, "new test");
