function uniqueSearch(str) {
  for (let symbol of str)
    if (str.indexOf(symbol) === str.lastIndexOf(symbol)) return symbol;
  return null;
}

console.log(uniqueSearch("abccbaf")); // f
console.log(uniqueSearch("lkowlko")); // w
console.log(uniqueSearch("aijijkl")); // a
