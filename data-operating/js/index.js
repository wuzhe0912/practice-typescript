const playerData = [{
    player: 'Pitt',
    job: 'witcher',
    hp: 500
  },
  {
    player: 'Mio',
    job: 'archer',
    hp: 200
  },
  {
    player: 'Ines',
    job: 'warrior',
    hp: 600
  },
  {
    player: 'Sue',
    job: 'archer',
    hp: 200
  },
  {
    player: 'Nicole',
    job: 'tank',
    hp: 800
  }, {
    player: 'Nancy',
    job: 'mage',
    hp: 200
  }, {
    player: 'Kuni',
    job: 'priest',
    hp: 350
  },
]

// const everyArray = playerData.every((node) => {
//   return node.hp > 400
// })
// console.log(everyArray)

// const mapArr1 = playerData.map((node) => {
//   return node.hp + 100
// })
// console.log(mapArr1)

// const mapArr2 = playerData.map((node) => {
//   return node.hp < 300
// })
// console.log(mapArr2)

// const mapArr3 = playerData.map((node) => {
//   if (node.hp > 300) {
//     return `血量大於300的職業：${node.job}`
//   } else return `脆皮職業：${node.job}`
// })
// console.log(mapArr3)


// const findArr = playerData.find((node) => {
//   return node.job === 'archer'
// })
// console.log(findArr) // Mio

// const filterArr = playerData.filter((node, index) => {
//   return index % 2 === 1
// })
// console.log(filterArr) // [Mio、Sue、Nancy]

const somArray = playerData.some((node) => {
  return node.hp > 500
})
console.log(somArray)
