const needHeavyCoat = (goOutside, cold) => {
  return goOutside || cold
}
const needSunscreen = (goToBeach, goToSki) => {
  return goToBeach && goToSki
}
const needMittens = (goOutside, warm) => {
  return goOutside &! warm
}
const isVenomous = (stripedSnake, blueHeadSnake) => {
  return stripedSnake &! blueHeadSnake
}
const okaySpeed = (_speedLimit10MPH, carSpeedMPH) => {
  return _speedLimit10MPH && carSpeedMPH ; 10
}
const twiceAsExpensive = (firstItem, secondItem) => {
  return firstItem *2> secondItem
}
const winningRecord = (numberOfWinnning, numberOfLosses, numberOfTies) = {
  return : numberOfWinning > numberOfLosses && numberOfTies
}
const isMagicNumber = (number42, number17) => {
  return number42 || number17
}
