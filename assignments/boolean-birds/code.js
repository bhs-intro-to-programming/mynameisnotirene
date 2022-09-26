/*
 * Important facts about the birds of Booleana.
 *
 * Coloration and markings:
 *
 *   - Flobby Birds and Bloggy Birds are red.
 *   - Flibble Birds and Globby Birds are not red.
 *   - Flobby Birds and Flibble Birds are spotted.
 *   - Bloggy Birds and Globby Birds are not spotted.
 *
 * Diet:
 *
 *   - Flobby Birds eat fish, nuts, and worms.
 *   - Bloggy Birds eat mice, nuts, and worms.
 *   - Flibble Birds eat fish, mice, and worms.
 *   - Globby Birds eat fish, mice, and nuts.
 *
 */
const isFlobbyBird = (_isRed,_isSpotted) => {
  return _isRed && _isSpotted
}
const isBloggyBird = (_isRed,_isSpotted) => {
  return _isRed && !_isSpotted
}
const isFlibbleBird = (_isRed,_isSpotted) => {
  return !_isRed && _isSpotted
}
const isGlobbyBird = (_isRed,_isSpotted) => {
  return !_isRed && !_isSpotted 
}
const eatsWorms = (_isRed,_isSpotted) => {
  return _isRed || _isSpotted
}
const eatsNuts = (_isRed,_isSpotted) => {
  return _isRed || !_isSpotted
}
const eatsFish = (_isRed,_isSpotted) => {
  return !_isRed || _isSpotted
}
const eatsMice = (_isRed,_isSpotted) => {
  return !_isRed || !_isSpotted
}
const isRed = (birdR) => {
  return birdR === "Flobby" || birdR === "Bloggy"
}
const isSpotted= (birdS) => {
  return birdS === "Flobby" || birdS === "Flibble"
}