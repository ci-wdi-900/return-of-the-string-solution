function capitalize(str) {
  return str.toUpperCase();
}

function exclaim(str) {
  return str + '!';
}

function firstCharacter(str) {
  return str[0];
}

function lastCharacter(str) {
  return str[str.length - 1];
}

function oneCharacter(str, i) {
  return str[i];
}

function twoCharacters(str, i1, i2) {
  return str[i1] + str[i2];
}

function yeller(str) {
  return str.toUpperCase() + '!!!'
}

function initials(str) {
  return str[0] + '.' + str[str.indexOf(' ') + 1] + '.';
}


/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof capitalize === 'undefined') {
  capitalize = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof firstCharacter === 'undefined') {
  firstCharacter = undefined;
}

if (typeof lastCharacter === 'undefined') {
  lastCharacter = undefined;
}

if (typeof oneCharacter === 'undefined') {
  oneCharacter = undefined;
}

if (typeof twoCharacters === 'undefined') {
  twoCharacters = undefined;
}

if (typeof initials === 'undefined') {
  initials = undefined;
}

if (typeof yeller === 'undefined') {
  yeller = undefined;
}


module.exports = {
  capitalize,
  exclaim,
  firstCharacter,
  lastCharacter,
  oneCharacter,
  twoCharacters,
  initials,
  yeller,
};