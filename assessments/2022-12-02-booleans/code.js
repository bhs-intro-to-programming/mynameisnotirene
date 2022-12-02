const needHeavyCoat = (goOutside, cold) => {
  return goOutside || cold
}
const needSunscreen = (goToBeach, goToSki) => {
  return goToBeach && goToSki
}
const 