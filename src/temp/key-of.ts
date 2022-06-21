interface PlayerCard {
  name: string;
  attack: number;
  defense: number;
  description: string;
}

type P1 = keyof PlayerCard; // "name" | "attack" | "defense" | "description"

// const a: P1 '123'; // error: '123' is not assignable to type 'P1'
const b: P1 = "name"; // ok

// generic
function getValue2<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
