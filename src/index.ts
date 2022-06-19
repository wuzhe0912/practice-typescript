import "./style.css";

// commonJS
// const data = require("./modules/commonJS");
// console.log(data);

// es6 module
// import { playerName, playerDamage } from "./modules/es6Module";
// console.log(playerName, playerDamage);

// es6 module import all
// import * as data from "./modules/es6Module";
// console.log(1, data);
// console.log(2, data.playerDamage);

import data, { data3 } from "@/modules/es6Module";
console.log(3, data, data3);
