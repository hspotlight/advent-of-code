const inputs = [
  "LLLLL.LLLL.LLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLLLLL.LL.LLLLLLLLL.LLL",
  "LLLLLLLL.L.LLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLL.LLL.LLL.LLLLL.LLLL.L..LLLLLL.LLLLLLLL",
  "LLLLLLLLLLLLLLLLLLLLLLLLLLL.LL.LLLLLLLLLLLLLL..LLLLLLLL.L.LLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLL",
  "LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLL.LLL.LLLLL.LL",
  "LLLLLLLLLL.LLLLL.LLL.LLLLLL.LLLLLLL..LLLLLLLL.LLLLLLLLL.LLLLLLL.LLLLL.LLLLLL..LLLLLL.LLLLLLLL",
  "LLLLLLLLLL..LLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LL.LLLL.LLLLLLLLLLLL.LLLLLLL.LLLLLL.L",
  "L.LL.L...LL......LLL........LL...L.L.L...L...L....L........LL......L.............LL..LL.L...L",
  "LLLLLLLLL..LL.LLLL.L.LL.LLL.LLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLL",
  "LLLLLL.LLL.LLLLLLL.LLLLLLLL.LLLLLLL.LLLLLL.LL.LLLLLLLLL.L.LLLLL.LLLLL.L.LLLL.LLLLLLLLLLLLLLLL",
  "LLLLLLLLLL.L.LLLLLLLLL.LLL..LLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLL.LLLLL.LLLLLL.LLLLLLL.LLLLLLLL",
  "LLLLLLLLLL.LLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLL.L.LLLL.LLLLLLL.LLLLLLLL",
  "LLLLLLLL.L.LLLLLLL.LLLL.LLLLLLLLLLLL.LLLLLLLL.LLLLLLLLL.LLLLLLL.L.LLLLLLLLLL.LLLLLLLLLLLLLL.L",
  "...L..L..L..L...L..L...L............L......L.....L...LLL.........L..L.LL.LL.LL.LLLL..........",
  "LLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLL.LLL.LLL.LLLLLLLL",
  "LL.LLLLLL..LLLLLLL.LLL.LLLL.LLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLL.LLLLL.LLLLLLLL.LLLLLLLL",
  "LLLLLLLLLLLLLLLLLL.LLLLLLLL.L.LLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLL.LL.LL.LLLLLLLLLLLLLLLLLL.LLLL",
  "LLLLLLLLLL.LLLLLLL.LLLLLLLL..LLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.L.LL.LLLLL",
  "LLLLLLLLLL.LLLLLLL.LLLLLLLL.LLLLLLLLLLLLLL.LL.LLLLLLLLL.LLLLLLL.LL.LL.LLL.LLLLLLLLLL.LLLLLLLL",
  "LLLL.LLLLLLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLL.LL.LLLLL.LLLLLL.LLLLLLL.LLL.LLLL",
  "LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LL.LLLLLLL.LL.LLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL",
  "LLLLLL.LLL..LL.LLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLL",
  "LLLLLLLLLL.LLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLL.LLLL.LLL.LLLLLLLL..LLLLLLLLLLLLLLLLLL.LLLLLLLLL",
  ".LL...L......LLL.....L..LL..L.....L.LLLL.L......L.......L...L....L.L..L..LL.L.L.....L.L......",
  "LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLL.LLL.LL.LLLLL",
  "LLLLLLLLLL.LL.LLLL.LLLLLLLLLLLLL.LL.LLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLL..LLLLLLLL.LL.LL.LLLLLLLL",
  "LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLL.L..LLLLLLLLL.LLLLLLLLLLLLLLLL",
  "LLLLLLLLLL.LL.LLLL.LLLLLLLLLLLLLLLL.LLLLLL.LL.LLLLLLLLLLLLLLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLLLL",
  "LLLLLLLLLLLLLLLLLL.LLLLLLLL.LLL.LLL.LLLL.LLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLL.LLLL..LLLLLLL",
  "LLLLLLLLLL.LLLLLLLLLLLL.LLL.LLLLLLLLLLLLLLLLLLLLLLL.LLL.LLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLL.L",
  "LLLLLL.LLLLLLLLLLLLLLLLLLLL.LLL.LLLLLLLLLLLLL.LLLLLLLLL.L.L.LLL.LLLLL..LLLLLLLLLLLLL.LLLLLLLL",
  "LLLLLL.LLLLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLL..LLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLL.LLL.LLLLLLLL",
  "LLLLL...L..L.L..L.L..LL..L..L...L.LL.LLLLL.L...........L....LLLLLL..L..L..L.LL.LL...LL.L.....",
  "LLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.L.LLLLLLLLLLL.LLLL",
  "LLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL..LLLLL.LLLLLLLLLL.LLLLL.LLLLLL.LLLLLLL.LLLLLLLL",
  "L.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLL..LLLLL.LL.LLLLLLLLLL.LLLLLLL.LLLLL.LLLLLL.LLLLLL..LLLLLLLL",
  "LLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLL..LLLLLLLL.LLLLLLL.LLLLL.LL.LLL.LLLL.LL.LL.LLLLL",
  ".L....L.L.L...LL..L.L.LL..L.LL..LL..LLL.LL..L..L.LL..L.......L.....L...LL......LLLL...L.....L",
  "LLLLLLLLLL.LLLLLLLLLLLL.L.L.LLL.LLL.LLLL..LLL.LLLLL.LLL.LLLLLLLLLLLL..LLLLLLLLLLLLLL..LLLLLLL",
  "LLLLLLLLLL.LLLLLLL.LLLLLLLL.LL.LLLL.LLLL.LLLLLLLLL.LLLL.LLLLLLL.LLLLL.LLLLL..LLLLLL.LLLLLLLLL",
  "LLLLLLLLLL.LLL.LLLLL.LLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLL",
  "LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLLL",
  "LLLLLLLLL..LLLLLLL.LLLLLLLL.LLLLLLL.LLLL.LLLL.LLLLLLLLL.LLLLLLL.L.LLL.LLLLLLLLLLLLLLLLLLLLLLL",
  "LLLLLLLLLLLLLL.LLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL..LLLLLLLL",
  "L......LLLL...LLL.L..L.LL...LL.L.....L.LL...L...LL..LL..LLL..L.L.LLL..L..L...L.LLL..L....L...",
  "LLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL..LLLLLLLL.LLLLLLLLL.LL..LLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLL",
  "LLLLLLLLLL..LLLLLL..LLLLLLL..LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLL.L.LLLLLL",
  "LLLLLLLLLLLLLLLLLL.LLLLLLLLLLL..LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLL.LLLLLLLL",
  "LLLLLLLLLL.LLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLL.LLLLL",
  "LLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLL.L.LLL.LLLLLL.LLL.LLL.LL.LLLLL",
  "..LL.LLLLL.L...L...LL.......L.........LL..L.LLL.....LL..L.L.LL..L..L.L..L.L..L...L.L.......LL",
  "LLLLLLLLLL.LLL.L.L.LLLLLLLLLLL.LL.L.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLL.LLLLLLLLLLLLLLLLL",
  "LLLLLLLLLL.LLLL.LLLLLL..LLL.LLLLLLLLLLLLLLLLL.LLLLLLLLLLL.LLLLL.LLLLLLLLLLLL.LLLLLLL.L..LLLLL",
  "LLLLLLLLLLLLLLLLLLL..LLLLLLLL.LL.LL.LL.LLLLLL.LLLL.LLLLLLLL..LL.LLLLLLLLLLLL.LLLLLLL.L.LLLLLL",
  "LLLLLLLLL..LLLLLLL.LLLLLL.LLLLLLLLLLLLLLL.L.LLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLLL",
  "LLLLLLLLLL.LLLLLLL.LLLLL..LLLLLLLLLLLL.LLLLLL.LLLLL.LLL.LLLLLLL.LLLLL.LLLLL..LLLLLLL.LLLLLLLL",
  "LLLLLLLL..LLLLLLLL.LLLLLLLL.LLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLL.LLLLL.LLLLLL.LLLLLLL.LLLLLLLL",
  "LLLLLLLLLL.LLLL.LL.LLLL.LLL.LLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLL.LLLLLLL..LLLLL.L",
  "LL...LL........L.L....L..L....LLL.L...LL.L......L.LL..L...L.L.L.L....L..L.L...L.L.L....L.L..L",
  "LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.L.LLLLLLLL.LLLLLLLL.LLLLLL..LLLLLLL.LLLL.LLLLLLL.LLLLLLLL",
  "LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LL.LLLLLLLLLLLLL",
  "LLLLLLLLL..LLLLLLL.LLLLL.LLLLLLL.LL.LLLLLLLLL.LLLLL.LLL.LLLLLLL..LLLL.LLL.LL.LLLLLLL.LLLLLLLL",
  "LL.LLLLLLL.LLLLLLL.LLLLL.LL.LLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLL",
  "L.LL.LLLLLLLLLLLLL.LLLLLLLL.LL.L.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLL..LLLLLLL.LLLLLLLL",
  "LLLLL.LLLL.LLLLLLL.LLLLLLLL.L.L.LL.LLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLLLL",
  "LLLLLLLLLL.LLLLLLLLLLLLL.LL.LLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLL.L.LLLL.LL.LL.LLLLL",
  "...L.....L............L...L.LL.L.L.L.L...LLL.L.LL.......LL.L.LLLL..LL......L...LLL..L....L...",
  "LLLLLLLL.L.LLLLLLLLLLLLLLLL.LLLLLLL.LLLL.LLLL.LLLLLLLLLLLLLLL..LLLLLLLLLLL.L.LLLLLLLLLLLLLLLL",
  "LLLLLLL..LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLL.LLLLL.LLLLLL.LLLLLLL.LLLLLLLL",
  ".LL.LLLL.L.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLL..LL.LL.L.LLLLL.LLLLLLLLLLLLLL.LLLLLLLL",
  "LLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL..LLLLLLLL.LLL.LLLLLLLLLLLLL.L.LLL.LLLLLL.L.LLLLL.LLLLLLL.",
  "LLLLLLLLLLLL.L.LLL.LLLLLLLL.LL.LLLL.LLLLLLLLL.LLL.L.LLL.LLLLLLL.LLLLLLLLLLLL.LLLLLL..LLLLL..L",
  ".L..LL.......L..L..L.L........LL...LL.LLLLL........L.LLL......L..L.....L.LL....LLL.....LLL.L.",
  ".LLLLLLL.L.LLLLL.L.LLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLL..LLLLLLLLLLL.LLLLLLL.LLLLLLLL",
  "LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LL.LLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLL.L.LLLLLLLLLLLL.LLLLLLLL",
  "LLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLLL.LLL.LLLLLLLLLLLL",
  "LLLLLLLLLLLLLLLLLL.LL.LL.LL.LLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL",
  "LLL.LLLLLL.LLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLL..LLLLLLLLLLL.LLLLLLL.LLLLLLLL",
  "LLLLL.LLLLLLLLLLLL.LL.LLLLL.LLLLL.L.LLLLLL.L..LLLLLLLL..LLLL.LLL.LLLLLLLLLLL.LLLLLLLLLLLL.LLL",
  "LLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLL",
  "LL..L....L...L.L........L.L....L..L..L...L..L..L........L...LLL..L.LL..L........LL..........L",
  "LLLLLLLLLL.LLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLL.L.LLLLLLLLL.LLLL.LL.LLLLL.LLLLLLLLLLL.LL.LLLLLLL.",
  "LLLLLLLLLL.LLLLLLL.LLLLLL.L.LL.L.LL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLL",
  "LLLLLLLLLL.LLLLLLL.LLLLLL.LLL.LLL.L.LLLLLLLLL.LLLLLL.LL.LLLLLL..LLLLL.LLLLLL.LLL.LLLLLLLLLLLL",
  "LLLLLLL.LL.LLLL.LL.LLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLL.LLLLLLLL",
  ".LL.LLLLLLL.LLLLLLLLLLL.LLL.LLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLL.LL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
  "LL.LLLLLLLLLLLLLLL.LLLLLLL..LLLLLLLLLLLLLLLLL.LLLLLLLLL..LLLL.L.LLLLLLLLLLLLLL.LLLLL.LLLLLLLL",
  ".....L.....LLLL......LL.L...LL...L..L........L...L..LL..LL.LL.LL..LL...L.......L..LLL..L...LL",
  "LLLLLLLLLL.LLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLL.L.LLL.LLLLLL.LLLLLL..LLLLLLLL",
  ".LLLLLLL.L.LL.LL.L.LLLLL.L..LLLLLLLLLLLLLLLLLLLLLLLL.LL.LLLLLLLLLLLLL.LLLLLL.LLLL.LL.LLLLLLLL",
  "LLLLLLLLLL..LLLLLL.LLLLLLLL.LLLLLLL..LLLLLLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLLLLLL.LL.LLL.LL.LLLL.",
  "LLLLLLLLLL.LLLLLLL.LLLLLLLL.LLLLLLL.LLL.LL.LL.LLLLL.LLL.LLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLL",
  "LLLLLLLLLL.LLLLLLL.LLLLLLLL.LLLLLLLLL.LLLL.LL.LLL.L.LLL.LLLLLLL.LLL.L.LLLL.LLLLLLLLL.LLLLLLLL",
  "..L...LLL..LL...L.L.LLLL..L.L...L..LLL...L...LLL.....L.....LL.L....L....L.L..L.L.L....L..L..L",
  "LLLLLLLLLLLLLLLLLL.LLL.LLLL.LLLLLLL.LLLLLLLLL.LL.LLLL.LLLLL.L.L.LLLLL.LLLLLL.LLL.LLL.LLLLLL.L",
  "LLLLLLLLLL.LLLLLLLLLLLLLLLL.LL.LL.L.LLLLLLLLL..LL.LLLLL.LLLLLLLLLLL.L.L.L.LL.LLLLLLL.LLLLLLLL",
  "LLLLLLLLLL.LLLLLLL.LLLLLL.LLLLLL.LL.LLLLLLLLLLLLLLLLLLL.LL.LL.L.LLLLL.LLLLLLLLL.LLLL.LLLLLLLL",
  "LLLLLLLLLL..LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLL.L.LLLLLLL.LLLLLLLLLLLL.LLLLLLL..LLLLLLL",
  "LL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLL.LLLLLL.LLL..LL.LLLLLLLL",
];

module.exports = {
    inputs
}