/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const fireAlarm = (_smokeDetected,_plannedFiredrill) => {
  return _smokeDetected || _plannedFireDrill
}
const canBePresident = (_ageInYears,_bornCitizens,_yearsLivedInUS) => {
  return _ageInYears >= 35 && _bornCitizens && _yearsLivedInUS >= 14
}
const willSeeTweet = (_followTweeter,_followRetweeter,_blocked) => {
  return (_followTweeter || _followRetweeter) && !_blocked
}
const evenGreaterThanZero = (n) => {
  return n % 2 === 0
}
let n = year2004
const isLeapYear = (n) => {
  return n % 4 === 0
}
const firstAndLast = (foobar) => {
  return foobar.substring(1, s.length - 1) 
}
const swapFrontAndBack = (foobar) => {
  return 
}