const getX = (object) => {
  return object.x
}
const point = (x, y) => {
  return {x: x, y: y}
}
const emptyObject = (object) => {
  return {}
}
const distance = (x1, x2) => {
  return Math.sqrt( (x1.x - x2.x) **2 + (x1.y - x2.y) **2)
}
const midpoint = (p1, p2) => {
  return {x: (p1.x + p2.x) /2, y: p1.y + p2.y /2}
}